import React, { useState } from 'react';
import type { SamplePaper } from '../data/samplePapers';
import { BookOpen, FileCheck, Layers, Hash, Sparkles } from 'lucide-react';

interface EditorProps {
  paper: SamplePaper;
  onChange: (updated: SamplePaper) => void;
}

export const Editor: React.FC<EditorProps> = ({ paper, onChange }) => {
  const [activeTab, setActiveTab] = useState<'abstract' | 'intro' | 'methods' | 'results' | 'discussion' | 'references'>('abstract');

  const countWords = (text: string) => text.trim().split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5 flex flex-col h-full shadow-xl">
      {/* Title & Meta Header */}
      <div className="mb-4 space-y-3 pb-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-400 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Manuskrip Ilmiah Aktif
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Target: {paper.targetJournal.split('(')[0]}
          </span>
        </div>

        <div>
          <label className="text-[11px] font-mono text-slate-400 block mb-1">Judul Manuskrip</label>
          <input
            type="text"
            value={paper.title}
            onChange={(e) => onChange({ ...paper, title: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-sm font-semibold text-white outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] font-mono text-slate-400 block mb-1">Penulis &amp; Afiliasi</label>
            <input
              type="text"
              value={paper.authors}
              onChange={(e) => onChange({ ...paper, authors: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-1.5 text-xs text-slate-200 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] font-mono text-slate-400 block mb-1">Target Publikasi (SINTA/Scopus)</label>
            <input
              type="text"
              value={paper.targetJournal}
              onChange={(e) => onChange({ ...paper, targetJournal: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-1.5 text-xs text-slate-200 outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Section Switcher Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 border-b border-slate-800/80 scrollbar-none text-xs">
        <button
          onClick={() => setActiveTab('abstract')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'abstract'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>Abstrak ({countWords(paper.abstract)})</span>
        </button>

        <button
          onClick={() => setActiveTab('intro')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'intro'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Introduction ({countWords(paper.introduction)})</span>
        </button>

        <button
          onClick={() => setActiveTab('methods')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'methods'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Methods ({countWords(paper.methods)})</span>
        </button>

        <button
          onClick={() => setActiveTab('results')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'results'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Hash className="w-3.5 h-3.5" />
          <span>Results ({countWords(paper.results)})</span>
        </button>

        <button
          onClick={() => setActiveTab('discussion')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'discussion'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <span>Discussion ({countWords(paper.discussion)})</span>
        </button>

        <button
          onClick={() => setActiveTab('references')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'references'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <span>References</span>
        </button>
      </div>

      {/* Editor Body */}
      <div className="flex-1 flex flex-col min-h-[350px]">
        {activeTab === 'abstract' && (
          <div className="space-y-3 flex-1 flex flex-col">
            <div className="flex-1 flex flex-col">
              <label className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                <span>Naskah Abstrak (Bilingual / English)</span>
                <span className={countWords(paper.abstract) >= 150 && countWords(paper.abstract) <= 250 ? 'text-emerald-400' : 'text-amber-400'}>
                  {countWords(paper.abstract)} kata (Standar: 150-250)
                </span>
              </label>
              <textarea
                value={paper.abstract}
                onChange={(e) => onChange({ ...paper, abstract: e.target.value })}
                className="w-full flex-1 min-h-[220px] bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed outline-none transition-colors font-sans"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-400 mb-1 block">Kata Kunci (Keywords, dipisahkan koma)</label>
              <input
                type="text"
                value={paper.keywords}
                onChange={(e) => onChange({ ...paper, keywords: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none transition-colors font-mono"
              />
            </div>
          </div>
        )}

        {activeTab === 'intro' && (
          <div className="flex-1 flex flex-col">
            <label className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
              <span>Pendahuluan / Background, Gap &amp; Urgensi</span>
              <span className="text-slate-400">{countWords(paper.introduction)} kata</span>
            </label>
            <textarea
              value={paper.introduction}
              onChange={(e) => onChange({ ...paper, introduction: e.target.value })}
              className="w-full flex-1 min-h-[320px] bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed outline-none transition-colors font-sans"
            />
          </div>
        )}

        {activeTab === 'methods' && (
          <div className="flex-1 flex flex-col">
            <label className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
              <span>Metodologi / Pipeline Eksperimen &amp; Reproducibility</span>
              <span className="text-slate-400">{countWords(paper.methods)} kata</span>
            </label>
            <textarea
              value={paper.methods}
              onChange={(e) => onChange({ ...paper, methods: e.target.value })}
              className="w-full flex-1 min-h-[320px] bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed outline-none transition-colors font-sans"
            />
          </div>
        )}

        {activeTab === 'results' && (
          <div className="flex-1 flex flex-col">
            <label className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
              <span>Hasil Penelitian / Data Empiris, Metrik &amp; Uji Signifikansi</span>
              <span className="text-slate-400">{countWords(paper.results)} kata</span>
            </label>
            <textarea
              value={paper.results}
              onChange={(e) => onChange({ ...paper, results: e.target.value })}
              className="w-full flex-1 min-h-[320px] bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed outline-none transition-colors font-sans"
            />
          </div>
        )}

        {activeTab === 'discussion' && (
          <div className="flex-1 flex flex-col">
            <label className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
              <span>Pembahasan / Komparasi Literatur, Limitasi &amp; Future Work</span>
              <span className="text-slate-400">{countWords(paper.discussion)} kata</span>
            </label>
            <textarea
              value={paper.discussion}
              onChange={(e) => onChange({ ...paper, discussion: e.target.value })}
              className="w-full flex-1 min-h-[320px] bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed outline-none transition-colors font-sans"
            />
          </div>
        )}

        {activeTab === 'references' && (
          <div className="flex-1 flex flex-col">
            <label className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
              <span>Daftar Pustaka (References APA / IEEE Style)</span>
              <span className="text-slate-400">{paper.references.split('\n').filter(l => l.trim().length > 0).length} Entri</span>
            </label>
            <textarea
              value={paper.references}
              onChange={(e) => onChange({ ...paper, references: e.target.value })}
              className="w-full flex-1 min-h-[320px] bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed outline-none transition-colors font-mono"
            />
          </div>
        )}
      </div>
    </div>
  );
};
