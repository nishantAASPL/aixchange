import { useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AgentMarketplacePage from './pages/AgentMarketplacePage';
import NewsletterPage from './pages/NewsletterPage';
import PoliciesPage from './pages/PoliciesPage';
import ResourcesPage from './pages/ResourcesPage';

// Loading screen component
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[999] bg-[var(--bg-base)] flex flex-col items-center justify-center overflow-hidden loading-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a2744] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2d5080] rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="loading-logo">
          <img src="/aligned-logo.svg" alt="AI Xchange" className="h-16 w-auto" />
        </div>

        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-2 loading-title">
            AI XCHANGE
          </h1>
          <p className="text-[var(--text-3)] text-sm md:text-base tracking-widest uppercase loading-subtitle">
            Enterprise AI Platform
          </p>
        </div>

        <div className="w-64 h-1 bg-[var(--border)] rounded-full overflow-hidden mt-8">
          <div className="h-full bg-gradient-to-r from-[var(--accent-light)] to-[#2d5080] loading-bar rounded-full"></div>
        </div>

        <p className="text-[var(--text-4)] text-xs tracking-widest mt-6 loading-text">
          Initializing...
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
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
      `}} />
    </div>
  );
}

// Main app component with routing
function AppContent() {
  const { currentPage } = useApp();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Page routing
  let content;
  switch (currentPage) {
    case 'marketplace':
      content = <AgentMarketplacePage />;
      break;
    case 'newsletter':
      content = <NewsletterPage />;
      break;
    case 'policies':
      content = <PoliciesPage />;
      break;
    case 'resources':
      content = <ResourcesPage />;
      break;
    case 'home':
    default:
      content = <HomePage />;
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <div style={{ scrollBehavior: 'smooth' }} className="scroll-smooth">
          <Navbar />
          {content}
          {currentPage === 'home' && <Footer />}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </>
  );
}

// Root app with provider
export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
