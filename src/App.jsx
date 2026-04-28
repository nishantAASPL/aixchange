import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, ArrowUpRight, Menu, Zap, ShieldCheck, BarChart, BookOpen, Layers, Target, Plus, Minus, ChevronLeft, ChevronRight, X, Database, Code2, ExternalLink, Sun, Moon } from 'lucide-react';

// --- Custom Hooks ---
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// --- Components ---

// Abstract SVG Graphic for ProjectIQ
const ProjectIQVisual = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover rounded-t-3xl" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2a2a2a', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#111', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="glow1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
        <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />

    <g transform="translate(200, 150) rotate(-15)">
      <rect x="-100" y="-50" width="200" height="100" rx="20" fill="transparent" stroke="#444" strokeWidth="2" />
      <rect x="-80" y="-30" width="160" height="60" rx="10" fill="transparent" stroke="#666" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="0" cy="0" r="80" fill="url(#glow1)" />

      <rect x="-60" y="-10" width="10" height="40" rx="2" fill="#fff" opacity="0.8" />
      <rect x="-30" y="-20" width="10" height="50" rx="2" fill="#fff" opacity="0.6" />
      <rect x="0" y="0" width="10" height="30" rx="2" fill="#fff" opacity="0.4" />
      <rect x="30" y="-15" width="10" height="45" rx="2" fill="#fff" opacity="0.7" />
    </g>

    <rect width="100%" height="100%" style={{ mixBlendMode: 'overlay' }} filter="url(#noise)" />
  </svg>
);

// Abstract SVG Graphic for Resource Finder
const ResourceFinderVisual = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover rounded-t-3xl" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
        <stop offset="50%" style={{ stopColor: '#fff', stopOpacity: 0.5 }} />
        <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad2)" />

    <g transform="translate(200, 150)">
      <circle cx="0" cy="0" r="100" fill="transparent" stroke="#333" strokeWidth="1" />
      <circle cx="0" cy="0" r="60" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="0" cy="0" r="20" fill="#fff" opacity="0.1" />

      <line x1="0" y1="0" x2="-70" y2="-70" stroke="#555" strokeWidth="1" />
      <circle cx="-70" cy="-70" r="4" fill="#fff" opacity="0.8" />

      <line x1="0" y1="0" x2="80" y2="-40" stroke="#555" strokeWidth="1" />
      <circle cx="80" cy="-40" r="6" fill="#fff" opacity="0.6" />

      <line x1="0" y1="0" x2="-40" y2="80" stroke="#555" strokeWidth="1" />
      <circle cx="-40" cy="80" r="5" fill="#fff" opacity="0.7" />

      <line x1="0" y1="0" x2="60" y2="70" stroke="#555" strokeWidth="1" />
      <circle cx="60" cy="70" r="3" fill="#fff" opacity="0.5" />

      <path d="M 0 0 L -120 -20 A 120 120 0 0 1 -20 -120 Z" fill="url(#accentLine)" opacity="0.2" transform="rotate(45)" />
    </g>
  </svg>
);

const AgentCard = ({ title, description, tags, VisualComponent, isHovered, onHover, onLeave, onClick }) => (
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

const NewsletterCard = ({ title, excerpt, date, category, image, onHover, onLeave, isHovered }) => (
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

const AbstractPlaceholder1 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="glowPl1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#0d1b2a', stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="#050505" />
    {/* Central radial glow */}
    <circle cx="200" cy="150" r="100" fill="url(#glowPl1)" />
    {/* Concentric rings - broadcast/reach concept */}
    <circle cx="200" cy="150" r="40" fill="transparent" stroke="#1e3a5f" strokeWidth="1" opacity="0.5" />
    <circle cx="200" cy="150" r="65" fill="transparent" stroke="#2d5080" strokeWidth="0.5" opacity="0.3" />
    <circle cx="200" cy="150" r="90" fill="transparent" stroke="#1a2744" strokeWidth="0.5" opacity="0.2" />
    {/* Radiating nodes */}
    <circle cx="200" cy="60" r="5" fill="#2d5080" opacity="0.7" />
    <circle cx="320" cy="120" r="4" fill="#1e3a5f" opacity="0.6" />
    <circle cx="280" cy="230" r="4" fill="#2d5080" opacity="0.5" />
    <circle cx="120" cy="210" r="5" fill="#1a2744" opacity="0.6" />
    <circle cx="80" cy="110" r="4" fill="#1e3a5f" opacity="0.5" />
    {/* Connecting lines to center */}
    <line x1="200" y1="60" x2="200" y2="140" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3" />
    <line x1="320" y1="120" x2="240" y2="140" stroke="#2d5080" strokeWidth="0.5" opacity="0.2" />
    <line x1="280" y1="230" x2="220" y2="170" stroke="#1a2744" strokeWidth="0.5" opacity="0.2" />
    <line x1="120" y1="210" x2="180" y2="160" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.2" />
  </svg>
);

const AbstractPlaceholder2 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="shieldGrad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2d5080', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#1a2744', stopOpacity: 0.1 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#050505" />
    {/* Layered shield - governance concept */}
    <path d="M 200 40 L 280 90 L 280 180 Q 200 240 200 260 Q 200 240 120 180 L 120 90 Z" fill="url(#shieldGrad)" stroke="#1e3a5f" strokeWidth="1.5" opacity="0.8" />
    <path d="M 200 60 L 260 100 L 260 170 Q 200 210 200 225 Q 200 210 140 170 L 140 100 Z" fill="transparent" stroke="#2d5080" strokeWidth="1" opacity="0.6" />
    <path d="M 200 80 L 240 110 L 240 160 Q 200 190 200 200 Q 200 190 160 160 L 160 110 Z" fill="transparent" stroke="#1a2744" strokeWidth="0.5" opacity="0.4" />
    {/* Inner checkmark */}
    <g transform="translate(200, 135)">
      <polyline points="-15,0 -5,10 20,-10" fill="none" stroke="#2d5080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </g>
  </svg>
);

const AbstractPlaceholder3 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="barGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.7 }} />
        <stop offset="100%" style={{ stopColor: '#2d5080', stopOpacity: 0.5 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#050505" />
    {/* Rising bar chart - Value/ROI concept */}
    <rect x="80" y="200" width="35" height="50" fill="url(#barGrad1)" opacity="0.6" />
    <rect x="130" y="160" width="35" height="90" fill="url(#barGrad1)" opacity="0.7" />
    <rect x="180" y="110" width="35" height="140" fill="url(#barGrad1)" opacity="0.8" />
    <rect x="230" y="70" width="35" height="180" fill="url(#barGrad1)" opacity="0.9" />

    {/* Trend line overlay */}
    <polyline points="97,200 147,160 197,110 247,70" fill="none" stroke="#2d5080" strokeWidth="2" opacity="0.6" />
    <circle cx="97" cy="200" r="3" fill="#2d5080" opacity="0.7" />
    <circle cx="147" cy="160" r="3" fill="#2d5080" opacity="0.8" />
    <circle cx="197" cy="110" r="3" fill="#2d5080" opacity="0.9" />
    <circle cx="247" cy="70" r="3" fill="#1e3a5f" opacity="1" />

    {/* Baseline */}
    <line x1="60" y1="250" x2="300" y2="250" stroke="#1a2744" strokeWidth="1" opacity="0.4" />
  </svg>
);

const ImpactAccordion = ({ number, title, subtitle, points, VisualComponent, isOpen, onToggle }) => (
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

// Vision Section Visual - Human & AI Connection
const VisionVisual = ({ isDark }) => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <defs>
      <radialGradient id="visionGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: isDark ? '#2d5080' : '#4a6fa5', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: isDark ? '#1a2744' : '#2d4a7a', stopOpacity: 0 }} />
      </radialGradient>
      <linearGradient id="bridgeGradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" style={{ stopColor: isDark ? '#1e3a5f' : '#3d5a8a', stopOpacity: 0 }} />
        <stop offset="50%" style={{ stopColor: isDark ? '#2d5080' : '#4a6fa5', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: isDark ? '#1a2744' : '#2d4a7a', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill={isDark ? '#050505' : '#f7f6f2'} />

    {/* Central glow pool */}
    <circle cx="150" cy="150" r="100" fill="url(#visionGlow)" />

    {/* Left circle - Human */}
    <circle cx="110" cy="150" r="60" fill="none" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="2" opacity="0.5" />
    <circle cx="110" cy="130" r="8" fill={isDark ? '#2d5080' : '#4a6fa5'} opacity="0.6" />
    <path d="M 105 145 Q 110 160 105 175" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="2" fill="none" opacity="0.4" />

    {/* Right circle - AI */}
    <circle cx="190" cy="150" r="60" fill="none" stroke={isDark ? '#1e3a5f' : '#3d5a8a'} strokeWidth="2" opacity="0.5" />
    <circle cx="185" cy="140" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.6" />
    <circle cx="190" cy="145" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.6" />
    <circle cx="195" cy="140" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.6" />
    <circle cx="185" cy="160" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.5" />
    <circle cx="195" cy="160" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.5" />

    {/* Connecting bridge */}
    <rect x="130" y="145" width="40" height="10" rx="5" fill="url(#bridgeGradient)" opacity="0.7" />

    {/* Connecting lines */}
    <line x1="110" y1="110" x2="190" y2="110" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="1" opacity="0.2" />
    <line x1="110" y1="190" x2="190" y2="190" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="1" opacity="0.2" />
  </svg>
);

// Agent Detail Modal
const AgentModal = ({ agent, onClose }) => {
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
            <agent.visual className="w-full h-full" />
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
};

export default function App() {
  const scrollY = useScroll();
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(1);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aixchange-theme') || 'dark';
    }
    return 'dark';
  });
  const marketplaceScrollRef = useRef(null);
  const newsletterScrollRef = useRef(null);

  // --- Navbar State & Logic ---
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'marketplace', label: 'Agent Marketplace' },
    { id: 'newsletter', label: 'AI Newsletter' }
  ];

  // Update pill indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      const el = navRefs.current[activeSection];
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    };

    // Slight delay to ensure fonts/layout are rendered
    setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  // Scroll lock when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedAgent ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedAgent]);

  // Theme management
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aixchange-theme', theme);
  }, [theme]);

  // Cinematic loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Loading screen duration
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy to update active nav item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' } // Trigger when section is near middle of viewport
    );

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scaled-down Parallax calculations
  const heroTextY = scrollY * 0.3;
  const heroTextOpacity = Math.max(1 - scrollY / 400, 0);
  const heroSubY = scrollY * 0.5;
  const bgGridY = scrollY * 0.1;

  // Core Impact Areas
  const impactAreas = [
    {
      id: 1,
      number: "01",
      title: "Awareness & Discovery",
      subtitle: "Building organizational momentum from the ground up. We democratize AI access by creating visible, searchable repositories of proven use cases tailored to specific business problems. Teams discover solutions that actually solve their pain points, not generic demos. Education happens continuously through spotlights, workshops, and peer-to-peer knowledge sharing.",
      points: [
        "Curated use case libraries filtering problems to specific AI solutions across departments.",
        "Weekly spotlights, prompt engineering tips, and cross-team flash reviews to build competency.",
        "Self-service discovery portal enabling teams to find AI agents matching their workflow needs.",
        "Community-driven feedback loop continuously improving solution recommendations."
      ],
      VisualComponent: AbstractPlaceholder1
    },
    {
      id: 2,
      number: "02",
      title: "Governed Enablement",
      subtitle: "Speed without compromise. We remove the barriers to innovation while maintaining enterprise-grade security and compliance. Clear guardrails let teams move fast with confidence. Data stays protected, policies are transparent, and risky operations get the oversight they need—nothing more, nothing less.",
      points: [
        "Streamlined one-click agent requests with automated approval workflows for low-risk deployments.",
        "Strict data isolation preventing company information from touching external LLM providers.",
        "Role-based access controls ensuring agents respect organizational confidentiality and hierarchy.",
        "Real-time audit logging and compliance dashboards for regulatory requirements and oversight."
      ],
      VisualComponent: AbstractPlaceholder2
    },
    {
      id: 3,
      number: "03",
      title: "Value Realization",
      subtitle: "Making the business case irrefutable. We quantify AI impact across the organization—hours reclaimed, cycle times reduced, quality improvements, cost savings. Centralized intelligence reveals where AI delivers ROI and where to invest next. Decisions are data-driven, not hope-driven.",
      points: [
        "Before/after tracking of effort, turnaround time, and cost across all active agents and teams.",
        "Central dashboard mapping AI impact by department, function, and use case with trend analysis.",
        "Automated ROI calculations and business case updates as agent adoption scales.",
        "Quarterly impact reports demonstrating organizational value and guiding strategic prioritization."
      ],
      VisualComponent: AbstractPlaceholder3
    }
  ];

  // Extended Agents Array
  const agents = [
    {
      id: 'projectiq',
      title: "ProjectIQ",
      headline: "Intelligent agent for project knowledge retrieval",
      description: "Intelligent project management assistant. Analyzes requirements, estimates timelines, and suggests resource allocation.",
      tags: ['Management', 'Analytics'],
      visual: ProjectIQVisual,
      builtOn: 'Copilot Studio',
      dataAccess: [
        'PMO SharePoint project library',
        'Project plans and timelines',
        'Resource allocation spreadsheets',
        'Risk registers and status reports'
      ],
      canHelpWith: [
        'Retrieve project status and timeline information',
        'Identify resource bottlenecks and allocation issues',
        'Surface critical risk items and mitigation plans',
        'Answer questions about ongoing PMO initiatives'
      ],
      accessPoints: ['Microsoft Teams', 'Microsoft 365']
    },
    {
      id: 'resource',
      title: "Resource Finder",
      headline: "Semantic talent discovery and skill matching engine",
      description: "Semantic search engine for internal talent and assets. Instantly locate team members with specific skills.",
      tags: ['Search', 'HR'],
      visual: ResourceFinderVisual,
      builtOn: 'Copilot Studio',
      dataAccess: [
        'HR SharePoint profiles',
        'Employee skill databases',
        'Organizational structure and hierarchy',
        'Project assignment history'
      ],
      canHelpWith: [
        'Find talent by specific technical or domain skills',
        'Locate team members for cross-functional projects',
        'Query organizational charts and reporting lines',
        'Discover expertise across the company'
      ],
      accessPoints: ['Microsoft Teams', 'SharePoint intranet']
    },
    {
      id: 'docbuilder',
      title: "DocBuilder",
      headline: "Automatic documentation and architecture record generation",
      description: "Automates the generation of technical documentation and architectural decision records from codebase commits.",
      tags: ['DevOps', 'Docs'],
      visual: AbstractPlaceholder1,
      builtOn: 'Azure AI Studio',
      dataAccess: [
        'GitHub and Azure DevOps repositories',
        'Commit history and pull request metadata',
        'Architecture decision records',
        'Existing codebase documentation'
      ],
      canHelpWith: [
        'Generate architectural decision records (ADRs)',
        'Create API documentation from code',
        'Summarize code changes for release notes',
        'Maintain consistent documentation standards'
      ],
      accessPoints: ['VS Code extension', 'DevOps pipelines']
    },
    {
      id: 'aaxon',
      title: "AAxon",
      headline: "Neural policy assistant for enterprise governance and compliance",
      description: "Centralized neural-net assistant for querying internal HR, IT compliance policies, and organizational charts instantly.",
      tags: ['HR', 'Compliance'],
      visual: AbstractPlaceholder2,
      builtOn: 'Copilot Studio',
      dataAccess: [
        'HR policies SharePoint library',
        'IT compliance and security wiki',
        'Organizational charts and structures',
        'Policy amendment history and changelogs'
      ],
      canHelpWith: [
        'Answer HR and compensation policy questions',
        'Provide IT security and compliance guidance',
        'Navigate organizational structure and reporting',
        'Retrieve current policy and procedure documentation'
      ],
      accessPoints: ['Microsoft Teams', 'Intranet portal']
    },
    {
      id: 'datasync',
      title: "DataSync",
      headline: "Intelligent ETL monitoring and anomaly detection platform",
      description: "Automated ETL pipeline assistant that monitors data integrity and highlights anomalies across departmental silos.",
      tags: ['Data', 'ETL'],
      visual: AbstractPlaceholder3,
      builtOn: 'Azure AI Studio',
      dataAccess: [
        'SQL Server databases and data warehouses',
        'Power BI datasets and reports',
        'ETL pipeline execution logs',
        'Data quality metrics and SLAs'
      ],
      canHelpWith: [
        'Detect data anomalies and quality issues',
        'Monitor ETL pipeline health and performance',
        'Query cross-departmental data insights',
        'Alert on data integrity violations'
      ],
      accessPoints: ['Power BI', 'Teams alerts and notifications']
    },
    {
      id: 'coderev',
      title: "CodeRev",
      headline: "Intelligent code review and quality assurance agent",
      description: "Pre-review agent that analyzes pull requests against enterprise security, styling guidelines, and performance metrics.",
      tags: ['Security', 'Dev'],
      visual: ProjectIQVisual,
      builtOn: 'Azure AI Studio',
      dataAccess: [
        'GitHub and Azure DevOps pull requests',
        'Enterprise security policy documents',
        'Code style and linting configuration',
        'Performance benchmarks and baselines'
      ],
      canHelpWith: [
        'Perform security vulnerability scanning',
        'Flag style and formatting violations',
        'Identify performance regressions',
        'Suggest architectural improvements'
      ],
      accessPoints: ['GitHub Actions', 'Azure DevOps Pipelines']
    }
  ];

  const newsletters = [
    {
      id: 'nl-1',
      title: 'Prompt Engineering Best Practices for Enterprise AI',
      excerpt: 'Master the art of crafting effective prompts to unlock maximum potential from AI agents. Learn proven techniques used across teams.',
      date: 'Apr 15, 2026',
      category: 'Guide',
      image: '💡'
    },
    {
      id: 'nl-2',
      title: 'AI Integration Success Stories: From Theory to Practice',
      excerpt: 'Discover how our internal teams transformed workflows using AI agents. Real-world case studies and measurable impact metrics.',
      date: 'Apr 8, 2026',
      category: 'Case Study',
      image: '🚀'
    },
    {
      id: 'nl-3',
      title: 'Navigating AI Governance: Your Complete Compliance Guide',
      excerpt: 'Understanding data security, ethical guidelines, and regulatory requirements. Everything you need to deploy AI responsibly.',
      date: 'Apr 1, 2026',
      category: 'Policy',
      image: '🛡️'
    }
  ];

  const scrollMarketplace = (direction) => {
    if (marketplaceScrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 450 : window.innerWidth * 0.85;
      marketplaceScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
  }
};

  const scrollNewsletter = (direction) => {
    if (newsletterScrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 450 : window.innerWidth * 0.85;
      newsletterScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
  }
};

// Policies & Guardrails Page Component
const PoliciesPage = () => (
  <div className="min-h-screen bg-[var(--bg-base)] text-white">
    {/* Header with back button */}
    <div className="sticky top-0 z-40 bg-[var(--bg-base)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--border-md)] transition-colors"
          >
            <ArrowRight size={16} className="rotate-180" />
            <span className="text-sm">Back</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Policies & Guardrails</h1>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-16">
      <div className="prose prose-invert max-w-none">
        {/* Intro */}
        <div className="mb-16">
          <p className="text-xl text-[var(--text-2)] font-light leading-relaxed max-w-2xl">
            Our AI governance framework ensures that intelligent agents operate with enterprise-grade security, ethical considerations, and compliance standards. These guardrails protect data, maintain transparency, and enable responsible AI deployment across the organization.
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 1. Data Security & Privacy */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <ShieldCheck size={24} className="text-[#ffb000]" />
              Data Security & Privacy
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Encrypted Data Transit:</strong> All data exchanged with AI agents uses TLS 1.3 encryption.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>No Public LLM Exposure:</strong> Zero sensitive company data is sent to external AI providers without explicit approval.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Data Retention:</strong> All interaction logs are encrypted and retained for 90 days, then purged.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Compliance:</strong> GDPR, CCPA, and industry-specific data handling regulations.</span>
              </li>
            </ul>
          </div>

          {/* 2. Ethical AI Guidelines */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Sparkles size={24} className="text-[#00d9ff]" />
              Ethical AI Guidelines
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Transparency:</strong> Users must know when they're interacting with AI agents.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Bias Mitigation:</strong> Regular audits ensure agent outputs don't perpetuate discrimination.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Human Oversight:</strong> High-impact decisions remain under human control.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Accountability:</strong> Clear ownership and escalation paths for all AI actions.</span>
              </li>
            </ul>
          </div>

          {/* 3. Access Control & Governance */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Layers size={24} className="text-[#00ff88]" />
              Access Control & Governance
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Role-Based Access:</strong> Agents operate within defined permission boundaries.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Audit Logging:</strong> All agent actions are logged for compliance verification.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Approval Workflows:</strong> Sensitive operations require multi-level approval.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Continuous Monitoring:</strong> Real-time anomaly detection across all agents.</span>
              </li>
            </ul>
          </div>

          {/* 4. Compliance & Auditing */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Zap size={24} className="text-[#ff6b9d]" />
              Compliance & Auditing
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Regular Assessments:</strong> Quarterly security and compliance audits.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Third-Party Reviews:</strong> Independent verification of AI safety measures.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Incident Response:</strong> 24/7 incident response team for breaches or misuse.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Documentation:</strong> Complete audit trails available for regulatory review.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Guardrails Section */}
        <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)] mb-16">
          <h2 className="text-2xl font-semibold mb-6">Agent-Specific Guardrails</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Rate Limiting & Throttling</h3>
              <p className="text-[var(--text-3)]">Each agent has configurable rate limits to prevent abuse and resource exhaustion. Burst detection triggers automated rollback.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Output Validation</h3>
              <p className="text-[var(--text-3)]">All agent outputs are validated against content policies before delivery. Harmful or misleading outputs are flagged and reviewed.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Data Lineage Tracking</h3>
              <p className="text-[var(--text-3)]">Full traceability of data sources and transformations ensures accountability and enables issue remediation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Contextual Authorization</h3>
              <p className="text-[var(--text-3)]">AI agents respect organizational hierarchy and confidentiality rules, adapting responses based on user context.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[var(--bg-card)] to-[var(--bg-base)] p-8 rounded-2xl border border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-4">Questions About Our Policies?</h2>
          <p className="text-[var(--text-3)] mb-6">
            Our security and compliance team is available to address concerns about data handling, governance, or agent behavior. Reach out through your internal support channels.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#f0f0f0] transition-colors">
            Contact Security Team
          </button>
        </div>
      </div>
    </div>
  </div>
);

if (currentPage === 'policies') {
  return <PoliciesPage />;
}

return (
  <div className="min-h-screen bg-[var(--bg-base)] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden scroll-smooth">

    {/* Cinematic Loading Screen */}
    {isLoading && (
      <div className="fixed inset-0 z-[999] bg-[var(--bg-base)] flex flex-col items-center justify-center overflow-hidden loading-screen">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a2744] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2d5080] rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Logo and Text */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Animated Logo/Icon */}
          <div className="loading-logo">
            <img src="/aligned-logo.svg" alt="AI Xchange" className="h-16 w-auto" />
          </div>

          {/* Brand Name */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-2 loading-title">
              AI XCHANGE
            </h1>
            <p className="text-[var(--text-3)] text-sm md:text-base tracking-widest uppercase loading-subtitle">
              Enterprise AI Platform
            </p>
          </div>

          {/* Loading Bar */}
          <div className="w-64 h-1 bg-[var(--border)] rounded-full overflow-hidden mt-8">
            <div className="h-full bg-gradient-to-r from-[var(--accent-light)] to-[#2d5080] loading-bar rounded-full"></div>
          </div>

          {/* Loading Text */}
          <p className="text-[var(--text-4)] text-xs tracking-widest mt-6 loading-text">
            Initializing...
          </p>
        </div>
      </div>
    )}

    {/* --- Navigation --- */}
    <nav className="fixed top-0 w-full z-50 p-6 md:p-8 flex justify-between items-start pointer-events-none">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <img src="/aligned-logo.svg" alt="Aligned Automation" className="h-8 md:h-10 w-auto" />
        <span className="text-2xl md:text-3xl font-bold tracking-tighter leading-none text-[var(--text-1)]">AI Xchange</span>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--border)] border border-[var(--border)]"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun size={18} className="text-[var(--text-3)]" />
        ) : (
          <Moon size={18} className="text-[var(--text-3)]" />
        )}
      </button>
    </nav>

    {/* Morphing Pill Navbar */}
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="relative flex items-center p-1 bg-[var(--pill-bg)] backdrop-blur-2xl border border-[var(--pill-border)] rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        {/* The sliding pill indicator */}
        <div
          className="absolute top-1 bottom-1 bg-white/15 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />

        {/* Nav Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            ref={(el) => (navRefs.current[item.id] = el)}
            onClick={() => handleNavClick(item.id)}
            className={`relative z-10 px-5 md:px-8 py-2.5 text-[10px] md:text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
              activeSection === item.id ? 'text-white' : 'text-[var(--text-3)] hover:text-[#ccc]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>

    {/* --- Hero Section --- */}
    <section id="home" className="relative h-[100vh] flex flex-col justify-center items-center overflow-hidden">

      {/* Hero Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        {/* Vertical alignment lines */}
        <div className="absolute inset-0 flex justify-between px-[5vw] z-0 pointer-events-none">
          <div className="w-[1px] h-full bg-white/[0.04]"></div>
          <div className="w-[1px] h-full bg-white/[0.04]"></div>
          <div className="w-[1px] h-full bg-white/[0.04]"></div>
        </div>
      </div>

        {/* Central Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 mt-16">
          <div
            className="text-center w-full flex flex-col items-center glitch-container"
            style={{
              transform: `translateY(${heroTextY}px)`,
              opacity: heroTextOpacity
            }}
          >
            {/* Single line hero title */}
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter text-white uppercase text-center hover:scale-[1.02] transition-transform duration-500 cursor-default">
              AI XCHANGE
            </h1>
          </div>

          <div
            className="mt-10 md:mt-12 max-w-xl text-center px-4"
            style={{ transform: `translateY(${heroSubY}px)`, opacity: heroTextOpacity }}
          >
            <p className="text-base md:text-lg text-[var(--text-3)] font-light tracking-wide leading-relaxed max-w-2xl">
              Unlock exponential productivity with <span className="text-white font-medium">AI agents</span> purpose-built for your workflows. Deploy, integrate, and scale intelligence across your organization instantly.
            </p>
          </div>
        </div>
      </section>

      {/* --- Why AI Section (Knowledge & Context) --- */}
      <section className="relative z-20 bg-[var(--bg-card)] py-24 md:py-36 px-6 md:px-10 lg:px-20 border-t border-[var(--accent-navy)]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--accent-navy-light)] mb-4 flex items-center gap-2">
              <LightbulbIcon /> The Vision
            </h2>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-4xl">
              Why integrate <span className="text-[var(--accent-light)]">AI</span>?
            </h3>
          </div>

          {/* Intro Copy */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg md:text-xl text-[var(--text-2)] font-light leading-relaxed">
              We're entering an era of <span className="text-[var(--text-1)] font-medium">ambient intelligence</span>—where AI operates seamlessly within your workflows, amplifying human capability rather than replacing it. The question isn't whether to integrate AI, but how to do it strategically.
            </p>
          </div>

          {/* 4 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 - Exponential Productivity */}
            <div className="group p-7 rounded-2xl border border-[var(--accent-navy)] hover:border-[var(--accent-navy-light)] bg-gradient-to-br from-[var(--bg-base)]/60 to-[var(--bg-base)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--bg-base)]/80 hover:to-[var(--bg-base)]/50 hover:shadow-lg hover:shadow-[#1a2744]/20">
              <h4 className="text-[var(--text-1)] font-semibold mb-3 flex items-center gap-2 text-lg">
                <Zap size={20} className="text-[#ffb000]"/>
                Exponential Productivity
              </h4>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">Reclaim thousands of hours by automating routine cognitive work. Let your teams focus on high-impact strategy, creativity, and decision-making that machines cannot replicate.</p>
            </div>

            {/* Card 2 - Unified Knowledge */}
            <div className="group p-7 rounded-2xl border border-[var(--accent-navy)] hover:border-[var(--accent-navy-light)] bg-gradient-to-br from-[var(--bg-base)]/60 to-[var(--bg-base)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--bg-base)]/80 hover:to-[var(--bg-base)]/50 hover:shadow-lg hover:shadow-[#1a2744]/20">
              <h4 className="text-[var(--text-1)] font-semibold mb-3 flex items-center gap-2 text-lg">
                <Layers size={20} className="text-[#00d9ff]"/>
                Unified Knowledge
              </h4>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">Eliminate information silos. AI synthesizes institutional knowledge, cross-team learnings, and real-time insights into unified intelligence accessible to everyone.</p>
            </div>

            {/* Card 3 - Future-Proof Operations */}
            <div className="group p-7 rounded-2xl border border-[var(--accent-navy)] hover:border-[var(--accent-navy-light)] bg-gradient-to-br from-[var(--bg-base)]/60 to-[var(--bg-base)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--bg-base)]/80 hover:to-[var(--bg-base)]/50 hover:shadow-lg hover:shadow-[#1a2744]/20">
              <h4 className="text-[var(--text-1)] font-semibold mb-3 flex items-center gap-2 text-lg">
                <BookOpen size={20} className="text-[#00ff88]"/>
                Future-Proof Operations
              </h4>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">Build scalable, adaptable processes that grow with your organization. AI-augmented workflows evolve intelligently, reducing manual overhead and technical debt.</p>
            </div>

            {/* Card 4 - Competitive Advantage */}
            <div className="group p-7 rounded-2xl border border-[var(--accent-navy)] hover:border-[var(--accent-navy-light)] bg-gradient-to-br from-[var(--bg-base)]/60 to-[var(--bg-base)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--bg-base)]/80 hover:to-[var(--bg-base)]/50 hover:shadow-lg hover:shadow-[#1a2744]/20">
              <h4 className="text-[var(--text-1)] font-semibold mb-3 flex items-center gap-2 text-lg">
                <Target size={20} className="text-[#ff6b9d]"/>
                Competitive Advantage
              </h4>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">Organizations that embed intelligence today will dominate tomorrow. Early adopters gain operational speed, cost efficiency, and the ability to innovate faster than competitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Agents Store Section (Marketplace Realization) --- */}
      <section id="marketplace" className="relative z-20 bg-[var(--bg-base)] py-32 pl-6 md:pl-10 lg:pl-20 overflow-hidden">

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 pr-6 md:pr-10 lg:pr-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--accent-navy-light)] mb-4 flex items-center gap-2">
              <Sparkles size={12} /> Pillar 03 Realized
            </h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight"><span className="text-[var(--accent-light)]">Agent</span> Marketplace</h3>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="max-w-sm text-[var(--text-3)] text-sm leading-relaxed md:text-right">
              Production-ready AI agents designed to automate workflows. The core execution engine of the AI Xchange.
            </div>
            {/* Scroll Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => scrollMarketplace('left')}
                className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[var(--text-3)] hover:text-black hover:bg-white transition-all duration-300"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scrollMarketplace('right')}
                className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[var(--text-3)] hover:text-black hover:bg-white transition-all duration-300"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={marketplaceScrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 -mr-6 md:-mr-10 lg:-mr-20 pr-6 md:pr-10 lg:pr-20"
        >
          {agents.map((agent) => (
            <div key={agent.id} className="w-[85vw] md:w-[400px] lg:w-[450px] shrink-0 snap-start">
              <AgentCard
                title={agent.title}
                description={agent.description}
                tags={agent.tags}
                VisualComponent={agent.visual}
                isHovered={hoveredCard === agent.id}
                onHover={() => setHoveredCard(agent.id)}
                onLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedAgent(agent)}
              />
            </div>
          ))}
          {/* Spacer block to allow scrolling past the last item neatly */}
          <div className="w-[10vw] shrink-0 pointer-events-none"></div>
        </div>

      </section>

      {/* --- AI Newsletter Section --- */}
      <section id="newsletter" className="relative z-20 bg-[var(--bg-base)] py-32 pl-6 md:pl-10 lg:pl-20 overflow-hidden border-t border-[var(--accent-navy)]">

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 pr-6 md:pr-10 lg:pr-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--accent-navy-light)] mb-4 flex items-center gap-2">
              <BookOpen size={12} /> Insights & Updates
            </h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight"><span className="text-[var(--accent-light)]">AI</span> Newsletter</h3>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="max-w-sm text-[var(--text-3)] text-sm leading-relaxed md:text-right">
              Stay informed with weekly insights on AI integration, best practices, governance, and real-world success stories.
            </div>
            {/* Scroll Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => scrollNewsletter('left')}
                className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[var(--text-3)] hover:text-black hover:bg-white transition-all duration-300"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scrollNewsletter('right')}
                className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[var(--text-3)] hover:text-black hover:bg-white transition-all duration-300"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={newsletterScrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 -mr-6 md:-mr-10 lg:-mr-20 pr-6 md:pr-10 lg:pr-20"
        >
          {newsletters.map((letter) => (
            <div key={letter.id} className="w-[85vw] md:w-[380px] lg:w-[420px] shrink-0 snap-start">
              <NewsletterCard
                title={letter.title}
                excerpt={letter.excerpt}
                date={letter.date}
                category={letter.category}
                image={letter.image}
                isHovered={hoveredCard === letter.id}
                onHover={() => setHoveredCard(letter.id)}
                onLeave={() => setHoveredCard(null)}
              />
            </div>
          ))}
          {/* Spacer block */}
          <div className="w-[10vw] shrink-0 pointer-events-none"></div>
        </div>

      </section>

      {/* --- Footer --- */}
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

      {/* Modal Portal */}
      {selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}

      {/* Global styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Cinematic Loading Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLoadingBar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes fadeOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-30px);
          }
        }

        @keyframes scaleOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        .loading-screen {
          animation: scaleOut 0.8s cubic-bezier(0.25, 1, 0.5, 1) 2.0s forwards;
        }

        .loading-logo {
          animation: fadeInDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.2s both;
        }

        .loading-title {
          animation: fadeInDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.4s both;
        }

        .loading-subtitle {
          animation: fadeInDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.6s both;
        }

        .loading-bar {
          animation: slideLoadingBar 2.0s cubic-bezier(0.25, 1, 0.5, 1) 0.8s forwards;
        }

        .loading-text {
          animation: fadeInDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.0s both;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />
    </div>
  );
}

// Simple icon for the vision section
const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
)
