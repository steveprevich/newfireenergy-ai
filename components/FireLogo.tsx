"use client";

export default function FireLogo({ size = 42 }: { size?: number }) {
  return (
    <>
      <style>{`
        @keyframes flameOuter {
          0%,100% { transform: scaleX(1) scaleY(1); opacity:1; }
          25%      { transform: scaleX(0.94) scaleY(1.05); opacity:0.88; }
          50%      { transform: scaleX(1.05) scaleY(0.97); opacity:1; }
          75%      { transform: scaleX(0.97) scaleY(1.04); opacity:0.92; }
        }
        @keyframes flameInner {
          0%,100% { transform: scaleX(1) scaleY(1); opacity:0.92; }
          30%      { transform: scaleX(1.06) scaleY(0.95); opacity:1; }
          60%      { transform: scaleX(0.95) scaleY(1.06); opacity:0.85; }
        }
        @keyframes logoGlow {
          0%,100% { filter: drop-shadow(0 0 6px rgba(0,184,230,0.65)); }
          50%      { filter: drop-shadow(0 0 12px rgba(0,184,230,0.9)) drop-shadow(0 0 20px rgba(249,115,22,0.35)); }
        }
        .nfe-logo { animation: logoGlow 2.2s ease-in-out infinite; }
        .flame-outer-path { transform-origin: 50% 95%; animation: flameOuter 2.1s ease-in-out infinite; }
        .flame-inner-path { transform-origin: 50% 95%; animation: flameInner 1.5s ease-in-out infinite; }
      `}</style>

      <svg
        width={size}
        height={size}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nfe-logo"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="nfeFlameOuter" x1="21" y1="40" x2="21" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#F97316" />
            <stop offset="40%"  stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nfeFlameInner" x1="21" y1="38" x2="21" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="55%"  stopColor="#7DD3FC" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="42" height="42" rx="11" fill="#060E1F" />
        <rect width="42" height="42" rx="11" fill="none" stroke="rgba(0,184,230,0.22)" strokeWidth="1" />

        {/* Outer flame */}
        <path
          className="flame-outer-path"
          d="M21 40 C12 36 7 27 10 18 C12 10 17 6 15 1 C18 6 17 12 20 16 C21 11 23 7 21 2 C27 8 32 17 30 25 C28 33 24 38 21 40Z"
          fill="url(#nfeFlameOuter)"
        />

        {/* Inner flame */}
        <path
          className="flame-inner-path"
          d="M21 38 C15 35 12 27 14 20 C16 14 18 12 17 8 C19 12 18 17 21 19 C23 15 24 12 22 8 C26 14 28 20 27 26 C26 32 23 36 21 38Z"
          fill="url(#nfeFlameInner)"
        />

        {/* NFE — always on top, black so it pops against the blue flame */}
        <text
          x="21"
          y="34"
          textAnchor="middle"
          fill="#060E1F"
          stroke="#060E1F"
          strokeWidth="0.3"
          fontWeight="900"
          fontSize="12"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="0.5"
        >NFE</text>
      </svg>
    </>
  );
}
