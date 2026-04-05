"use client";

import COPExplainerWidget from "@/components/COPExplainerWidget";

const milestones = [
  { year: "1926", title: "First Cold Fusion Claim", desc: "German chemists Friedrich Paneth and Kurt Peters publish the earliest documented scientific attempt at room-temperature hydrogen fusion using palladium, marking the beginning of the research lineage that would become LENR." },
  { year: "1989", title: "Cold Fusion Announced", desc: "Pons & Fleischmann announce cold fusion at University of Utah, igniting decades of global research." },
  { year: "2009", title: "U.S. Navy Confirms", desc: "U.S. Navy researchers publish independent confirmation of LENR excess heat and nuclear signatures." },
  { year: "2015", title: "Google Research Program", desc: "Google funds a multi-year, $10M+ LENR research program with leading universities. Results published in Nature in 2019 identified new experimental protocols and improved measurement methodology for future research." },
  { year: "2020", title: "NASA Lattice Confinement", desc: "NASA Glenn Research Center publishes Lattice Confinement Fusion results confirming the reaction mechanism." },
  { year: "2023", title: "DOE ARPA-E Funding", desc: "U.S. Dept. of Energy awards $10M across eight institutions including MIT, Stanford, and the University of Michigan to study whether LENR could be the basis for a transformative carbon-free energy source." },
  { year: "2024", title: "Leonardo Corp Milestone", desc: "Andrea Rossi's Leonardo Corp reports continued development of the E-Cat NGU self-sustaining module, a significant company milestone in a 30-year research journey." },
  { year: "2025+", title: "Commercial Phase", desc: "E-Cat NGU and ENG8 EnergiCell preparing for distribution. New Fire Energy investing now." },
];

const faqs = [
  { q: "Is LENR independently validated?", a: "Yes. Excess heat and nuclear signatures in LENR experiments have been independently observed and published by research teams at the U.S. Navy SPAWAR, NASA Glenn Research Center, the U.S. Department of Energy, and MIT. While mainstream scientific consensus has not yet fully formed, the body of independent third-party physicist reviews continues to grow and institutional interest has increased significantly since 2020." },
  { q: "What is Zero Point Energy (ZPE)?", a: "ZPE is referenced by portfolio companies within the LENR umbrella such as ENG8 International. It describes energy derived from the quantum vacuum field. It is a theoretical framework explored by certain LENR portfolio companies such as ENG8 International, operating within the broader LENR investment umbrella." },
  { q: "How is LENR different from conventional nuclear fission?", a: "Fission splits heavy atoms (uranium, plutonium) producing radioactive waste and gamma radiation. LENR involves light hydrogen isotopes reacting in a metal lattice, producing primarily heat and helium-4 no harmful radiation, no long-lived waste." },
  { q: "What does COP mean?", a: "COP (Coefficient of Performance) is the ratio of energy out to energy in. A COP of 1.0 is break-even. A COP of 1.8 means 80% more energy out than in. ENG8 International recorded a COP of 1.8 in independent UK laboratory testing by Dr. Robert Morgan in 2020, with subsequent tests showing continued improvement and a commercial target of COP 5 or higher. These figures are company-reported and ongoing independent verification continues." },
  { q: "Why hasn't LENR been commercialized before?", a: "The primary challenge has been reproducibility. Early experiments were variable. Multiple companies (Andrea Rossi/Leonardo Corp, ENG8 International) have now achieved consistent, repeatable results and are entering the commercialization phase." },
];

export default function TechnologyPage() {
  return (
    <main style={{ background: "#060E1F", margin: 0, padding: 0 }}>

      {/* ── FULL-SCREEN VIDEO HERO ── */}
      <section style={{ height: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

        <video
          autoPlay loop muted playsInline preload="auto"
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.currentTime = 0;
              const tryPlay = () => el.play().catch(() => {});
              el.addEventListener('canplay', tryPlay, { once: true });
              tryPlay();
              el.addEventListener('timeupdate', () => {
                if (el.duration && el.currentTime > el.duration - 0.3) el.currentTime = 0;
              });
            }
          }}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center center", zIndex: 0,
            opacity: 0.85, filter: "sepia(1) saturate(5) hue-rotate(185deg) brightness(0.85)",
            transform: "scale(1.05)", transformOrigin: "center center" }}>
          <source src="/energy.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,50,0.52)", zIndex: 1 }} />

        {/* Side vignettes */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "20%", height: "100%",
          background: "linear-gradient(to left, rgba(6,14,31,1) 0%, rgba(6,14,31,0.6) 40%, transparent 100%)",
          zIndex: 3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "20%", height: "100%",
          background: "linear-gradient(to right, rgba(6,14,31,1) 0%, rgba(6,14,31,0.6) 40%, transparent 100%)",
          zIndex: 3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "18%",
          background: "linear-gradient(to top, rgba(6,14,31,1) 0%, transparent 100%)",
          zIndex: 3, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "24px", maxWidth: 860 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28,
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(0,184,230,0.7)" }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: "rgba(0,184,230,0.4)" }} />
            Peer-Reviewed Research · 30+ Years of Development
            <span style={{ display: "inline-block", width: 32, height: 1, background: "rgba(0,184,230,0.4)" }} />
          </div>

          <h1 style={{ fontSize: "clamp(2.8rem, 9vw, 6.5rem)", fontWeight: 900, margin: "0 0 20px",
            lineHeight: 1.0, letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #ffffff 30%, #7FD8F0 70%, #00B8E6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 40px rgba(0,184,230,0.25))" }}>
            LENR Technology
          </h1>

          <div style={{ width: 80, height: 2, margin: "0 auto 24px",
            background: "linear-gradient(90deg, transparent, #00B8E6, transparent)" }} />

          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "rgba(255,255,255,0.65)",
            maxWidth: 620, margin: "0 auto 12px", lineHeight: 1.75, fontWeight: 300 }}>
            Low Energy Nuclear Reactions, a field of nuclear science with a growing body of independent third-party physicist reviews. Studied and published by NASA, the U.S. Navy, DOE, and MIT.
          </p>
          <p style={{ fontSize: "0.85rem", color: "rgba(0,184,230,0.55)", letterSpacing: "0.08em", fontWeight: 600 }}>
            Zero Carbon · Low Radiation Profile · Designed to Scale
          </p>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 4,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "rgba(255,255,255,0.3)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
          animation: "bounce 2s infinite" }}>
          <span>Scroll</span><span style={{ fontSize: "1.1rem" }}>↓</span>
        </div>
      </section>

      {/* ── WHAT IS LENR ── */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #060E1F 0%, #0A1628 100%)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px",
              borderRadius: 999, border: "1px solid rgba(0,184,230,0.2)", background: "rgba(0,184,230,0.07)",
              color: "#7FD8F0", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B8E6", display: "inline-block" }} />
              The Science
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 20px" }}>
              What is{" "}
              <span style={{ background: "linear-gradient(90deg,#00B8E6,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                LENR?
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", maxWidth: 720, margin: "0 auto", lineHeight: 1.8 }}>
              Low Energy Nuclear Reactions (LENR) is a <strong style={{ color: "rgba(255,255,255,0.75)" }}>peer-reviewed field of nuclear science</strong> in which nuclear-scale reactions are observed at low input energies within a metal lattice, producing heat with negligible radiation and zero carbon emissions. The evidence base is growing and institutional research funding has accelerated since 2020.
            </p>
          </div>

          {/* 4 mechanism cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 64 }}>
            {[
              { icon: "⚛️", title: "Hydrogen Loading", desc: "Hydrogen isotopes are loaded into a specially prepared nickel or palladium metal lattice at elevated pressure and temperature." },
              { icon: "🔬", title: "Lattice Confinement", desc: "The crystal lattice confines hydrogen nuclei below the Bohr radius dramatically increasing quantum tunneling probability." },
              { icon: "⚡", title: "Nuclear Reaction", desc: "Hydrogen nuclei fuse with metal nuclei, releasing energy as phonons (heat) rather than dangerous gamma radiation." },
              { icon: "📈", title: "Excess Heat Output", desc: "The system outputs more thermal energy than the electrical input. COP values of 1.5 to 1.8 have been reported in recent validated laboratory tests, with commercial targets of COP 5 and above." },
            ].map((c) => (
              <div key={c.title} style={{ background: "rgba(0,184,230,0.04)", border: "1px solid rgba(0,184,230,0.14)",
                borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{c.icon}</div>
                <div style={{ color: "#7FD8F0", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{c.title}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>{c.desc}</div>
              </div>
            ))}
          </div>

          {/* ZPE note */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,184,230,0.12)",
            borderRadius: 16, padding: "28px 32px", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ color: "#7FD8F0", fontWeight: 700, fontSize: "0.9rem", marginBottom: 10 }}>
              ⚛️ A Note on Zero Point Energy (ZPE)
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
              Zero Point Energy is referenced by certain portfolio companies within the LENR umbrella such as ENG8 International as a theoretical framework for energy derived from the quantum vacuum field. ZPE falls under the broader LENR investment thesis. New Fire Energy invests across the LENR ecosystem, which includes companies exploring ZPE, lattice confinement fusion, and catalyzed nuclear processes.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: "80px 24px", background: "#060E1F", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>
              History of{" "}
              <span style={{ background: "linear-gradient(90deg,#00B8E6,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                LENR Science
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem" }}>From first discovery to commercial deployment</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: "flex", gap: 24, alignItems: "flex-start", paddingBottom: 32, position: "relative" }}>
                {/* Line */}
                {i < milestones.length - 1 && (
                  <div style={{ position: "absolute", left: 39, top: 44, width: 2, height: "calc(100% - 12px)",
                    background: "linear-gradient(to bottom, rgba(0,184,230,0.3), rgba(0,184,230,0.05))" }} />
                )}
                {/* Year badge */}
                <div style={{ flexShrink: 0, width: 80, height: 80, borderRadius: 16,
                  background: "rgba(0,184,230,0.08)", border: "1px solid rgba(0,184,230,0.2)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#00B8E6", fontWeight: 800, fontSize: "0.95rem" }}>{m.year}</span>
                </div>
                {/* Content */}
                <div style={{ paddingTop: 16 }}>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 6 }}>{m.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COP EXPLAINER ── */}
      <section style={{ padding: "80px 24px", background: "#060E1F", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px",
              borderRadius: 999, border: "1px solid rgba(0,184,230,0.2)", background: "rgba(0,184,230,0.07)",
              color: "#7FD8F0", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B8E6", display: "inline-block" }} />
              Interactive Tool
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>
              What Does{" "}
              <span style={{ background: "linear-gradient(90deg,#00B8E6,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                COP Mean?
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem", maxWidth: 560, margin: "0 auto" }}>
              Drag the slider to explore the Coefficient of Performance at different values verified by independent physicists.
            </p>
          </div>
          <COPExplainerWidget />
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(180deg,#060E1F,#0A1628)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>
              Common Questions
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem" }}>Understanding LENR science and our investment thesis</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, padding: "24px 28px" }}>
                <div style={{ color: "#7FD8F0", fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>Q: {f.q}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.75 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 24px", background: "#060E1F", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", margin: "0 0 16px" }}>
            Advancing the Future of Clean Energy
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", margin: "0 0 36px", lineHeight: 1.7 }}>
            New Fire Energy is raising $40.4M to invest in the world&apos;s most promising LENR companies. Minimum $20,000. Accredited investors only.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <a href="/investors" style={{ padding: "15px 36px", borderRadius: 10,
              background: "linear-gradient(135deg,#F97316,#EF4444)", color: "#fff", fontWeight: 700,
              fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 4px 24px rgba(249,115,22,0.35)" }}>
              Request Access →
            </a>
            <a href="/whitepaper" style={{ padding: "15px 36px", borderRadius: 10,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontWeight: 600, fontSize: "1.05rem", textDecoration: "none" }}>
              Read White Papers
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
      `}</style>
    </main>
  );
}
