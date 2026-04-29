import { useState } from 'react';
import { ArrowRight, ExternalLink, CheckCircle, Clock, Users, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const approvedTools = [
  { id: 1, name: 'ChatGPT Enterprise', vendor: 'OpenAI', category: 'LLM', status: 'approved', approved: '2025-02-14', link: 'https://openai.com/enterprise' },
  { id: 2, name: 'GitHub Copilot', vendor: 'GitHub', category: 'Coding', status: 'approved', approved: '2024-11-10', link: 'https://github.com/features/copilot' },
  { id: 3, name: 'Claude for Work', vendor: 'Anthropic', category: 'LLM', status: 'approved', approved: '2025-03-02', link: 'https://claude.ai' },
  { id: 4, name: 'Midjourney', vendor: 'Midjourney', category: 'Image', status: 'pilot', approved: '2025-04-01', link: 'https://www.midjourney.com' },
  { id: 5, name: 'DeepSeek Coder', vendor: 'DeepSeek', category: 'Coding', status: 'restricted', approved: '2025-03-18', link: 'https://github.com/deepseek-ai/DeepSeek-Coder' },
];

const trainingSessions = [
  {
    id: 1,
    title: 'Introduction to Lovable AI',
    description: 'Learn how to build user friendly AI products with a focus on design, usability, and human centered experiences.',
    date: '27 Mar 2026, 11:30 am',
    category: 'FOUNDATIONS',
    duration: '1 hour',
    seats: 250,
    instructor: 'Amol Metkari',
  },
  {
    id: 2,
    title: 'Windsurf Training Session',
    description: 'Hands on lab focused on AI powered coding, real time collaboration, and modern development workflows using Windsurf tools.',
    date: '28 Apr 2026, 11:30 am',
    category: 'FOUNDATIONS',
    duration: '1 hours',
    seats: 300,
    instructor: 'Kaushal Nathvani',
  },
  {
    id: 3,
    title: 'AI Governance for Product Teams',
    description: 'Understand risk tiers, approvals, and governance workflows for AI systems.',
    date: '3 Jun 2025, 01:00 pm',
    category: 'GOVERNANCE',
    duration: '1 hour',
    seats: 100,
    instructor: 'Samuel Okafor',
  },
  {
    id: 4,
    title: 'Building Agentic Workflows',
    description: 'Design multi-step AI agents with tool integrations and decision flows.',
    date: '18 Jun 2025, 04:00 pm',
    category: 'ADVANCED',
    duration: '3 hours',
    seats: 30,
    instructor: 'Rafael Gomez',
  },
  {
    id: 5,
    title: 'Data Privacy in AI Pipelines',
    description: 'Learn data masking, PII handling, and compliance in AI workflows.',
    date: '8 Jul 2025, 02:00 pm',
    category: 'GOVERNANCE',
    duration: '1.5 hours',
    seats: 80,
    instructor: 'Lina Nakamura',
  },
  {
    id: 6,
    title: 'Advanced LLM Fine-Tuning',
    description: 'Deep dive into fine-tuning techniques and model optimization strategies.',
    date: '15 Jul 2025, 11:00 am',
    category: 'ADVANCED',
    duration: '2.5 hours',
    seats: 25,
    instructor: 'Arjun Mehta',
  },
];

const statusConfig = {
  approved: { bg: 'bg-green-500/20', text: 'text-green-400', label: 'approved' },
  pilot: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'pilot' },
  restricted: { bg: 'bg-red-500/20', text: 'text-red-400', label: 'restricted' },
};

const categoryColors = {
  FOUNDATIONS: 'text-blue-400',
  GOVERNANCE: 'text-purple-400',
  ADVANCED: 'text-orange-400',
};

export default function ResourcesPage() {
  const { setCurrentPage } = useApp();
  const [selectedSession, setSelectedSession] = useState(null);

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-white">
      {/* Header */}
      <div className="bg-[var(--bg-base)] border-b border-[var(--border)]" style={{ paddingTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-[var(--text-3)] hover:text-white transition-colors mb-4 text-sm uppercase tracking-widest font-medium"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Resources & Training</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16">

        {/* --- Approved AI Tools Section --- */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Approved AI Tools</h2>
            <p className="text-[var(--text-2)] text-lg max-w-3xl">
              A curated collection of enterprise-approved AI tools vetted for security, compliance, and organizational fit.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-1 gap-4">
                {/* Header Row */}
                <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)]">
                  <div className="text-xs uppercase tracking-widest text-[var(--text-4)] font-semibold">Tool</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--text-4)] font-semibold">Vendor</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--text-4)] font-semibold">Category</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--text-4)] font-semibold">Status</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--text-4)] font-semibold">Link</div>
                </div>

                {/* Tool Rows */}
                {approvedTools.map((tool) => (
                  <div key={tool.id} className="grid grid-cols-5 gap-4 px-6 py-4 bg-[var(--bg-card)]/50 rounded-lg border border-[var(--border)] hover:border-[var(--border-hv)] hover:bg-[var(--bg-card)]/70 transition-all duration-300">
                    <div className="text-[var(--text-1)] font-medium">{tool.name}</div>
                    <div className="text-[var(--text-3)]">{tool.vendor}</div>
                    <div className="text-[var(--text-3)]">{tool.category}</div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusConfig[tool.status].bg} ${statusConfig[tool.status].text}`}>
                        {statusConfig[tool.status].label}
                      </span>
                    </div>
                    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-light)] hover:text-white transition-colors flex items-center gap-1">
                      <ExternalLink size={14} />
                      <span className="text-xs">Open</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Training Calendar Section --- */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Training Calendar</h2>
            <p className="text-[var(--text-2)] text-lg max-w-3xl">
              Upcoming training sessions to upskill your team on AI governance, best practices, and advanced techniques.
            </p>
          </div>

          {/* Training Sessions */}
          <div className="space-y-4">
            {trainingSessions.map((session) => (
              <div
                key={session.id}
                onClick={() => setSelectedSession(selectedSession?.id === session.id ? null : session)}
                className="group cursor-pointer bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--border-hv)] transition-all duration-300 hover:bg-[var(--bg-card)]/80"
              >
                <div className="p-6 md:p-8">
                  {/* Session Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs uppercase tracking-widest font-bold ${categoryColors[session.category]}`}>
                          {session.category}
                        </span>
                        <span className="text-[var(--text-4)] text-xs">{session.date}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{session.title}</h3>
                      <p className="text-[var(--text-3)] text-sm md:text-base leading-relaxed">{session.description}</p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--border)] transition-colors">
                      <svg className={`w-5 h-5 transition-transform duration-300 ${selectedSession?.id === session.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedSession?.id === session.id && (
                    <div className="mt-6 pt-6 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-start gap-3">
                        <Clock size={16} className="text-[var(--text-4)] shrink-0 mt-1" />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[var(--text-4)] mb-1">Duration</p>
                          <p className="text-[var(--text-1)] font-medium">{session.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users size={16} className="text-[var(--text-4)] shrink-0 mt-1" />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[var(--text-4)] mb-1">Seats Available</p>
                          <p className="text-[var(--text-1)] font-medium">{session.seats} seats</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <User size={16} className="text-[var(--text-4)] shrink-0 mt-1" />
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[var(--text-4)] mb-1">Instructor</p>
                          <p className="text-[var(--text-1)] font-medium">{session.instructor}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
