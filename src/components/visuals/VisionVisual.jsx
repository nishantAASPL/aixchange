export default function VisionVisual({ isDark }) {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
      <defs>
        <radialGradient id="visionGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: isDark ? '#2d5080' : '#4a6fa5', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: isDark ? '#1a2744' : '#2d4a7a', stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id="bridgeGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" style={{ stopColor: isDark ? '#1e3a5f' : '#3d5a8a', stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: isDark ? '#2d5080' : '#4a6fa5', stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: isDark ? '#1a2744' : '#2d4a7a', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={isDark ? '#050505' : '#f7f6f2'} />

      <circle cx="150" cy="150" r="100" fill="url(#visionGlow)" />

      <circle cx="110" cy="150" r="60" fill="none" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="2" opacity="0.5" />
      <circle cx="110" cy="130" r="8" fill={isDark ? '#2d5080' : '#4a6fa5'} opacity="0.6" />
      <path d="M 105 145 Q 110 160 105 175" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="2" fill="none" opacity="0.4" />

      <circle cx="190" cy="150" r="60" fill="none" stroke={isDark ? '#1e3a5f' : '#3d5a8a'} strokeWidth="2" opacity="0.5" />
      <circle cx="185" cy="140" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.6" />
      <circle cx="190" cy="145" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.6" />
      <circle cx="195" cy="140" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.6" />
      <circle cx="185" cy="160" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.5" />
      <circle cx="195" cy="160" r="3" fill={isDark ? '#1e3a5f' : '#3d5a8a'} opacity="0.5" />

      <rect x="130" y="145" width="40" height="10" rx="5" fill="url(#bridgeGradient)" opacity="0.7" />

      <line x1="110" y1="110" x2="190" y2="110" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="1" opacity="0.2" />
      <line x1="110" y1="190" x2="190" y2="190" stroke={isDark ? '#2d5080' : '#4a6fa5'} strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
