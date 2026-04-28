import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, ArrowUpRight, Menu, Zap, ShieldCheck, BarChart, BookOpen, Layers, Target, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';

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

const AgentCard = ({ title, description, tags, VisualComponent, isHovered, onHover, onLeave }) => (
  <div 
    className="group relative flex flex-col bg-[#0a0a0a] border border-[#222] rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:border-[#555] cursor-pointer"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="relative h-56 md:h-72 w-full overflow-hidden p-2">
      <div className="relative w-full h-full rounded-[1rem] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <VisualComponent />
        </div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div className="flex gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 text-[10px] uppercase tracking-widest text-white/80 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
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
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">{title}</h3>
      <p className="text-[#888] text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="mt-auto">
        <div className="h-[1px] w-full bg-[#222] relative overflow-hidden mb-4">
          <div className="absolute top-0 left-0 h-full bg-white w-0 transition-all duration-500 ease-out group-hover:w-full"></div>
        </div>
        <div className="flex justify-between items-center text-[#555] text-[10px] uppercase tracking-widest font-mono">
          <span>Internal Use Only</span>
          <span>Deploy ready</span>
        </div>
      </div>
    </div>
  </div>
);

const AbstractPlaceholder1 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover opacity-60 mix-blend-lighten" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="glowPl1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="#050505" />
    <circle cx="200" cy="150" r="100" fill="url(#glowPl1)" />
    <circle cx="200" cy="150" r="80" fill="transparent" stroke="#222" strokeWidth="1" />
    <circle cx="200" cy="150" r="120" fill="transparent" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="0" y1="150" x2="400" y2="150" stroke="#222" strokeWidth="1" />
    <line x1="200" y1="0" x2="200" y2="300" stroke="#222" strokeWidth="1" />
    <circle cx="280" cy="150" r="4" fill="#555" />
    <circle cx="200" cy="70" r="4" fill="#555" />
  </svg>
);

const AbstractPlaceholder2 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover opacity-60 mix-blend-lighten" preserveAspectRatio="xMidYMid slice">
    <rect width="100%" height="100%" fill="#050505" />
    <path d="M 0 300 Q 100 200 200 300 T 400 300" fill="transparent" stroke="#333" strokeWidth="2" />
    <path d="M 0 250 Q 100 150 200 250 T 400 250" fill="transparent" stroke="#222" strokeWidth="1" />
    <path d="M 0 200 Q 100 100 200 200 T 400 200" fill="transparent" stroke="#111" strokeWidth="1" />
    <rect x="180" y="240" width="40" height="20" rx="10" fill="#222" />
  </svg>
);

const AbstractPlaceholder3 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full object-cover opacity-60 mix-blend-lighten" preserveAspectRatio="xMidYMid slice">
    <rect width="100%" height="100%" fill="#050505" />
    <rect x="150" y="100" width="100" height="100" fill="transparent" stroke="#333" strokeWidth="1" transform="rotate(45 200 150)" />
    <rect x="170" y="120" width="60" height="60" fill="transparent" stroke="#444" strokeWidth="1" transform="rotate(45 200 150)" />
    <circle cx="200" cy="150" r="10" fill="#555" />
  </svg>
);

const ImpactAccordion = ({ number, title, subtitle, points, VisualComponent, isOpen, onToggle }) => (
  <div className="border-b border-[#222]">
    <button 
      onClick={onToggle} 
      className="w-full flex items-center justify-between py-8 md:py-10 text-left group cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
        <span className="text-[#444] font-mono text-xl group-hover:text-white transition-colors">{number}</span>
        <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-[#666] group-hover:text-[#aaa]'}`}>
          {title}
        </h3>
      </div>
      <div className="text-[#444] group-hover:text-white transition-colors ml-4 shrink-0">
        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </div>
    </button>
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-10' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 pt-6">
          <div className="lg:w-5/12 aspect-[4/3] bg-[#020202] rounded-2xl border border-[#222] overflow-hidden relative group-hover:border-[#444] transition-colors">
             <VisualComponent />
             <div className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-widest text-white/50 bg-black/40 backdrop-blur-md rounded-full border border-white/5">
               Visual Context
             </div>
          </div>
          <div className="lg:w-7/12 flex flex-col justify-center gap-6 py-4">
            <p className="text-white text-lg md:text-xl font-medium tracking-wide">{subtitle}</p>
            <ul className="space-y-5">
              {points.map((pt, i) => (
                <li key={i} className="flex gap-4 items-start text-[#888]">
                  <ArrowRight size={16} className="text-[#444] mt-1 shrink-0" />
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

export default function App() {
  const scrollY = useScroll();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(1);
  const marketplaceScrollRef = useRef(null);

  // --- Navbar State & Logic ---
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'scope', label: 'Scope' },
    { id: 'marketplace', label: 'Agent Marketplace' }
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
      subtitle: "Creating pull and democratizing AI capabilities across the organization.",
      points: [
        "Curated use case libraries filtering problems to specific AI solutions.",
        "Weekly spotlights, prompt engineering tips, and cross-team flash reviews."
      ],
      VisualComponent: AbstractPlaceholder1
    },
    {
      id: 2,
      number: "02",
      title: "Governed Enablement",
      subtitle: "Removing operational friction while maintaining enterprise-grade security.",
      points: [
        "Streamlined tool request processes and clear decision trees.",
        "Strict guardrails preventing data leakage into public LLMs."
      ],
      VisualComponent: AbstractPlaceholder2
    },
    {
      id: 3,
      number: "03",
      title: "Value Realization",
      subtitle: "Proving tangible business impact through centralized telemetry.",
      points: [
        "Before/after tracking of effort, turnaround time, and cost.",
        "Central dashboard mapping AI impact by function and active use cases."
      ],
      VisualComponent: AbstractPlaceholder3
    }
  ];

  // Extended Agents Array
  const agents = [
    {
      id: 'projectiq',
      title: "ProjectIQ",
      description: "Intelligent project management assistant. Analyzes requirements, estimates timelines, and suggests resource allocation.",
      tags: ['Management', 'Analytics'],
      visual: ProjectIQVisual
    },
    {
      id: 'resource',
      title: "Resource Finder",
      description: "Semantic search engine for internal talent and assets. Instantly locate team members with specific skills.",
      tags: ['Search', 'HR'],
      visual: ResourceFinderVisual
    },
    {
      id: 'docbuilder',
      title: "DocBuilder",
      description: "Automates the generation of technical documentation and architectural decision records from codebase commits.",
      tags: ['DevOps', 'Docs'],
      visual: AbstractPlaceholder1
    },
    {
      id: 'aaxon',
      title: "AAxon",
      description: "Centralized neural-net assistant for querying internal HR, IT compliance policies, and organizational charts instantly.",
      tags: ['HR', 'Compliance'],
      visual: AbstractPlaceholder2
    },
    {
      id: 'datasync',
      title: "DataSync",
      description: "Automated ETL pipeline assistant that monitors data integrity and highlights anomalies across departmental silos.",
      tags: ['Data', 'ETL'],
      visual: AbstractPlaceholder3
    },
    {
      id: 'coderev',
      title: "CodeRev",
      description: "Pre-review agent that analyzes pull requests against enterprise security, styling guidelines, and performance metrics.",
      tags: ['Security', 'Dev'],
      visual: ProjectIQVisual
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

return (
  <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden scroll-smooth">
    
    {/* --- Navigation --- */}
    <nav className="fixed top-0 w-full z-50 p-6 md:p-8 flex justify-between items-start pointer-events-none">
      {/* Brand Logo */}
      <div className="flex flex-col gap-1 pointer-events-auto mix-blend-difference">
        <span className="text-xl md:text-2xl font-bold tracking-tighter leading-none text-white">AI Xchange</span>
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/70">Aligned Automation</span>
      </div>
    </nav>

    {/* Morphing Pill Navbar */}
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="relative flex items-center p-1 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)]">
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
              activeSection === item.id ? 'text-white' : 'text-[#888] hover:text-[#ccc]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>

    {/* --- Hero Section --- */}
    <section id="home" className="relative h-[100vh] flex flex-col justify-center items-center overflow-hidden">
      
      {/* Abstract Tech/Glitch Video Background */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* Swapped to a more reliable tech video and adjusted opacity so it is clearly visible */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-lighten filter contrast-125"
          src="https://cdn.coverr.co/videos/coverr-data-scrolling-on-a-computer-screen-5285/1080p.mp4"
        />
        {/* Reduced overlay opacity to allow video to shine through */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* CSS Glitch overlay effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Vertical alignment lines */}
      <div className="absolute inset-0 flex justify-between px-[5vw] z-0 pointer-events-none">
          <div className="w-[1px] h-full bg-white/[0.04]"></div>
          <div className="w-[1px] h-full bg-white/[0.04]"></div>
          <div className="w-[1px] h-full bg-white/[0.04]"></div>
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
            {/* Scaled down text for a more refined, less zoomed-in look */}
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter text-white uppercase text-center flex flex-col items-center justify-center">
              <span className="block hover:scale-[1.01] transition-transform duration-500 cursor-default tracking-tight">AI</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#555] hover:scale-[1.01] transition-transform duration-500 cursor-default tracking-tight pb-2">XCHANGE</span>
            </h1>
          </div>

          <div 
            className="mt-10 md:mt-12 max-w-xl text-center px-4"
            style={{ transform: `translateY(${heroSubY}px)`, opacity: heroTextOpacity }}
          >
            <p className="text-base md:text-lg text-[#999] font-light tracking-wide leading-relaxed">
              The central hub for internal work accelerators. <br className="hidden md:block" />
              Discover, deploy, and scale <span className="text-white font-medium">intelligent agents</span> across teams.
            </p>
          </div>
        </div>
      </section>

      {/* --- Why AI Section (Knowledge & Context) --- */}
      <section className="relative z-20 bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-10 lg:px-20 border-t border-[#222]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#666] mb-4 flex items-center gap-2">
              <LightbulbIcon /> The Vision
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Why integrate AI into everything?
            </h3>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-10">
            <p className="text-xl md:text-2xl text-[#aaa] font-light leading-relaxed">
              We are moving beyond isolated tools into an era of <span className="text-white font-medium">ambient intelligence</span>. Integrating AI directly into our fabric isn't about replacing human effort—it's about fundamentally augmenting human potential.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#222]">
              <div>
                <h4 className="text-white font-medium mb-2 flex items-center gap-2"><Zap size={16} className="text-[#888]"/> Exponential Productivity</h4>
                <p className="text-[#777] text-sm leading-relaxed">By automating routine cognitive tasks, we remove operational friction, allowing teams to reclaim hours for deep, strategic thinking and innovation.</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2 flex items-center gap-2"><Layers size={16} className="text-[#888]"/> Unified Knowledge</h4>
                <p className="text-[#777] text-sm leading-relaxed">Siloed data becomes actionable insight. AI synthesizes historical context, cross-departmental learnings, and real-time data to empower better decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Impact Framework (Collapsible Cards) --- */}
      <section id="scope" className="relative z-20 bg-[#050505] py-24 md:py-32 px-6 md:px-10 lg:px-20 border-t border-[#222]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#666] mb-4 flex items-center gap-2">
              <Target size={12} /> Strategic Framework
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Enterprise AI Engine</h3>
            <p className="text-[#888] text-lg max-w-2xl">Core pointers driving widespread, governed AI maturity across workflows.</p>
          </div>

          <div className="border-t border-[#222]">
            {impactAreas.map((area) => (
              <ImpactAccordion 
                key={area.id} 
                {...area} 
                isOpen={openAccordion === area.id}
                onToggle={() => setOpenAccordion(openAccordion === area.id ? null : area.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Agents Store Section (Marketplace Realization) --- */}
      <section id="marketplace" className="relative z-20 bg-[#050505] py-32 pl-6 md:pl-10 lg:pl-20 overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 pr-6 md:pr-10 lg:pr-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#666] mb-4 flex items-center gap-2">
              <Sparkles size={12} /> Pillar 03 Realized
            </h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight">Agent Marketplace</h3>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="max-w-sm text-[#888] text-sm leading-relaxed md:text-right">
              Production-ready AI agents designed to automate workflows. The core execution engine of the AI Xchange.
            </div>
            {/* Scroll Navigation Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => scrollMarketplace('left')}
                className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-black hover:bg-white transition-all duration-300"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => scrollMarketplace('right')}
                className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-black hover:bg-white transition-all duration-300"
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
              />
            </div>
          ))}
          {/* Spacer block to allow scrolling past the last item neatly */}
          <div className="w-[10vw] shrink-0 pointer-events-none"></div>
        </div>

      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-12 px-6 md:px-10 border-t border-[#222]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter">AI Xchange</span>
            <span className="text-[#555] text-xs mt-1">Enterprise Platform</span>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[#777]">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Policies & Guardrails</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>

          <div className="text-[#444] text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Aligned Automation
          </div>
        </div>
      </footer>

      {/* Global styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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