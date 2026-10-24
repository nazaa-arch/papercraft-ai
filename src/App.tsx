import { useState, useEffect } from 'react';
import { SAMPLE_PAPERS, type SamplePaper } from './data/samplePapers';
import { runComprehensiveAudit } from './services/auditEngine';
import type { AuditReport } from './types/manuscript';
import { Navbar } from './components/Navbar';
import { Editor } from './components/Editor';
import { AuditPanel } from './components/AuditPanel';
import { VeriLabModal } from './components/VeriLabModal';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function App() {
  const [paper, setPaper] = useState<SamplePaper>(SAMPLE_PAPERS[0]);
  const [report, setReport] = useState<AuditReport>(() => runComprehensiveAudit(SAMPLE_PAPERS[0]));
  const [isAuditing, setIsAuditing] = useState(false);
  const [isVeriLabModalOpen, setIsVeriLabModalOpen] = useState(false);

  useEffect(() => {
    setReport(runComprehensiveAudit(paper));
  }, [paper]);

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setReport(runComprehensiveAudit(paper));
      setIsAuditing(false);
    }, 450);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f6fb] text-[#111d2d] selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentPaperId={paper.id}
        onSelectPaper={(selected) => setPaper(selected)}
        onRunAudit={handleRunAudit}
        isAuditing={isAuditing}
      />

      {/* Hero Sub-header / Status Pill */}
      <div className="border-b border-slate-200 bg-white/70 backdrop-blur py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600">
              Bagian dari <strong>SteamCraft Ecosystem</strong> (<a href="https://steamcraft.online" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-semibold">steamcraft.online</a>)
            </span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-500">Target Subdomain: <code className="text-indigo-600 font-mono font-semibold">scholar.steamcraft.online</code></span>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              VeriLab Engine API Live
            </span>
            <span className="text-slate-300">|</span>
            <span>Lead Developer: <strong className="text-slate-800">Muhammad Naza Firmansyah</strong></span>
          </div>
        </div>
      </div>

      {/* Main Workspace (Split Grid) */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[680px]">
          
          {/* Left Column (7 Cols): Segmented Manuscript Editor */}
          <div className="lg:col-span-7 h-full">
            <Editor paper={paper} onChange={setPaper} />
          </div>

          {/* Right Column (5 Cols): Real-time AI Audit Intelligence Panel */}
          <div className="lg:col-span-5 h-full">
            <AuditPanel
              report={report}
              onOpenVeriLabModal={() => setIsVeriLabModalOpen(true)}
            />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>PaperCraft AI &bull; Created &amp; Developed by <strong>Muhammad Naza Firmansyah</strong> &bull; &copy; 2026</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="https://steamcraft.online" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">SteamCraft</a>
            <a href="https://app.steamcraft.online" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Web App</a>
            <a href="https://verilab.steamcraft.online" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors">VeriLab AI</a>
            <a href="https://portofolionaza.steamcraft.online" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">Portofolio Naza</a>
          </div>
        </div>
      </footer>

      {/* VeriLab Engine Connection Modal */}
      <VeriLabModal
        isOpen={isVeriLabModalOpen}
        onClose={() => setIsVeriLabModalOpen(false)}
      />
    </div>
  );
}
export default App;
