import { useState, useRef, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useScroll } from '../hooks/useScroll';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'marketplace', label: 'Agent Marketplace' },
  { id: 'newsletter', label: 'AI Newsletter' },
  { id: 'resources', label: 'Resources & Training' }
];

export default function Navbar() {
  const { currentPage, setCurrentPage, theme, setTheme } = useApp();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const navRefs = useRef({});
  const scrollY = useScroll();

  // Calculate blur background opacity based on scroll position
  const navBlurOpacity = Math.min(scrollY / 100, 0.95);

  // Scroll spy to update active nav item
  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveSection(currentPage);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  // Update pill indicator position
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

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const handleNavClick = (id) => {
    const sectionPages = ['home', 'marketplace', 'newsletter'];
    const isSection = sectionPages.includes(id);

    if (isSection) {
      // Home sections - scroll if on home page, navigate if on another page
      if (currentPage === 'home') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Separate pages - navigate directly
      setCurrentPage(id);
    }
  };

  return (
    <>
      {/* --- Navigation --- */}
      <nav
        className="fixed top-0 w-full z-50 p-6 md:p-8 flex justify-between items-start pointer-events-none transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${navBlurOpacity * 0.4})`,
          backdropFilter: `blur(${navBlurOpacity * 12}px)`
        }}
      >
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
        <div
          className="relative flex items-center p-1 bg-[var(--pill-bg)] border border-[var(--pill-border)] rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-300"
          style={{
            backdropFilter: `blur(${Math.min(20, 8 + navBlurOpacity * 12)}px)`,
            backgroundColor: `rgba(22, 41, 74, ${Math.min(0.4 + navBlurOpacity * 0.3, 0.7)})`
          }}
        >
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
    </>
  );
}
