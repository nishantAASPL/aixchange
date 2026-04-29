export default function AbstractPlaceholder1() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="glowPl1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: '#0d1b2a', stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="#050505" />
      <circle cx="200" cy="150" r="100" fill="url(#glowPl1)" />
      <circle cx="200" cy="150" r="40" fill="transparent" stroke="#1e3a5f" strokeWidth="1" opacity="0.5" />
      <circle cx="200" cy="150" r="65" fill="transparent" stroke="#2d5080" strokeWidth="0.5" opacity="0.3" />
      <circle cx="200" cy="150" r="90" fill="transparent" stroke="#1a2744" strokeWidth="0.5" opacity="0.2" />
      <circle cx="200" cy="60" r="5" fill="#2d5080" opacity="0.7" />
      <circle cx="320" cy="120" r="4" fill="#1e3a5f" opacity="0.6" />
      <circle cx="280" cy="230" r="4" fill="#2d5080" opacity="0.5" />
      <circle cx="120" cy="210" r="5" fill="#1a2744" opacity="0.6" />
      <circle cx="80" cy="110" r="4" fill="#1e3a5f" opacity="0.5" />
      <line x1="200" y1="60" x2="200" y2="140" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3" />
      <line x1="320" y1="120" x2="240" y2="140" stroke="#2d5080" strokeWidth="0.5" opacity="0.2" />
      <line x1="280" y1="230" x2="220" y2="170" stroke="#1a2744" strokeWidth="0.5" opacity="0.2" />
      <line x1="120" y1="210" x2="180" y2="160" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}
