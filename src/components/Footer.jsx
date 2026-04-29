import { useApp } from '../context/AppContext';

export default function Footer() {
  const { setCurrentPage } = useApp();

  return (
    <footer className="bg-black py-12 px-6 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img src="/aligned-logo.svg" alt="Aligned Automation" className="h-8 w-auto" />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter">AI Xchange</span>
            <span className="text-[var(--text-5)] text-xs">Enterprise Platform</span>
          </div>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[var(--text-4)]">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <button
            onClick={() => setCurrentPage('policies')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Policies & Guardrails
          </button>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>

        <div className="text-[var(--text-6)] text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Aligned Automation
        </div>
      </div>
    </footer>
  );
}
