export default function AbstractPlaceholder2() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="shieldGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2d5080', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#1a2744', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#050505" />
      <path d="M 200 40 L 280 90 L 280 180 Q 200 240 200 260 Q 200 240 120 180 L 120 90 Z" fill="url(#shieldGrad)" stroke="#1e3a5f" strokeWidth="1.5" opacity="0.8" />
      <path d="M 200 60 L 260 100 L 260 170 Q 200 210 200 225 Q 200 210 140 170 L 140 100 Z" fill="transparent" stroke="#2d5080" strokeWidth="1" opacity="0.6" />
      <path d="M 200 80 L 240 110 L 240 160 Q 200 190 200 200 Q 200 190 160 160 L 160 110 Z" fill="transparent" stroke="#1a2744" strokeWidth="0.5" opacity="0.4" />
      <g transform="translate(200, 135)">
        <polyline points="-15,0 -5,10 20,-10" fill="none" stroke="#2d5080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </g>
    </svg>
  );
}
