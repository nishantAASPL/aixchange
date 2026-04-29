export default function ResourceFinderVisual() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full object-cover rounded-t-3xl" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: '#fff', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad2)" />

      <g transform="translate(200, 150)">
        <circle cx="0" cy="0" r="100" fill="transparent" stroke="#333" strokeWidth="1" />
        <circle cx="0" cy="0" r="60" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="0" cy="0" r="20" fill="#fff" opacity="0.1" />

        <line x1="0" y1="0" x2="-70" y2="-70" stroke="#555" strokeWidth="1" />
        <circle cx="-70" cy="-70" r="4" fill="#fff" opacity="0.8" />

        <line x1="0" y1="0" x2="80" y2="-40" stroke="#555" strokeWidth="1" />
        <circle cx="80" cy="-40" r="6" fill="#fff" opacity="0.6" />

        <line x1="0" y1="0" x2="-40" y2="80" stroke="#555" strokeWidth="1" />
        <circle cx="-40" cy="80" r="5" fill="#fff" opacity="0.7" />

        <line x1="0" y1="0" x2="60" y2="70" stroke="#555" strokeWidth="1" />
        <circle cx="60" cy="70" r="3" fill="#fff" opacity="0.5" />

        <path d="M 0 0 L -120 -20 A 120 120 0 0 1 -20 -120 Z" fill="url(#accentLine)" opacity="0.2" transform="rotate(45)" />
      </g>
    </svg>
  );
}
