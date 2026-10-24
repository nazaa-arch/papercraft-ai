import type { AuditReport, StatisticalFinding, CitationMatch } from '../types/manuscript';
import type { SamplePaper } from '../data/samplePapers';

export function runComprehensiveAudit(paper: SamplePaper): AuditReport {
  const fullText = `${paper.title} ${paper.abstract} ${paper.introduction} ${paper.methods} ${paper.results} ${paper.discussion}`;
  const words = fullText.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCountTotal = words.length;
  const readingTimeMinutes = Math.max(1, Math.round(wordCountTotal / 200));

  // 1. IMRaD Structural Checks
  const structuralChecks = [
    {
      title: 'Judul Lugas & Spesifik (< 22 Kata)',
      passed: paper.title.trim().split(/\s+/).length <= 22 && paper.title.trim().split(/\s+/).length >= 5,
      recommendation: 'Judul artikel ilmiah sebaiknya memuat variabel kunci, metodologi utama, dan tidak melebihi 22 kata.',
      category: 'IMRaD' as const
    },
    {
      title: 'Struktur Abstrak Komprehensif (120-300 Kata)',
      passed: paper.abstract.trim().split(/\s+/).length >= 120 && paper.abstract.trim().split(/\s+/).length <= 300,
      recommendation: 'Abstrak ideal memuat Latar Belakang (1 kalimat), Tujuan, Metode, Temuan Kunci, dan Implikasi dalam 150-250 kata.',
      category: 'IMRaD' as const
    },
    {
      title: 'Kata Kunci Terstandarisasi (3-7 Keywords)',
      passed: paper.keywords.split(',').length >= 3 && paper.keywords.split(',').length <= 7,
      recommendation: 'Sediakan 3 sampai 6 kata kunci spesifik yang umum diindeks di Scopus/DOAJ/SINTA.',
      category: 'IMRaD' as const
    },
    {
      title: 'Artikulasi Research Gap & State-of-the-Art (Introduction)',
      passed: /gap|novelty|previous studies|however|to bridge|in contrast|belum ada|keterbatasan/i.test(paper.introduction),
      recommendation: 'Bagian Pendahuluan wajib menegaskan "Research Gap" dan kelemahan solusi penelitian sebelumnya.',
      category: 'IMRaD' as const
    },
    {
      title: 'Protokol Etik & Transparansi Data (Methods)',
      passed: /ethic|anonym|reproducib|dataset|protocol|sampel|parameter|persetujuan/i.test(paper.methods),
      recommendation: 'Metode harus menjelaskan transparansi pengambilan data, lisensi/protokol etik, dan replikasi eksperimen.',
      category: 'Ethics' as const
    },
    {
      title: 'Pengujian Signifikansi Statistik Objektif (Results)',
      passed: /p\s*[<>=]|accuracy|f1|r2|chi-square|mcnemar|anova|t-test|rmse|uji/i.test(paper.results),
      recommendation: 'Hasil penelitian wajib menyajikan metrik terukur dan uji signifikansi statistik (p-value / uji hipotesis).',
      category: 'Reproducibility' as const
    },
    {
      title: 'Komparasi dengan Penelitian Terkait & Limitasi (Discussion)',
      passed: /comparison|related works|limitation|future work|dibandingkan|kelemahan/i.test(paper.discussion),
      recommendation: 'Pembahasan wajib membandingkan hasil dengan literatur benchmark dan mengakui limitasi riset.',
      category: 'Clarity' as const
    }
  ];

  const imradPassedCount = structuralChecks.filter(c => c.passed).length;
  const imradScore = Math.round((imradPassedCount / structuralChecks.length) * 100);

  // 2. Statistical Findings Extraction
  const statisticalFindings: StatisticalFinding[] = [];
  
  // Extract p-values
  const pRegex = /p\s*([<>=])\s*([0-9.]+)/gi;
  let pMatch;
  while ((pMatch = pRegex.exec(fullText)) !== null) {
    const op = pMatch[1];
    const val = parseFloat(pMatch[2]);
    const isSig = (op === '<' && val <= 0.05) || (op === '=' && val < 0.05);
    statisticalFindings.push({
      raw: pMatch[0],
      type: 'p-value',
      value: val,
      context: fullText.slice(Math.max(0, pMatch.index - 40), Math.min(fullText.length, pMatch.index + 50)),
      isConsistent: true,
      verdict: isSig ? 'Signifikan Secara Statistik (α = 0.05)' : 'Tidak Signifikan (Gagal Tolak H0)'
    });
  }

  // Extract Accuracies & F1
  const metricRegex = /(accuracy|Macro-F1|F1-score|RMSE|R2)\s*([=:])\s*([0-9.]+%?)/gi;
  let mMatch;
  while ((mMatch = metricRegex.exec(fullText)) !== null) {
    statisticalFindings.push({
      raw: mMatch[0],
      type: mMatch[1].toLowerCase().includes('accuracy') ? 'accuracy' : 'f1-score',
      value: mMatch[3],
      context: fullText.slice(Math.max(0, mMatch.index - 35), Math.min(fullText.length, mMatch.index + 45)),
      isConsistent: true,
      verdict: 'Metrik Performa Teridentifikasi'
    });
  }

  // Extract Chi-square / McNemar
  const chiRegex = /(chi[- ]?square|mcnemar|W)\s*=\s*([0-9.]+)/gi;
  let cMatch;
  while ((cMatch = chiRegex.exec(fullText)) !== null) {
    statisticalFindings.push({
      raw: cMatch[0],
      type: 'chi2',
      value: parseFloat(cMatch[2]),
      context: fullText.slice(Math.max(0, cMatch.index - 35), Math.min(fullText.length, cMatch.index + 45)),
      isConsistent: true,
      verdict: 'Statistik Uji Nonparametrik'
    });
  }

  const statsScore = statisticalFindings.length > 0 ? Math.min(100, 60 + (statisticalFindings.length * 8)) : 40;

  // 3. In-Text Citations vs References Matching
  const inTextCitations: string[] = [];
  const citationRegex = /([A-Z][a-zA-Z]+(?:\s+et\s+al\.)?,\s+[12][0-9]{3})/g;
  let citMatch;
  while ((citMatch = citationRegex.exec(fullText)) !== null) {
    const cit = citMatch[1];
    if (!inTextCitations.includes(cit)) {
      inTextCitations.push(cit);
    }
  }

  const referenceLines = paper.references.split('\n').filter(l => l.trim().length > 0);
  const citations: CitationMatch[] = [];

  // Match in-text against references
  inTextCitations.forEach(cit => {
    const authorFirst = cit.split(',')[0].replace(' et al.', '').trim();
    const year = cit.match(/[12][0-9]{3}/)?.[0] || '';
    const hasRef = referenceLines.some(ref => ref.includes(authorFirst) && (year ? ref.includes(year) : true));
    citations.push({
      citation: cit,
      foundInText: true,
      foundInReferences: hasRef,
      status: hasRef ? 'matched' : 'missing-reference'
    });
  });

  // Check unused references
  referenceLines.forEach(ref => {
    const firstAuthor = ref.split(',')[0].trim();
    const isCited = inTextCitations.some(c => c.includes(firstAuthor));
    if (!isCited && firstAuthor.length > 3) {
      citations.push({
        citation: `${firstAuthor} (Daftar Pustaka)`,
        foundInText: false,
        foundInReferences: true,
        status: 'unused-reference'
      });
    }
  });

  const matchedCits = citations.filter(c => c.status === 'matched').length;
  const citationScore = citations.length > 0 ? Math.round((matchedCits / citations.length) * 100) : 50;

  // 4. Formality & SINTA/Scopus Readiness
  const formalityScore = 92;
  const overallScore = Math.round((imradScore * 0.35) + (statsScore * 0.25) + (citationScore * 0.25) + (formalityScore * 0.15));

  let sintaTarget = 'SINTA 3 - 4';
  let scopusTarget = 'Q3 - Q4 Candidate';
  if (overallScore >= 85) {
    sintaTarget = 'SINTA 1 (Akreditasi A / Tertinggi)';
    scopusTarget = 'Scopus Q1 / Q2 (High-Impact Ready)';
  } else if (overallScore >= 75) {
    sintaTarget = 'SINTA 2 (Sangat Baik)';
    scopusTarget = 'Scopus Q2 / Q3 Candidate';
  }

  return {
    overallScore,
    imradScore,
    statsScore,
    citationScore,
    formalityScore,
    journalReadiness: {
      sintaTarget,
      scopusTarget,
      readinessPct: overallScore
    },
    structuralChecks,
    statisticalFindings,
    citations,
    wordCountTotal,
    readingTimeMinutes
  };
}
