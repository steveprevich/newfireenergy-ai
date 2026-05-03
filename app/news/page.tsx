"use client";

export default function NewsPage() {
  const news = [
    {
      category: "Government · Funding",
      date: "Feb 2023",
      title: "ARPA-E Awards $10M to Eight Institutions to Study LENR",
      body: "The U.S. Department of Energy's ARPA-E awarded $10 million across eight research teams, including MIT, Stanford, Texas Tech, and the University of Michigan, to evaluate LENR as a potential carbon-free energy source. It was the first direct federal LENR funding in decades and put government weight behind the field.",
      source: "U.S. Dept. of Energy / ARPA-E, arpa-e.energy.gov, February 2023",
      tag: "Funding",
      color: "#F97316",
    },
    {
      category: "Science · NASA",
      date: "2020",
      title: "NASA Glenn Research Center Publishes Lattice Confinement Fusion in Physical Review C",
      body: "NASA Glenn Research Center published peer-reviewed findings in Physical Review C confirming nuclear reaction signatures in deuterium-loaded metal lattice systems. Lead author Theresa Benyo and her team documented reactions at energies far below conventional hot fusion, putting a NASA stamp on lattice confinement as a real nuclear process.",
      source: "NASA Glenn Research Center, Physical Review C, Vol. 101, 2020",
      tag: "Independently Reviewed",
      color: "#22D3EE",
    },
    {
      category: "Science · MIT",
      date: "2024",
      title: "Peter Hagelstein Publishes Updated LENR Mechanism Paper at MIT",
      body: "MIT physicist Peter Hagelstein published updated theoretical work on solid-state fusion mechanisms through MIT's Research Laboratory of Electronics. Hagelstein has researched LENR for over 30 years and remains one of the few active academic researchers publishing on the subject at a major U.S. university.",
      source: "MIT Research Laboratory of Electronics / IOPscience, 2024",
      tag: "Independently Reviewed",
      color: "#2DD4BF",
    },
    {
      category: "Science · U.S. Navy",
      date: "2023",
      title: "Naval Surface Warfare Center Continues Multi-Lab LENR Research Program",
      body: "The U.S. Naval Surface Warfare Center ran its multi-lab LENR research program in 2023, extending work that traces back to the SPAWAR Systems Center Pacific in the early 1990s. No other government body has maintained a longer continuous research commitment to the field.",
      source: "U.S. Naval Surface Warfare Center, 2023",
      tag: "Government",
      color: "#22D3EE",
    },
    {
      category: "Science · Conference",
      date: "May 2025",
      title: "ICCF-26 Meets in Morioka, Japan",
      body: "The 26th International Conference on Condensed Matter Nuclear Science met in Morioka, Japan in May 2025, with researchers from the U.S., Japan, and Europe presenting work on excess heat, transmutation, and electrochemical experiments. ENG8 International presented EnergiCell progress at the conference. The ICCF series has run every year since 1990 and is the main global gathering for LENR researchers.",
      source: "ICCF-26 Conference, Morioka, Japan, May 26-30, 2025. iccf26.org",
      tag: "Independently Reviewed",
      color: "#2DD4BF",
    },
    {
      category: "Corporate · Japan",
      date: "2023",
      title: "Clean Planet and Tohoku University Report Industrial-Scale LENR Heat Generation",
      body: "Clean Planet Inc. and Tohoku University reported excess heat results from an industrial-scale prototype using condensed cluster nuclear reactions in hydrogen-metal systems. Tohoku University's materials science depth and institutional standing give this data set more weight than most corporate LENR claims.",
      source: "Clean Planet Inc. / Tohoku University, Japan, 2023",
      tag: "Milestone",
      color: "#F97316",
    },
    {
      category: "Corporate · UK",
      date: "2020",
      title: "ENG8 EnergiCell Records COP 1.8 in Independent UK Physicist Test",
      body: "ENG8 International's EnergiCell was independently tested by Dr. Robert Morgan in the UK in 2020, recording a COP of 1.8, meaning 80% more energy out than in. ENG8 calls the underlying mechanism catalyzed fusion. New Fire Energy uses this as the baseline independently verified figure for ENG8's technology.",
      source: "Dr. Robert Morgan, independent physicist, UK, 2020",
      tag: "Breakthrough",
      color: "#22D3EE",
    },
    {
      category: "Corporate · UK",
      date: "Oct 2024",
      title: "ENG8 EnergiCell Achieves Self-Sustaining Operation in Independent Validation",
      body: "ENG8 International commissioned an independent validation of the EnergiCell from Dr. Jean-Paul Biberian, a physicist with over 80 peer-reviewed publications and Editor-in-Chief of the Journal of Condensed Matter Nuclear Science. Biberian confirmed the device achieved self-sustaining operation with net electricity export, reporting COP metrics of 3x to 10x on industrial-scale units. The full report has not been publicly released. Biberian noted the device remains in the research phase.",
      source: "ENG8 International / Dr. Jean-Paul Biberian, independent physicist, October 2024",
      tag: "Breakthrough",
      color: "#22D3EE",
    },
    {
      category: "Science · Nature Journal",
      date: "Aug 2025",
      title: "University of British Columbia Publishes Lattice Fusion Result in Nature",
      body: "A 15-researcher team at the University of British Columbia and Lawrence Berkeley National Laboratory published in Nature documenting the first electrochemical enhancement of deuterium-deuterium fusion reactions in a palladium metal lattice. Led by Professor Curtis Berlinguette, the study confirmed measurable nuclear reaction increases at ambient energies. Peer-reviewed and published in the world's top science journal, it directly validates the core lattice fusion mechanism.",
      source: "Nature, Vol. 644, Issue 8077, p. 640. University of British Columbia / Lawrence Berkeley National Laboratory, August 2025",
      tag: "Independently Reviewed",
      color: "#2DD4BF",
    },
    {
      category: "Science · SRI",
      date: "2017",
      title: "SRI International Tests Brillouin Energy and Verifies COP 1.6",
      body: "SRI International tested Brillouin Energy's Controlled Electron Capture Reaction hydrogen hot tube and reported a verified COP of 1.6. SRI is an independent research institute spun out of Stanford University with no financial relationship to Brillouin. The test remains one of the cleanest third-party verifications in the LENR record.",
      source: "SRI International / Brillouin Energy Corp., 2017",
      tag: "Independently Reviewed",
      color: "#22D3EE",
    },
    {
      category: "History · Foundation",
      date: "Mar 1989",
      title: "Pons and Fleischmann Announce Cold Fusion at University of Utah",
      body: "Electrochemists Stanley Pons and Martin Fleischmann announced evidence of room-temperature nuclear reactions in a palladium-deuterium system at the University of Utah. Early replication attempts were inconsistent and the announcement was controversial. It nonetheless launched a global research effort that has run for 35 years.",
      source: "University of Utah Press Conference, March 23, 1989",
      tag: "Milestone",
      color: "#F97316",
    },
  ];

  const tagColor: Record<string, { bg: string; border: string }> = {
    "Breakthrough": { bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.3)" },
    "Independently Reviewed": { bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)" },
    "Funding":       { bg: "rgba(45,212,191,0.1)",  border: "rgba(45,212,191,0.3)" },
    "Policy":        { bg: "rgba(34,211,238,0.1)",  border: "rgba(34,211,238,0.3)" },
    "Validation":    { bg: "rgba(45,212,191,0.1)",  border: "rgba(45,212,191,0.3)" },
    "Government":    { bg: "rgba(34,211,238,0.1)",  border: "rgba(34,211,238,0.3)" },
    "Market":        { bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.3)" },
    "Milestone":     { bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.3)" },
    "Industry":      { bg: "rgba(45,212,191,0.1)",  border: "rgba(45,212,191,0.3)" },
  };

  return (
    <div style={{ background: "#060E1F", minHeight: "100vh" }}>

      {/* HERO with crystal lattice video */}
      <section style={{ position: "relative", height: "58vh", minHeight: 460, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            filter: "hue-rotate(190deg) saturate(2.2) brightness(0.65)",
            mixBlendMode: "screen", opacity: 0.6, zIndex: 0,
          }}
        >
          <source src="/news-bg.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, background: "rgba(6,14,31,0.58)", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top,rgba(6,14,31,1),transparent)", zIndex: 2 }} />

        <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "80px 24px 0", maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(34,211,238,0.3)", background: "rgba(34,211,238,0.08)", marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22D3EE", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#22D3EE", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Live Research Updates</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,6vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", marginBottom: 16 }}>
            LENR{" "}
            <span style={{ background: "linear-gradient(90deg,#22D3EE,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>News</span>{" "}
            &amp; Breakthroughs
          </h1>
          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>
            The latest independent research, government recognition, and corporate milestones in Low Energy Nuclear Reactions, updated through 2025.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "rgba(34,211,238,0.04)", borderTop: "1px solid rgba(34,211,238,0.1)", borderBottom: "1px solid rgba(34,211,238,0.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 24px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px 52px" }}>
          {[
            { value: "1989",   label: "LENR Research Begins" },
            { value: "30+",    label: "Years of Independent Research" },
            { value: "$10M+",  label: "Federal ARPA-E Grants (2023)" },
            { value: "5+",     label: "Major Institutions Publishing" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, background: "linear-gradient(90deg,#22D3EE,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.78rem", marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS GRID */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 22 }}>
          {news.map((item) => {
            const tc = tagColor[item.tag] || { bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)" };
            return (
              <article key={item.title}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "26px 28px", display: "flex", flexDirection: "column", gap: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: item.color }}>{item.category}</span>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: item.color, fontSize: "0.65rem", fontWeight: 600, padding: "3px 9px", borderRadius: 100 }}>{item.tag}</span>
                    <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.72rem" }}>{item.date}</span>
                  </div>
                </div>
                <h3 style={{ color: "#fff", fontSize: "0.97rem", fontWeight: 700, margin: 0, lineHeight: 1.45 }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.85rem", lineHeight: 1.78, margin: 0, flex: 1 }}>{item.body}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 11, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: item.color, display: "inline-block", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.72rem" }}>Source: {item.source}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 60, textAlign: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.14)", borderRadius: 20, padding: "48px 32px" }}>
          <h2 style={{ color: "#fff", fontSize: "1.55rem", fontWeight: 700, marginBottom: 12 }}>Have Questions About the Science?</h2>
          <p style={{ color: "rgba(255,255,255,0.48)", marginBottom: 28, maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.75, fontSize: "0.92rem" }}>
            Ask ARIA, our AI assistant, any question about LENR technology, the research, or our investment opportunity. Available 24/7 in the bottom-right corner of every page.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/technology" style={{ padding: "12px 26px", borderRadius: 11, background: "linear-gradient(135deg,#22D3EE,#2DD4BF)", color: "#060E1F", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              Explore the Technology
            </a>
            <a href="/investors" style={{ padding: "12px 26px", borderRadius: 11, border: "1px solid rgba(255,255,255,0.18)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
              Become an Investor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
