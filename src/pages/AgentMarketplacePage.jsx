import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { agents } from '../data/agents';
import AgentModal from '../components/AgentModal';

export default function AgentMarketplacePage() {
  const { setCurrentPage, hoveredCard, setHoveredCard, selectedAgent, setSelectedAgent } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(agents.flatMap(a => a.tags))].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return a.localeCompare(b);
  });

  const filteredAgents = activeFilter === 'All'
    ? agents
    : agents.filter(a => a.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[var(--bg-base)] border-b border-[var(--border)]" style={{ paddingTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-[var(--text-3)] hover:text-white transition-colors mb-4 text-sm uppercase tracking-widest font-medium"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Agent Marketplace</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-12">
        {/* Section Description */}
        <div className="mb-12">
          <p className="text-[var(--text-2)] text-lg leading-relaxed max-w-3xl">
            Explore our complete library of production-ready AI agents. Filter by category to find the perfect solution for your workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-[var(--border)]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-white text-black'
                  : 'bg-[var(--bg-card)] text-[var(--text-3)] border border-[var(--border)] hover:border-[var(--border-hv)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="flex flex-col h-full">
              <div
                className="group relative flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:border-[var(--border-hv)] cursor-pointer h-full"
                onMouseEnter={() => setHoveredCard(agent.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedAgent(agent)}
              >
                {/* Visual */}
                <div className="relative h-48 w-full overflow-hidden p-2">
                  <div className="relative w-full h-full rounded-[1rem] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                      <agent.visual />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 z-10">
                  <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">{agent.title}</h3>
                  <p className="text-[var(--text-3)] text-sm mb-4">{agent.headline}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs uppercase tracking-widest text-white/80 bg-[var(--pill-bg)] border border-[var(--pill-border)] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Built On */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-5)] mb-2">Built On</p>
                    <span className="inline-block px-3 py-1 bg-[#111] border border-[#333] rounded-full text-white text-xs font-medium">
                      {agent.builtOn}
                    </span>
                  </div>

                  {/* Can Help With (preview) */}
                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-5)] mb-2">Can Help With</p>
                    <ul className="space-y-1 text-[var(--text-3)] text-xs">
                      {agent.canHelpWith.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="text-[var(--text-5)] mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider and Button */}
                  <div className="mt-auto">
                    <div className="h-[1px] w-full bg-[var(--border)] mb-4"></div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAgent(agent);
                      }}
                      className="w-full px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-[#f0f0f0] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAgents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--text-3)] text-lg">No agents found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}
    </div>
  );
}
