export default function ProjectIQVisual() {
  return (
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
}
