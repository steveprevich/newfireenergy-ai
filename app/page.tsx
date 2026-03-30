

"use client";
import { useRef, useCallback } from "react";

export default function Home() {
  const loopCoverRef = useRef<HTMLDivElement>(null);
  const stats = [
    { value: "$100T", label: "Market Horizon", sub: "ZPE addresses the entire global energy market", accent: "#00B8E6" },
    { value: "100%", label: "Zero CO₂ Emissions", sub: "No carbon. No hazardous waste. Ever.", accent: "#2DD4BF" },
    { value: "24/7", label: "Continuous Output", sub: "Always-on — no grid, no weather dependency", accent: "#00B8E6" },
    { value: "0", label: "Harmful Radiation", sub: "Completely safe for life and environment", accent: "#2DD4BF" },
    { value: "KW→MW", label: "Fully Scalable", sub: "Modular design — grid, off-grid, mobile", accent: "#F97316" },
    { value: "30 Yrs", label: "In Development", sub: "Confirmed by NASA, DOE, MIT & Google", accent: "#00B8E6" },
  ];

  return (
    <main style={{ background: "#060E1F", margin: 0, padding: 0 }}>

      {/* ══════════════════════════════════════════
          PAGE 1 — Full-screen video, clean & minimal
      ══════════════════════════════════════════ */}
      <section style={{ height: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

        {/* Video — brighter */}
        <video autoPlay muted playsInline preload="auto"
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.currentTime = 2;
              const tryPlay = () => el.play().catch(() => {});
              el.addEventListener('canplay', tryPlay, { once: true });
              tryPlay();
              // When near end: flash cover, seek to 2s, then release cover
              el.addEventListener('timeupdate', () => {
                if (el.duration && el.currentTime > el.duration - 0.4) {
                  // Show cover instantly
                  if (loopCoverRef.current) loopCoverRef.current.style.opacity = "1";
                  el.currentTime = 2;
                  // Hide cover after seek settles (150ms)
                  setTimeout(() => {
                    if (loopCoverRef.current) loopCoverRef.current.style.opacity = "0";
                  }, 150);
                }
              });
            }
          }}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0,
            opacity: 0.62, filter: "hue-rotate(195deg) saturate(2.0) brightness(0.88)", mixBlendMode: "screen" }}>
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Loop cover — blocks the 1-frame flash when video seeks back to 2s */}
        <div ref={loopCoverRef} style={{ position: "absolute", inset: 0, background: "#060E1F",
          zIndex: 1, opacity: 0, transition: "opacity 0.15s ease", pointerEvents: "none" }} />

        {/* Dark overlay — lighter so video shows through more */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(6,14,31,0.38)", zIndex: 1 }} />

        {/* Edge mask — RIGHT: hides TikTok UI icons */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "22%", height: "100%", zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(to left, rgba(6,14,31,1) 0%, rgba(6,14,31,0.85) 40%, transparent 100%)" }} />

        {/* Edge mask — LEFT: matches right for balance */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "22%", height: "100%", zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(to right, rgba(6,14,31,1) 0%, rgba(6,14,31,0.85) 40%, transparent 100%)" }} />

        {/* Subtle centre glow behind text */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 700, borderRadius: "50%", zIndex: 1,
          background: "radial-gradient(circle, rgba(0,184,230,0.08) 0%, transparent 70%)",
          pointerEvents: "none" }} />

        {/* Content — premium minimal */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "24px", maxWidth: "860px" }}>

          {/* Small pre-title label */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28,
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(0,184,230,0.7)" }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: "rgba(0,184,230,0.4)" }} />
            Zero Point Energy Technology
            <span style={{ display: "inline-block", width: 32, height: 1, background: "rgba(0,184,230,0.4)" }} />
          </div>

          {/* Main title — gradient + glow */}
          <h1 style={{ fontSize: "clamp(3.2rem, 10vw, 7.5rem)", fontWeight: 900, margin: "0 0 6px",
            lineHeight: 1.0, letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #ffffff 30%, #7FD8F0 70%, #00B8E6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            textShadow: "none",
            filter: "drop-shadow(0 0 40px rgba(0,184,230,0.25))" }}>
            New Fire Energy
          </h1>

          {/* Flame sub-brand */}
          <div style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 800, marginBottom: 28,
            background: "linear-gradient(90deg, #F97316, #FBBF24, #F97316)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "0.15em", textTransform: "uppercase" }}>
            &#x1F525; NEW FIRE!
          </div>

          {/* Divider line */}
          <div style={{ width: 80, height: 2, margin: "0 auto 24px",
            background: "linear-gradient(90deg, transparent, #00B8E6, transparent)" }} />

          {/* Quote */}
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "rgba(255,255,255,0.62)",
            maxWidth: 580, margin: "0 auto 10px", lineHeight: 1.75, fontStyle: "italic", fontWeight: 300 }}>
            &ldquo;The Number One Company for the World&rsquo;s New Energy Technology&rdquo;
          </p>
          <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)", color: "rgba(0,184,230,0.55)",
            letterSpacing: "0.08em", fontWeight: 600, margin: 0 }}>
            Zero Point · Zero Carbon · Limitless Energy
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 2,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "rgba(255,255,255,0.3)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
          animation: "bounce 2s infinite" }}>
          <span>Scroll</span>
          <span style={{ fontSize: "1.1rem" }}>↓</span>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          PAGE 2 — Full hero content (was page 1)
      ══════════════════════════════════════════ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 24px", background: "linear-gradient(180deg, #060E1F 0%, #0A1628 60%, #060E1F 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)" }}>

        <div style={{ maxWidth: 900, width: "100%", textAlign: "center" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px",
            borderRadius: 999, border: "1px solid rgba(0,184,230,0.25)", background: "rgba(0,184,230,0.08)",
            color: "#7FD8F0", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00B8E6", display: "inline-block", animation: "pulse 2s infinite" }} />
            Zero Point Energy · Zero Carbon Emissions
          </div>

          {/* Headlines */}
          <h2 style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 900, margin: "0 0 8px", lineHeight: 1.05,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #ffffff 30%, #7FD8F0 70%, #00B8E6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px rgba(0,184,230,0.2))" }}>
            New Fire Energy
          </h2>
          <h3 style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: 800, margin: "0 0 24px", lineHeight: 1.1,
            background: "linear-gradient(90deg, #F97316, #FBBF24, #F97316)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "0.12em", textTransform: "uppercase" }}>
            &#x1F525; NEW FIRE!
          </h3>

          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "rgba(255,255,255,0.65)", maxWidth: 680, margin: "0 auto 10px", lineHeight: 1.6 }}>
            The Number One Company for the World&apos;s{" "}
            <span style={{ color: "#7FD8F0", fontWeight: 600 }}>New Energy Frontier</span>
          </p>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", color: "rgba(255,255,255,0.42)", maxWidth: 560, margin: "0 auto 36px" }}>
            Are you ready for the Zero Point, Zero Carbon Emission Energy Makeover?
          </p>

          {/* 3 quick stats */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
            {[{ v: "$100T", l: "Market Horizon" }, { v: "Zero", l: "Carbon Emissions" }, { v: "24/7", l: "Continuous Output" }].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.9rem", fontWeight: 800, background: "linear-gradient(90deg,#00B8E6,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.v}
                </div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 40 }}>
            <a href="/investors" style={{ padding: "14px 32px", borderRadius: 10,
              background: "linear-gradient(135deg,#F97316,#EF4444)", color: "#fff", fontWeight: 700,
              fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 24px rgba(249,115,22,0.35)" }}>
              Request Access →
            </a>
            <a href="/technology" style={{ padding: "14px 32px", borderRadius: 10,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
              Discover ZPE / LENR
            </a>
          </div>

          {/* Trust signals */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 32px", fontSize: "0.72rem", color: "rgba(255,255,255,0.28)" }}>
            {["NASA & DOE confirmed research", "Globally protected patents", "No hazardous radiation", "Accredited investors only"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2DD4BF", display: "inline-block" }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          PAGE 3 — Stats: Why It Changes Everything
      ══════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "#060E1F", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px",
              borderRadius: 999, border: "1px solid rgba(0,184,230,0.2)", background: "rgba(0,184,230,0.07)",
              color: "#7FD8F0", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B8E6", display: "inline-block" }} />
              The New Fire by the Numbers
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
              Zero Point Energy —{" "}
              <span style={{ background: "linear-gradient(90deg,#00B8E6,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Why It Changes Everything
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              A technology 30 years in development is now on the precipice of commercialization.
            </p>
          </div>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 48 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${s.accent}22`,
                borderRadius: 16, padding: "28px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.accent}12`,
                  border: `1px solid ${s.accent}30`, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0, fontSize: "1.3rem" }}>
                  {s.label.includes("Market") ? "🌐" : s.label.includes("CO₂") ? "🛡️" : s.label.includes("Continuous") ? "⚡" : s.label.includes("Radiation") ? "✅" : s.label.includes("Scalable") ? "📈" : "⚛️"}
                </div>
                <div>
                  <div style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800,
                    background: `linear-gradient(90deg, ${s.accent}, ${s.accent}99)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1, marginBottom: 6 }}>
                    {s.value}
                  </div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>{s.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", lineHeight: 1.5 }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,184,230,0.18)",
            borderRadius: 20, padding: "40px 36px", display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 6px" }}>
                Advancing the Future of Clean Energy
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", margin: 0 }}>
                Companies holding ZPE patents are pioneers of a $100 trillion market.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="/investors" style={{ padding: "13px 28px", borderRadius: 10,
                background: "linear-gradient(135deg,#F97316,#EF4444)", color: "#fff", fontWeight: 700,
                fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(249,115,22,0.3)" }}>
                Request Access →
              </a>
              <a href="/technology" style={{ padding: "13px 28px", borderRadius: 10,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                Learn the Science
              </a>
            </div>
          </div>

          {/* Institutions */}
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
              Confirmed by the world&apos;s leading institutions
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 40px" }}>
              {["NASA", "U.S. Dept. of Energy", "MIT", "Google", "U.S. Navy", "Physical Review C"].map((org) => (
                <span key={org} style={{ color: "rgba(255,255,255,0.25)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                  {org}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
      `}</style>
    </main>
  );
}
