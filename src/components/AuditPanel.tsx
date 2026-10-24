import React, { useState } from 'react';
import type { AuditReport } from '../types/manuscript';
import { CheckCircle2, AlertTriangle, Shield, BarChart3, BookmarkCheck, Award, Zap, Download } from 'lucide-react';

interface AuditPanelProps {
  report: AuditReport;
  onOpenVeriLabModal: () => void;
}

export const AuditPanel: React.FC<AuditPanelProps> = ({ report, onOpenVeriLabModal }) => {
  const [activeTab, setActiveTab] = useState<'imrad' | 'stats' | 'citations' | 'journal'>('imrad');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col h-full shadow-sm">
      {/* Top Score Banner */}
      <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 p-4 rounded-xl border border-indigo-100 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono text-indigo-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Skor Integritas Ilmiah
            </div>
            <div className="text-2xl font-black text-slate-900 mt-1 flex items-baseline gap-1.5">
              <span>{report.overallScore}</span>
              <span className="text-xs text-indigo-600 font-sans font-semibold">/ 100</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {report.journalReadiness.scopusTarget}
            </span>
            <div className="text-[11px] text-slate-600 mt-1">
              {report.wordCountTotal} Total Kata &bull; ~{report.readingTimeMinutes} mnt baca
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-700"
            style={{ width: `${report.overallScore}%` }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 mb-4 text-xs">
        <button
          onClick={() => setActiveTab('imrad')}
          className={`py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'imrad' ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">IMRaD</span>
        </button>

        <button
          onClick={() => setActiveTab('stats')}
          className={`py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'stats' ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Statistik</span>
        </button>

        <button
          onClick={() => setActiveTab('citations')}
          className={`py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'citations' ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookmarkCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Sitasi</span>
        </button>

        <button
          onClick={() => setActiveTab('journal')}
          className={`py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'journal' ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Jurnal</span>
        </button>
      </div>

      {/* Tab 1: IMRaD Checklist */}
      {activeTab === 'imrad' && (
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <span>Daftar Periksa Struktur IMRaD</span>
            <span className="text-emerald-400 font-mono font-semibold">
              {report.structuralChecks.filter(c => c.passed).length}/{report.structuralChecks.length} Terpenuhi
            </span>
          </div>

          {report.structuralChecks.map((item, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all ${
                item.passed
                  ? 'bg-slate-50/60 border-slate-200/80 hover:border-slate-700'
                  : 'bg-amber-950/20 border-amber-500/30'
              }`}
            >
              <div className="flex items-start gap-2.5">
                {item.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800">{item.title}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-600">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {item.recommendation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Statistical Findings & VeriLab AI Engine */}
      {activeTab === 'stats' && (
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/50 to-teal-950/30 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-bold text-white">VeriLab AI Engine Bridge</div>
                <div className="text-[10px] text-emerald-300">verilab-api.onrender.com (Docker Microservice)</div>
              </div>
            </div>
            <button
              onClick={onOpenVeriLabModal}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md active:scale-95"
            >
              Uji Koneksi Engine
            </button>
          </div>

          <div className="text-xs text-slate-600 flex items-center justify-between">
            <span>Klaim Statistik Terdeteksi dalam Naskah ({report.statisticalFindings.length})</span>
            <span className="text-[10px] font-mono text-indigo-600">Auto-Extracted NLP</span>
          </div>

          {report.statisticalFindings.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500">
              Tidak ada klaim statistik numerik (p-value, accuracy, chi-square) yang terdeteksi.
            </div>
          ) : (
            report.statisticalFindings.map((finding, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50/70 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                    {finding.raw}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-700">
                    {finding.verdict}
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 italic bg-white/50 p-2 rounded-lg border border-slate-200/50 mt-1">
                  "...{finding.context}..."
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 3: Citation Matcher */}
      {activeTab === 'citations' && (
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
            <span>Pemeriksaan Sitasi In-Text vs Daftar Pustaka</span>
            <span className="text-xs font-mono font-semibold text-cyan-400">
              {report.citations.filter(c => c.status === 'matched').length} Cocok
            </span>
          </div>

          {report.citations.map((c, idx) => (
            <div
              key={idx}
              className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                c.status === 'matched'
                  ? 'bg-slate-50/60 border-slate-200/80 text-slate-800'
                  : c.status === 'missing-reference'
                  ? 'bg-red-950/20 border-red-500/30 text-red-200'
                  : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
              }`}
            >
              <div className="flex items-center gap-2 truncate pr-2">
                {c.status === 'matched' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                )}
                <span className="font-mono text-[11px] truncate">{c.citation}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded shrink-0 bg-slate-800">
                {c.status === 'matched'
                  ? 'Tervalidasi'
                  : c.status === 'missing-reference'
                  ? 'Kurang di Daftar Pustaka'
                  : 'Belum Disitir di Teks'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Journal Pre-Flight Rubric */}
      {activeTab === 'journal' && (
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2">
            <div className="text-[11px] font-mono text-amber-400 uppercase font-bold">Rekomendasi Tingkat Publikasi</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-center">
                <div className="text-[10px] text-slate-600">Target Nasional</div>
                <div className="font-bold text-indigo-300 mt-0.5">{report.journalReadiness.sintaTarget}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-center">
                <div className="text-[10px] text-slate-600">Target Internasional</div>
                <div className="font-bold text-emerald-300 mt-0.5">{report.journalReadiness.scopusTarget}</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-600 uppercase">Parameter Kelayakan Teknis</div>
            
            <div className="p-2.5 rounded-xl bg-slate-50/60 border border-slate-200 flex items-center justify-between">
              <span>Kelengkapan Struktur IMRaD</span>
              <span className="font-mono font-bold text-indigo-600">{report.imradScore}%</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50/60 border border-slate-200 flex items-center justify-between">
              <span>Verifikasi Bukti Empiris &amp; Statistik</span>
              <span className="font-mono font-bold text-emerald-400">{report.statsScore}%</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50/60 border border-slate-200 flex items-center justify-between">
              <span>Konsistensi Sitasi &amp; Referensi</span>
              <span className="font-mono font-bold text-cyan-400">{report.citationScore}%</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50/60 border border-slate-200 flex items-center justify-between">
              <span>Formalitas Nada Akademik</span>
              <span className="font-mono font-bold text-purple-400">{report.formalityScore}%</span>
            </div>
          </div>

          {/* Export Action */}
          <button
            onClick={() => {
              const textContent = `LAPORAN AUDIT ILMIAH PAPERCRAFT AI\nSkor: ${report.overallScore}/100\nTarget: ${report.journalReadiness.scopusTarget}\nTotal Kata: ${report.wordCountTotal}\nTanggal: ${new Date().toLocaleDateString()}`;
              const blob = new Blob([textContent], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'Laporan_Audit_PaperCraft_AI.txt';
              a.click();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-800 font-semibold text-xs transition-all flex items-center justify-center gap-2 mt-4"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Ekspor Ringkasan Audit (TXT/Dossier)</span>
          </button>
        </div>
      )}
    </div>
  );
};
