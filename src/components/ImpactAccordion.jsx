import { ArrowRight, Plus, Minus } from 'lucide-react';

export default function ImpactAccordion({ number, title, subtitle, points, VisualComponent, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 md:py-10 text-left group cursor-pointer"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <span className="text-[var(--text-6)] font-mono text-xl group-hover:text-white transition-colors">{number}</span>
          <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-[var(--text-4)] group-hover:text-[var(--text-2)]'}`}>
            {title}
          </h3>
        </div>
        <div className="text-[var(--text-6)] group-hover:text-white transition-colors ml-4 shrink-0">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-10' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 pt-6">
            <div className="lg:w-5/12 aspect-[4/3] bg-[#020202] rounded-2xl border border-[var(--border)] overflow-hidden relative group-hover:border-[#444] transition-colors">
              <VisualComponent />
              <div className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest text-white/50 bg-black/40 backdrop-blur-md rounded-full border border-white/5">
                Visual Context
              </div>
            </div>
            <div className="lg:w-7/12 flex flex-col justify-center gap-6 py-4">
              <p className="text-white text-lg md:text-xl font-medium tracking-wide">{subtitle}</p>
              <ul className="space-y-5">
                {points.map((pt, i) => (
                  <li key={i} className="flex gap-4 items-start text-[var(--text-3)]">
                    <ArrowRight size={16} className="text-[var(--text-6)] mt-1 shrink-0" />
                    <span className="text-sm md:text-base leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
