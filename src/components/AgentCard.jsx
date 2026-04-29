import { ArrowUpRight } from 'lucide-react';

export default function AgentCard({ title, description, tags, VisualComponent, onHover, onLeave, onClick }) {
  return (
    <div
      className="group relative flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:border-[var(--border-hv)] cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="relative h-56 md:h-72 w-full overflow-hidden p-2">
        <div className="relative w-full h-full rounded-[1rem] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <VisualComponent />
          </div>
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div className="flex gap-2">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 text-xs uppercase tracking-widest text-white/80 bg-[var(--pill-bg)] backdrop-blur-md rounded-full border border-[var(--pill-border)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 md:p-8 z-10">
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{title}</h3>
        <p className="text-[var(--text-3)] text-base md:text-lg leading-relaxed mb-6">
          {description}
        </p>

        <div className="mt-auto">
          <div className="h-[1px] w-full bg-[#222] relative overflow-hidden mb-4">
            <div className="absolute top-0 left-0 h-full bg-white w-0 transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
          <div className="flex justify-between items-center text-[var(--text-5)] text-xs uppercase tracking-widest font-mono">
            <span>Internal Use Only</span>
            <span>Deploy ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}
