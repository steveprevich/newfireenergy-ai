"use client";

export default function Home() {
  const stats = [
    { value: "$40.4M", label: "Current Raise", sub: "Rule 506(c) Reg D · Accredited Investors Only", accent: "#00B8E6" },
    { value: "$1.00", label: "Price Per Share", sub: "Early seed allocation available at $0.50/share", accent: "#2DD4BF" },
    { value: "$20K", label: "Minimum Investment", sub: "20,000 shares minimum subscription", accent: "#00B8E6" },
    { value: "100+", label: "Years in Development", sub: "From Irving Langmuir 1909 to commercialization now", accent: "#2DD4BF" },
    { value: "CoP 30", label: "Coefficient of Performance", sub: "ENG8 EnergiCell demonstrated in laboratory conditions", accent: "#F97316" },
    { value: "$10M", label: "DOE / ARPA-E Funding", sub: "U.S. Dept. of Energy awarded to LENR research projects", accent: "#00B8E6" },
  ];

  return (
    <main style={{ background: "#060E1F", margin: 0, padding: 0 }}>

      {/* ══════════════════════════════════════════
          PAGE 1 — Full-screen video, clean & minimal
      ══════════════════════════════════════════ */}
      <section style={{ height: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          ref={(el) => { if (el) { el.muted = true; el.play().catch(() => {}); } }}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", zIndex: 0,
            opacity: 0.75, filter: "hue-rotate(195deg) saturate(1.8) brightness(1.1)",
            transform: "scale(1.18)", transformOrigin: "center center" }}>
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay so text stays readable */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(6,14,31,0.45)", zIndex: 1 }} />

        {/* Soft vignette — RIGHT edge */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "24%", height: "100%",
          background: "linear-gradient(to left, rgba(6,14,31,1) 0%, rgba(6,14,31,0.7) 40%, transparent 100%)",
          zIndex: 3, pointerEvents: "none" }} />

        {/* Soft vignette — LEFT edge */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "24%", height: "100%",
          background: "linear-gradient(to right, rgba(6,14,31,1) 0%, rgba(6,14,31,0.7) 40%, transparent 100%)",
          zIndex: 3, pointerEvents: "none" }} />

        {/* Soft edge fade — bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "15%",
          background: "linear-gradient(to top, rgba(6,14,31,0.95) 0%, transparent 100%)",
          zIndex: 3, pointerEvents: "none" }} />

        {/* Content — premium minimal */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "24px", maxWidth: "860px" }}>

          {/* Private equity fund label */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28,
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(0,184,230,0.7)" }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: "rgba(0,184,230,0.4)" }} />
            Private Equity Fund · Advanced Energy Technology
            <span style={{ display: "inline-block", width: 32, height: 1, background: "rgba(0,184,230,0.4)" }} />
          </div>

          {/* Main title */}
          <h1 style={{ fontSize: "clamp(3.2rem, 10vw, 7.5rem)", fontWeight: 900, margin: "0 0 6px",
            lineHeight: 1.0, letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #ffffff 30%, #7FD8F0 70%, #00B8E6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 40px rgba(0,184,230,0.25))" }}>
            New Fire Energy
          </h1>

          {/* Divider line */}
          <div style={{ width: 80, height: 2, margin: "0 auto 24px",
            background: "linear-gradient(90deg, transparent, #00B8E6, transparent)" }} />

          {/* Quote */}
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "rgba(255,255,255,0.62)",
            maxWidth: 600, margin: "0 auto 10px", lineHeight: 1.75, fontStyle: "italic", fontWeight: 300 }}>
            &ldquo;Energy technology 100 years in the making — preparing for commercialization now.&rdquo;
          </p>
          <p style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)", color: "rgba(0,184,230,0.55)",
            letterSpacing: "0.08em", fontWeight: 600, margin: 0 }}>
            LENR · Zero Point Energy · Zero Carbon · Limitless Power
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
          PAGE 2 — Who We Are / What We Do
      ══════════════════════════════════════════ */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 24px", background: "linear-gradient(180deg, #060E1F 0%, #0A1628 60%, #060E1F 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)" }}>

        <div style={{ maxWidth: 960, width: "100%", textAlign: "center" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px",
            borderRadius: 999, border: "1px solid rgba(0,184,230,0.25)", background: "rgba(0,184,230,0.08)",
            color: "#7FD8F0", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00B8E6", display: "inline-block", animation: "pulse 2s infinite" }} />
            Accredited Investors Only · Rule 506(c) Regulation D
          </div>

          {/* Headline */}
          <h2 style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 900, margin: "0 0 8px", lineHeight: 1.05,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #ffffff 30%, #7FD8F0 70%, #00B8E6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px rgba(0,184,230,0.2))" }}>
            A Private Equity Fund
          </h2>
          <h3 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)", fontWeight: 700, margin: "0 0 32px", lineHeight: 1.2,
            color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>
            Investing in Cutting-Edge Energy Technology
          </h3>

          {/* Who we are description */}
          <div style={{ background: "rgba(0,184,230,0.05)", border: "1px solid rgba(0,184,230,0.15)",
            borderRadius: 20, padding: "36px 40px", marginBottom: 40, textAlign: "left", maxWidth: 800, margin: "0 auto 40px" }}>
            <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.15rem)", color: "rgba(255,255,255,0.75)",
              lineHeight: 1.85, margin: 0 }}>
              <span style={{ color: "#7FD8F0", fontWeight: 700 }}>New Fire Energy Inc.</span> is a private equity firm that invests in and accelerates advanced energy technologies, with a particular focus on{" "}
              <span style={{ color: "#7FD8F0", fontWeight: 600 }}>Low Energy Nuclear Reactions (LENR)</span> — a peer-reviewed field of science — providing disciplined capital, technical support, and strategic guidance to move promising discoveries from the laboratory into commercial prototypes and market deployment.
            </p>
            <div style={{ width: "100%", height: 1, background: "rgba(0,184,230,0.12)", margin: "24px 0" }} />
            <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75, margin: 0 }}>
              Portfolio companies within the LENR umbrella reference technologies including Zero Point Energy (ZPE), lattice confinement fusion, and catalyzed low-energy nuclear processes — delivering safe, scalable energy solutions with zero carbon emissions and no hazardous radiation.
            </p>
          </div>

          {/* 3 quick investment stats */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", marginBottom: "44px" }}>
            {[
              { v: "$40.4M", l: "Total Offering" },
              { v: "$1.00", l: "Per Share" },
              { v: "$20K Min", l: "Minimum Entry" }
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, background: "linear-gradient(90deg,#00B8E6,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.v}
                </div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 44 }}>
            <a href="/investors" style={{ padding: "15px 36px", borderRadius: 10,
              background: "linear-gradient(135deg,#F97316,#EF4444)", color: "#fff", fontWeight: 700,
              fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 4px 24px rgba(249,115,22,0.35)" }}>
              🔥 Become an Investor →
            </a>
            <a href="/technology" style={{ padding: "15px 36px", borderRadius: 10,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontWeight: 600, fontSize: "1.05rem", textDecoration: "none" }}>
              Discover LENR / ZPE
            </a>
          </div>

          {/* Trust signals */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px 28px", fontSize: "0.72rem", color: "rgba(255,255,255,0.28)" }}>
            {[
              "NASA confirmed LENR research",
              "U.S. Navy cold fusion study",
              "DOE ARPA-E $10M awarded",
              "Rule 506(c) Reg D compliant",
              "Accredited investors only",
              "Wyoming corporation"
            ].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2DD4BF", display: "inline-block" }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          PAGE 3 — Investment Highlights & Stats
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
              The Opportunity by the Numbers
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
              LENR &amp; Zero Point Energy —{" "}
              <span style={{ background: "linear-gradient(90deg,#00B8E6,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Why It Changes Everything
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              A technology over 100 years in development is now on the precipice of commercialization. The world&apos;s leading institutions have confirmed it is real.
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
                  {s.label.includes("Raise") ? "💼" : s.label.includes("Share") ? "📈" : s.label.includes("Minimum") ? "🔑" : s.label.includes("Years") ? "⚛️" : s.label.includes("CoP") ? "⚡" : "🏛️"}
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
                Ready to Join the New Energy Revolution?
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", margin: 0 }}>
                Minimum $20,000 · $1.00/share · Accredited investors only · Early seed at $0.50/share
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="/investors" style={{ padding: "13px 28px", borderRadius: 10,
                background: "linear-gradient(135deg,#F97316,#EF4444)", color: "#fff", fontWeight: 700,
                fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(249,115,22,0.3)" }}>
                🔥 Become an Investor →
              </a>
              <a href="/whitepaper" style={{ padding: "13px 28px", borderRadius: 10,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                Read White Papers
              </a>
            </div>
          </div>

          {/* Institutions */}
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
              Confirmed &amp; funded by the world&apos;s leading institutions
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 40px" }}>
              {["NASA", "U.S. Dept. of Energy / ARPA-E", "MIT", "U.S. Navy", "Google", "Physical Review C"].map((org) => (
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
