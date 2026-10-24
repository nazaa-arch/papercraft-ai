import React from 'react';
import { FileText, Sparkles, ExternalLink, ShieldCheck, Microscope, FolderGit2 } from 'lucide-react';
import { SAMPLE_PAPERS, type SamplePaper } from '../data/samplePapers';

interface NavbarProps {
  currentPaperId: string;
  onSelectPaper: (paper: SamplePaper) => void;
  onRunAudit: () => void;
  isAuditing: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPaperId,
  onSelectPaper,
  onRunAudit,
  isAuditing
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white font-mono">PaperCraft<span className="text-indigo-400">.AI</span></span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                v1.0.0 BETA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Scientific Manuscript &amp; IMRaD Integrity Auditor
            </p>
          </div>
        </div>

        {/* Ecosystem Subdomain Badges */}
        <div className="hidden lg:flex items-center gap-2 text-xs">
          <a
            href="https://steamcraft.online"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all"
            title="Ecosystem Landing Page"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>steamcraft.online</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
          <a
            href="https://verilab.steamcraft.online"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all"
            title="VeriLab AI Scientific Engine"
          >
            <Microscope className="w-3.5 h-3.5 text-emerald-400" />
            <span>verilab.steamcraft.online</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
          <a
            href="https://portofolionaza.steamcraft.online"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all"
            title="Portfolio Naza"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>portofolionaza</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
        </div>

        {/* Right Actions: Paper Selector & Run Audit */}
        <div className="flex items-center gap-3">
          <select
            value={currentPaperId}
            onChange={(e) => {
              const selected = SAMPLE_PAPERS.find(p => p.id === e.target.value);
              if (selected) onSelectPaper(selected);
            }}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition-colors cursor-pointer max-w-[190px] sm:max-w-none truncate"
          >
            {SAMPLE_PAPERS.map((p, idx) => (
              <option key={p.id} value={p.id}>
                📄 Contoh {idx + 1}: {p.title.length > 36 ? p.title.slice(0, 36) + '...' : p.title}
              </option>
            ))}
          </select>

          <button
            onClick={onRunAudit}
            disabled={isAuditing}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-indigo-500/20 active:scale-95 transition-all disabled:opacity-50"
          >
            <Sparkles className={`w-3.5 h-3.5 ${isAuditing ? 'animate-spin' : ''}`} />
            <span>{isAuditing ? 'Mengaudit...' : 'Audit Naskah'}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
