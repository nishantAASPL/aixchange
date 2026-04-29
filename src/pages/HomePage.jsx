import { useState, useRef } from 'react';
import { Sparkles, ArrowRight, Zap, Layers, BookOpen, Target } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { useApp } from '../context/AppContext';
import { agents } from '../data/agents';
import { newsletters } from '../data/newsletters';
import AgentCard from '../components/AgentCard';
import NewsletterCard from '../components/NewsletterCard';
import ImpactAccordion from '../components/ImpactAccordion';
import AgentModal from '../components/AgentModal';
import AbstractPlaceholder1 from '../components/visuals/AbstractPlaceholder1';
import AbstractPlaceholder2 from '../components/visuals/AbstractPlaceholder2';
import AbstractPlaceholder3 from '../components/visuals/AbstractPlaceholder3';
import VisionVisual from '../components/visuals/VisionVisual';

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

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

export default function HomePage() {
  const scrollY = useScroll();
  const { setCurrentPage, hoveredCard, setHoveredCard, selectedAgent, setSelectedAgent } = useApp();
  const [openAccordion, setOpenAccordion] = useState(1);

  // Parallax calculations
  const heroTextY = scrollY * 0.3;
  const heroTextOpacity = Math.max(1 - scrollY / 400, 0);
  const heroSubY = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      {/* --- Hero Section --- */}
      <section id="home" className="relative h-[100vh] flex flex-col justify-center items-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
          <div className="absolute inset-0 flex justify-between px-[5vw] z-0 pointer-events-none">
            <div className="w-[1px] h-full bg-white/[0.04]"></div>
            <div className="w-[1px] h-full bg-white/[0.04]"></div>
            <div className="w-[1px] h-full bg-white/[0.04]"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full px-4 mt-16">
          <div
            className="text-center w-full flex flex-col items-center glitch-container"
            style={{
              transform: `translateY(${heroTextY}px)`,
              opacity: heroTextOpacity
            }}
          >
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

      {/* --- Why AI Section --- */}
      <section className="relative z-20 bg-[var(--bg-card)] py-24 md:py-36 px-6 md:px-10 lg:px-20 border-t border-[var(--accent-navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--accent-navy-light)] mb-4 flex items-center gap-2">
              <LightbulbIcon /> The Vision
            </h2>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight max-w-4xl">
              Why integrate <span className="text-[var(--accent-light)]">AI</span>?
            </h3>
          </div>

          <div className="mb-12 max-w-3xl">
            <p className="text-lg md:text-xl text-[var(--text-2)] font-light leading-relaxed">
              We're entering an era of <span className="text-[var(--text-1)] font-medium">ambient intelligence</span>—where AI operates seamlessly within your workflows, amplifying human capability rather than replacing it. The question isn't whether to integrate AI, but how to do it strategically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group p-7 rounded-2xl border border-[var(--accent-navy)] hover:border-[var(--accent-navy-light)] bg-gradient-to-br from-[var(--bg-base)]/60 to-[var(--bg-base)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--bg-base)]/80 hover:to-[var(--bg-base)]/50 hover:shadow-lg hover:shadow-[#1a2744]/20">
              <h4 className="text-[var(--text-1)] font-semibold mb-3 flex items-center gap-2 text-lg">
                <Zap size={20} className="text-[#ffb000]"/>
                Exponential Productivity
              </h4>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">Reclaim thousands of hours by automating routine cognitive work. Let your teams focus on high-impact strategy, creativity, and decision-making that machines cannot replicate.</p>
            </div>

            <div className="group p-7 rounded-2xl border border-[var(--accent-navy)] hover:border-[var(--accent-navy-light)] bg-gradient-to-br from-[var(--bg-base)]/60 to-[var(--bg-base)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--bg-base)]/80 hover:to-[var(--bg-base)]/50 hover:shadow-lg hover:shadow-[#1a2744]/20">
              <h4 className="text-[var(--text-1)] font-semibold mb-3 flex items-center gap-2 text-lg">
                <Layers size={20} className="text-[#00d9ff]"/>
                Unified Knowledge
              </h4>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">Eliminate information silos. AI synthesizes institutional knowledge, cross-team learnings, and real-time insights into unified intelligence accessible to everyone.</p>
            </div>

            <div className="group p-7 rounded-2xl border border-[var(--accent-navy)] hover:border-[var(--accent-navy-light)] bg-gradient-to-br from-[var(--bg-base)]/60 to-[var(--bg-base)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-[var(--bg-base)]/80 hover:to-[var(--bg-base)]/50 hover:shadow-lg hover:shadow-[#1a2744]/20">
              <h4 className="text-[var(--text-1)] font-semibold mb-3 flex items-center gap-2 text-lg">
                <BookOpen size={20} className="text-[#00ff88]"/>
                Future-Proof Operations
              </h4>
              <p className="text-[var(--text-3)] text-sm leading-relaxed">Build scalable, adaptable processes that grow with your organization. AI-augmented workflows evolve intelligently, reducing manual overhead and technical debt.</p>
            </div>

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

      {/* --- Agent Marketplace Preview --- */}
      <section id="marketplace" className="relative z-20 bg-[var(--bg-base)] py-32 px-6 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
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
            <button
              onClick={() => setCurrentPage('marketplace')}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#f0f0f0] transition-all duration-300 flex items-center gap-2"
            >
              View All Agents <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.filter(a => a.id === 'projectiq' || a.id === 'resource').map((agent) => (
            <div key={agent.id}>
              <AgentCard
                title={agent.title}
                description={agent.description}
                tags={agent.tags}
                VisualComponent={agent.visual}
                onHover={() => setHoveredCard(agent.id)}
                onLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedAgent(agent)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- Newsletter Preview --- */}
      <section id="newsletter" className="relative z-20 bg-[var(--bg-base)] py-32 px-6 md:px-10 lg:px-20 overflow-hidden border-t border-[var(--accent-navy)]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
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
            <button
              onClick={() => setCurrentPage('newsletter')}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#f0f0f0] transition-all duration-300 flex items-center gap-2"
            >
              View All Articles <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsletters.slice(0, 3).map((letter) => (
            <div key={letter.id}>
              <NewsletterCard
                title={letter.title}
                excerpt={letter.excerpt}
                date={letter.date}
                category={letter.category}
                image={letter.image}
                onHover={() => setHoveredCard(letter.id)}
                onLeave={() => setHoveredCard(null)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal Portal */}
      {selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}

      {/* Global styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />
    </div>
  );
}
