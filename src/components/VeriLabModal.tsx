import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, RefreshCw, Server, Shield, ExternalLink } from 'lucide-react';

interface VeriLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VeriLabModal: React.FC<VeriLabModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [latency, setLatency] = useState<number | null>(null);
  const [responseDetails, setResponseDetails] = useState<any>(null);

  if (!isOpen) return null;

  const testConnection = async () => {
    setStatus('loading');
    const start = performance.now();
    try {
      const res = await fetch('https://verilab-api.onrender.com/api/v1/health', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      const end = performance.now();
      setLatency(Math.round(end - start));

      if (res.ok) {
        const data = await res.json();
        setResponseDetails(data);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err: any) {
      setStatus('error');
      setResponseDetails({ error: err.message || 'Koneksi gagal dijangkau' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl space-y-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">VeriLab AI Microservice Bridge</h3>
            <p className="text-xs text-slate-400">Integrasi API Produksi di Render Cloud Docker</p>
          </div>
        </div>

        {/* Endpoint Info */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
          <div className="text-[10px] text-slate-500 uppercase">Target Endpoint:</div>
          <div className="text-emerald-400 font-semibold break-all">
            https://verilab-api.onrender.com/api/v1/health
          </div>
        </div>

        {/* Result Box */}
        {status === 'loading' && (
          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col items-center justify-center text-xs text-slate-300 gap-2">
            <RefreshCw className="w-6 h-6 text-indigo-400 animate-spin" />
            <span>Menghubungi VeriLab AI Engine di Render...</span>
          </div>
        )}

        {status === 'success' && (
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Backend Terhubung &amp; Sehat (Healthy)
              </span>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200">
                {latency} ms
              </span>
            </div>
            <pre className="text-[11px] font-mono text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800 overflow-x-auto">
              {JSON.stringify(responseDetails, null, 2)}
            </pre>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Instance Render Sedang Warming Up (Cold-Start)
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Layanan backend gratis Render masuk ke mode tidur jika tidak ada request selama 15 menit. Request pertama membutuhkan waktu ~30-50 detik untuk booting kontainer Docker. Silakan coba lagi.
            </p>
          </div>
        )}

        {status === 'idle' && (
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span>Verifikasi Keabsahan Statistik Naskah</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              PaperCraft AI dapat mengirimkan klaim angka eksperimen langsung ke mesin VeriLab AI untuk menghitung ulang nilai uji hipotesis, residual Gaussian Process Regression, dan parameter metrologi secara otomatis.
            </p>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
          <a
            href="https://verilab-api.onrender.com/docs"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-mono"
          >
            <span>Buka Swagger API Docs</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={testConnection}
              disabled={status === 'loading'}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${status === 'loading' ? 'animate-spin' : ''}`} />
              <span>{status === 'loading' ? 'Menguji...' : 'Kirim Ping Uji'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
