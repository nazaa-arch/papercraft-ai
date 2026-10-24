export interface ManuscriptSection {
  id: 'title' | 'abstract' | 'keywords' | 'introduction' | 'methods' | 'results' | 'discussion' | 'references';
  name: string;
  content: string;
  wordCount: number;
  status: 'valid' | 'warning' | 'missing';
}

export interface StatisticalFinding {
  raw: string;
  type: 'p-value' | 'f-stat' | 't-stat' | 'r2' | 'accuracy' | 'f1-score' | 'chi2';
  value: number | string;
  context: string;
  isConsistent: boolean;
  verdict: string;
}

export interface CitationMatch {
  citation: string;
  foundInText: boolean;
  foundInReferences: boolean;
  status: 'matched' | 'missing-reference' | 'unused-reference';
}

export interface AuditReport {
  overallScore: number;
  imradScore: number;
  statsScore: number;
  citationScore: number;
  formalityScore: number;
  journalReadiness: {
    sintaTarget: string;
    scopusTarget: string;
    readinessPct: number;
  };
  structuralChecks: {
    title: string;
    passed: boolean;
    recommendation: string;
    category: 'IMRaD' | 'Reproducibility' | 'Ethics' | 'Clarity';
  }[];
  statisticalFindings: StatisticalFinding[];
  citations: CitationMatch[];
  wordCountTotal: number;
  readingTimeMinutes: number;
}
