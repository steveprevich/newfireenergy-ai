"use client";

export default function FireLogo({ size = 42 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", filter: "drop-shadow(0 0 8px rgba(0,184,230,0.7))" }}
    >
      <defs>
        {/* Outer flame gradient — orange base to blue tip */}
        <linearGradient id="flameOuter" x1="21" y1="40" x2="21" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="35%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>

        {/* Inner flame gradient — white core */}
        <linearGradient id="flameInner" x1="21" y1="38" x2="21" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dark rounded background */}
      <rect width="42" height="42" rx="11" fill="#060E1F" />
      <rect width="42" height="42" rx="11" fill="none" stroke="rgba(0,184,230,0.25)" strokeWidth="1" />

      {/* Outer flame — slow flicker */}
      <g filter="url(#glow)">
        <path
          d="M21 39 C13 36 8 28 10 19 C12 11 17 7 15 2 C18 6 17 12 20 15 C21 11 23 7 21 3 C27 8 31 16 29 24 C27 32 24 37 21 39Z"
          fill="url(#flameOuter)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1 1; 0.96 1.04; 1.03 0.97; 0.98 1.03; 1 1"
            dur="2.1s"
            repeatCount="indefinite"
            additive="sum"
            transformOrigin="21 39"
          />
          <animate attributeName="opacity" values="1;0.85;1;0.9;1" dur="2.1s" repeatCount="indefinite" />
        </path>

        {/* Inner flame — faster flicker */}
        <path
          d="M21 37 C15 34 12 27 14 20 C16 15 18 12 17 8 C19 12 18 16 20 18 C22 14 23 11 22 8 C26 13 28 19 27 25 C26 31 23 35 21 37Z"
          fill="url(#flameInner)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1 1; 1.04 0.96; 0.97 1.03; 1.02 0.98; 1 1"
            dur="1.5s"
            repeatCount="indefinite"
            additive="sum"
            transformOrigin="21 37"
          />
          <animate attributeName="opacity" values="0.9;1;0.85;1;0.9" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* NFE text — fixed in foreground */}
      <text
        x="21"
        y="33"
        textAnchor="middle"
        fill="white"
        fontWeight="900"
        fontSize="9.5"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="0.8"
        style={{ textShadow: "0 0 6px rgba(0,0,0,0.8)" }}
      >
        NFE
      </text>
    </svg>
  );
}
