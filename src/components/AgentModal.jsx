import { useEffect } from 'react';
import { X, Code2, Database, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export default function AgentModal({ agent, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[var(--bg-modal)] border border-[var(--border-md)] rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] max-w-6xl w-full h-[70vh] modal-enter flex overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual Section - Left Side */}
        <div className="w-2/5 relative overflow-hidden rounded-l-[2rem] flex-shrink-0 flex flex-col">
          <div className="absolute inset-0 overflow-hidden">
            <agent.visual />
          </div>
          {/* Tags Overlay */}
          <div className="absolute top-4 left-4 right-4 flex gap-2 z-10">
            {agent.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 text-[9px] uppercase tracking-widest text-white/80 bg-[var(--pill-bg)] backdrop-blur-md rounded-full border border-[var(--pill-border)]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section - Right Side */}
        <div className="w-3/5 flex flex-col p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-[#333] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center z-20"
          >
            <X size={18} strokeWidth={2} />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 pr-4 scrollbar-hide">
            {/* Title & Headline */}
            <div className="mb-8">
              <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">{agent.title}</h2>
              <p className="text-lg text-[var(--text-2)] font-light">{agent.headline}</p>
            </div>

            {/* Built On */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--text-5)] mb-3 flex items-center gap-2 font-semibold">
                <Code2 size={14} className="text-[var(--text-4)]" /> Built On
              </h3>
              <span className="inline-block px-4 py-2 bg-[#111] border border-[#333] rounded-full text-white text-sm font-medium">
                {agent.builtOn}
              </span>
            </div>

            {/* Data Access */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--text-5)] mb-3 flex items-center gap-2 font-semibold">
                <Database size={14} className="text-[var(--text-4)]" /> Data Access
              </h3>
              <ul className="space-y-3">
                {agent.dataAccess.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-[var(--text-3)] text-sm">
                    <ArrowRight size={16} className="text-[var(--text-6)] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Can Help You With */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--text-5)] mb-3 flex items-center gap-2 font-semibold">
                <Sparkles size={14} className="text-[var(--text-4)]" /> Can Help You With
              </h3>
              <ul className="space-y-3">
                {agent.canHelpWith.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-[var(--text-3)] text-sm">
                    <ArrowRight size={16} className="text-[var(--text-6)] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Access Points */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--text-5)] mb-3 flex items-center gap-2 font-semibold">
                <ExternalLink size={14} className="text-[var(--text-4)]" /> Access Points
              </h3>
              <div className="flex flex-wrap gap-3">
                {agent.accessPoints.map((point, idx) => (
                  <span key={idx} className="px-4 py-2 bg-[#111] border border-[#333] rounded-full text-white text-sm font-medium hover:border-[var(--border-hv)] transition-colors cursor-default">
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Get Access Button */}
          <div className="mt-6 pt-6 border-t border-[var(--border-md)]">
            <button className="w-full px-6 py-3 bg-white text-black font-semibold tracking-tight rounded-lg hover:bg-[#f0f0f0] transition-all duration-300 flex items-center justify-center gap-2">
              <ExternalLink size={16} />
              Get Access
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes modal-enter {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-enter { animation: modal-enter 0.35s cubic-bezier(0.25,1,0.5,1) forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
