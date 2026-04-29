export default function AbstractPlaceholder3() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="barGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: '#2d5080', stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#050505" />
      <rect x="80" y="200" width="35" height="50" fill="url(#barGrad1)" opacity="0.6" />
      <rect x="130" y="160" width="35" height="90" fill="url(#barGrad1)" opacity="0.7" />
      <rect x="180" y="110" width="35" height="140" fill="url(#barGrad1)" opacity="0.8" />
      <rect x="230" y="70" width="35" height="180" fill="url(#barGrad1)" opacity="0.9" />

      <polyline points="97,200 147,160 197,110 247,70" fill="none" stroke="#2d5080" strokeWidth="2" opacity="0.6" />
      <circle cx="97" cy="200" r="3" fill="#2d5080" opacity="0.7" />
      <circle cx="147" cy="160" r="3" fill="#2d5080" opacity="0.8" />
      <circle cx="197" cy="110" r="3" fill="#2d5080" opacity="0.9" />
      <circle cx="247" cy="70" r="3" fill="#1e3a5f" opacity="1" />

      <line x1="60" y1="250" x2="300" y2="250" stroke="#1a2744" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
