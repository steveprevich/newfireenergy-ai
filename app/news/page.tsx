"use client";

export default function NewsPage() {
  const news = [
    {
      category: "Government · Funding",
      date: "Feb 2023",
      title: "ARPA-E Awards $10M to Eight Institutions to Study LENR",
      body: "The U.S. Department of Energy's Advanced Research Projects Agency-Energy announced $10 million in federal grants to eight research institutions, including MIT, Stanford, Texas Tech, and the University of Michigan, to determine whether Low Energy Nuclear Reactions could serve as a transformative carbon-free energy source. It marked the first direct federal LENR funding in decades and signaled a significant shift in institutional attention toward the field.",
      source: "U.S. Dept. of Energy / ARPA-E — arpa-e.energy.gov, February 2023",
      tag: "Funding",
      color: "#F97316",
    },
    {
      category: "Science · NASA",
      date: "2020",
      title: "NASA Glenn Research Center Publishes Lattice Confinement Fusion in Physical Review C",
      body: "NASA Glenn Research Center scientists published peer-reviewed findings in Physical Review C confirming nuclear reaction signatures in deuterium-loaded metal lattice systems. The paper, authored by Theresa Benyo and colleagues, documented evidence of nuclear reactions occurring at energies far below those required in conventional hot fusion, lending significant institutional credibility to lattice confinement as a legitimate nuclear process.",
      source: "NASA Glenn Research Center — Physical Review C, Vol. 101, 2020",
      tag: "Independently Reviewed",
      color: "#22D3EE",
    },
    {
      category: "Science · MIT",
      date: "2024",
      title: "Peter Hagelstein Publishes Updated LENR Mechanism Paper at MIT",
      body: "MIT physicist Peter Hagelstein, one of the longest-standing academic researchers in the field, published updated theoretical work on solid-state fusion mechanisms through MIT's Research Laboratory of Electronics. Hagelstein has maintained a rigorous academic research program on LENR for over three decades, and his continued publication at MIT represents one of the most credible ongoing institutional research efforts in the field.",
      source: "MIT Research Laboratory of Electronics / IOPscience, 2024",
      tag: "Independently Reviewed",
      color: "#2DD4BF",
    },
    {
      category: "Science · U.S. Navy",
      date: "2023",
      title: "Naval Surface Warfare Center Continues Multi-Lab LENR Research Initiative",
      body: "The U.S. Naval Surface Warfare Center continued its multi-laboratory initiative investigating LENR phenomena, building on decades of Navy research originating with the SPAWAR Systems Center Pacific program. The Navy's sustained institutional interest, spanning from the early 1990s through the present, represents one of the longest-running government LENR research commitments in the world.",
      source: "U.S. Naval Surface Warfare Center, 2023",
      tag: "Government",
      color: "#22D3EE",
    },
    {
      category: "Science · Conference",
      date: "Sep 2022",
      title: "ICCF-24 Held in Mountain View, California — Growing International Participation",
      body: "The 24th International Conference on Condensed Matter Nuclear Science was held in Mountain View, California, drawing researchers from the U.S., Japan, Italy, and Russia. Presentations covered excess heat reproducibility, helium-4 production correlations, and theoretical models for lattice-assisted nuclear reactions. The conference series, running since 1990, represents the primary peer forum for independent LENR researchers worldwide.",
      source: "ICCF-24 Conference Proceedings, Mountain View, CA, September 2022",
      tag: "Independently Reviewed",
      color: "#2DD4BF",
    },
    {
      category: "Corporate · Japan",
      date: "2023",
      title: "Clean Planet and Tohoku University Report Industrial-Scale LENR Heat Generation",
      body: "Clean Planet Inc., in collaboration with Tohoku University in Japan, reported results from an industrial-scale prototype generating excess heat through condensed cluster nuclear reactions in hydrogen-metal systems. The collaboration represents one of the most institutionally credible industrial LENR demonstrations to date, supported by a major Japanese research university with decades of materials science expertise.",
      source: "Clean Planet Inc. / Tohoku University, Japan, 2023",
      tag: "Milestone",
      color: "#F97316",
    },
    {
      category: "Corporate · UK",
      date: "2020",
      title: "ENG8 EnergiCell Records COP 1.8 in Independent UK Physicist Test",
      body: "ENG8 International's EnergiCell device was independently tested by Dr. Robert Morgan in the UK, recording a Coefficient of Performance of 1.8, meaning 80% more energy output than electrical input. ENG8 describes the underlying mechanism as catalyzed fusion, a process the company positions within the broader LENR research framework. The test represents the conservative, independently verified figure used by New Fire Energy in its research materials.",
      source: "Dr. Robert Morgan, independent physicist, UK, 2020",
      tag: "Breakthrough",
      color: "#22D3EE",
    },
    {
      category: "Science · Italy",
      date: "2011–present",
      title: "ENEA Italy Publishes Repeated Excess Heat and Helium-4 Findings",
      body: "Italy's National Agency for New Technologies, Energy and Sustainable Economic Development (ENEA) has published multiple independent studies documenting excess heat and helium-4 production in LENR electrolytic systems. Researcher Francesco Celani and colleagues have produced some of the most reproducible excess heat data in the field, with ENEA representing one of Europe's most consistent institutional contributors to LENR research.",
      source: "ENEA — Agenzia nazionale per le nuove tecnologie, l'energia e lo sviluppo economico sostenibile, Italy",
      tag: "Independently Reviewed",
      color: "#2DD4BF",
    },
    {
      category: "Science · SRI",
      date: "2017",
      title: "SRI International Independently Tests Brillouin Energy — COP 1.6 Verified",
      body: "SRI International, the independent research institute spun out of Stanford University, conducted independent testing of Brillouin Energy's Controlled Electron Capture Reaction (CECR) hydrogen hot tube technology and reported a verified Coefficient of Performance of 1.6. SRI's institutional credibility and independence from Brillouin make this one of the most rigorously documented third-party LENR test results available.",
      source: "SRI International / Brillouin Energy Corp., 2017",
      tag: "Independently Reviewed",
      color: "#22D3EE",
    },
    {
      category: "History · Foundation",
      date: "Mar 1989",
      title: "Pons and Fleischmann Announce Cold Fusion at University of Utah",
      body: "Electrochemists Stanley Pons and Martin Fleischmann of the University of Utah announced evidence of nuclear reactions occurring at room temperature in a palladium-deuterium electrolytic system, producing excess heat and neutron emissions. Though the announcement was controversial and early replication attempts were inconsistent, it launched a global research effort that continues to this day. The 1989 announcement is widely regarded as the founding event of the modern LENR research field.",
      source: "University of Utah Press Conference, March 23, 1989",
      tag: "Milestone",
      color: "#F97316",
    },
    {
      category: "Portfolio",
      date: "2025",
      title: "New Fire Energy Positions Fund at LENR Commercialization Inflection Point",
      body: "New Fire Energy's portfolio companies, spanning catalyzed fusion, controlled electron capture, and lattice confinement approaches, continue advancing from laboratory demonstrators toward commercial prototypes. With research independently studied and published by NASA, the U.S. Navy, DOE, MIT, and ENEA Italy, the fund is positioned at the intersection of three decades of scientific development and an emerging commercial energy market.",
      source: "New Fire Energy Inc.",
      tag: "Portfolio",
      color: "#F97316",
    },
  ];

  const tagColor: Record<string, { bg: string; border: string }> = {
    "Breakthrough": { bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.3)" },
    "Independently Reviewed": { bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)" },
    "Funding":       { bg: "rgba(45,212,191,0.1)",  border: "rgba(45,212,191,0.3)" },
    "Policy":        { bg: "rgba(34,211,238,0.1)",  border: "rgba(34,211,238,0.3)" },
    "Validation":    { bg: "rgba(45,212,191,0.1)",  border: "rgba(45,212,191,0.3)" },
    "Portfolio":     { bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.3)" },
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
            Ask NOVA, our AI assistant, any question about LENR technology, the research, or our investment opportunity. Available 24/7 in the bottom-right corner of every page.
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
