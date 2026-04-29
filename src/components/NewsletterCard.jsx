import { ArrowRight } from 'lucide-react';

export default function NewsletterCard({ title, excerpt, date, category, image, onHover, onLeave }) {
  return (
    <div
      className="group relative flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:border-[var(--border-hv)] cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-56 w-full overflow-hidden p-2">
        <div className="relative w-full h-full rounded-[1rem] overflow-hidden bg-gradient-to-br from-[#1a2744] via-[#0d1b2a] to-[#050505]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">{image}</div>
          </div>
          {/* Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-xs uppercase tracking-widest text-white/80 bg-[var(--pill-bg)] backdrop-blur-md rounded-full border border-[var(--pill-border)]">
              {category}
            </span>
          </div>
          {/* Date Badge */}
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <p className="text-[10px] text-white font-medium">{date}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 md:p-7 z-10">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-3 line-clamp-2">{title}</h3>
        <p className="text-[var(--text-3)] text-sm leading-relaxed mb-6 line-clamp-2">
          {excerpt}
        </p>

        <div className="mt-auto">
          <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
            Read Article
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
