import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { newsletters } from '../data/newsletters';
import NewsletterCard from '../components/NewsletterCard';

export default function NewsletterPage() {
  const { setCurrentPage, hoveredCard, setHoveredCard } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const handleBackClick = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById('newsletter');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const categories = ['All', ...new Set(newsletters.map(n => n.category))].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return a.localeCompare(b);
  });

  const filteredNewsletters = activeFilter === 'All'
    ? newsletters
    : newsletters.filter(n => n.category === activeFilter);

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[var(--bg-base)] border-b border-[var(--border)]" style={{ paddingTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-8">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-[var(--text-3)] hover:text-white transition-colors mb-4 text-sm uppercase tracking-widest font-medium"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back
          </button>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">AI Newsletter</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-12">
        {/* Section Description */}
        <div className="mb-12">
          <p className="text-[var(--text-2)] text-lg leading-relaxed max-w-3xl">
            Stay updated with insights on AI integration, best practices, governance, and real-world success stories from our community.
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

        {/* Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNewsletters.map((letter) => (
            <div key={letter.id} className="flex flex-col h-full">
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

        {/* Empty State */}
        {filteredNewsletters.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--text-3)] text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
