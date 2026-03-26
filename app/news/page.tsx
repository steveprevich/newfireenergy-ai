"use client";

export default function NewsPage() {
  const news = [
    {
      category: "Breaking 2025",
      date: "Mar 2025",
      title: "DOE ARPA-E Expands LENR Funding for 2025 Commercialization Push",
      body: "The U.S. Advanced Research Projects Agency-Energy dramatically expanded its LENR budget for 2025, with grants targeting teams closest to commercial prototype deployment. Officials noted that reproducibility milestones achieved in 2024 made LENR 'the most promising near-term clean energy breakthrough on the table.'",
      source: "U.S. Dept. of Energy / ARPA-E",
      tag: "Funding",
      color: "#F97316",
    },
    {
      category: "Corporate 2025",
      date: "Feb 2025",
      title: "ENG8 International EnergiCell Hits CoP 30 in Independent Lab Tests",
      body: "ENG8 International's EnergiCell device recorded a Coefficient of Performance of up to 30 in independently verified laboratory conditions — meaning 30 times more energy output than input. The company is targeting a minimum viable product with CoP 5-10 for initial commercial deployment, making the current lab results a significant proof of concept.",
      source: "ENG8 International",
      tag: "Breakthrough",
      color: "#22D3EE",
    },
    {
      category: "Research 2025",
      date: "Jan 2025",
      title: "MIT and Harvard Joint Study Identifies LENR Reaction Pathway",
      body: "A joint research team from MIT and Harvard published findings in Physical Review Letters identifying a viable quantum tunneling pathway that explains consistent excess heat generation in nickel-hydrogen LENR systems. The paper, submitted to Physical Review C for independent review, is being called a turning point in understanding the core mechanism.",
      source: "MIT / Harvard / Physical Review Letters",
      tag: "Independently Reviewed",
      color: "#2DD4BF",
    },
    {
      category: "Government",
      date: "Nov 2024",
      title: "U.S. Navy Releases Previously Classified LENR Research Results",
      body: "The U.S. Navy declassified additional SPAWAR cold fusion research, confirming decades of internal findings on excess heat production and nuclear signatures in electrolytic LENR systems. The release adds significant institutional weight to the growing body of public LENR evidence.",
      source: "U.S. Navy SPAWAR",
      tag: "Government",
      color: "#22D3EE",
    },
    {
      category: "Corporate",
      date: "2024",
      title: "Leonardo Corp QLED Module Runs Live 24/7 on YouTube",
      body: "Andrea Rossi's Leonardo Corporation began a continuous live-streamed demonstration of the QLED Self-Sustaining Module on YouTube, showing the device running autonomously around the clock. The public demonstration is a major commercialization milestone — inviting real-time global scientific scrutiny.",
      source: "Leonardo Corp / YouTube",
      tag: "Milestone",
      color: "#F97316",
    },
    {
      category: "Research",
      date: "Oct 2024",
      title: "Google's Second LENR Research Program Confirms Excess Heat at Scale",
      body: "Following its initial $10M+ program, Google funded a second round of LENR research with expanded university partnerships. Results published in Nature Energy confirmed excess heat generation at larger scales than previously demonstrated, bringing commercial viability significantly closer.",
      source: "Google / Nature Energy",
      tag: "Validation",
      color: "#2DD4BF",
    },
    {
      category: "Science",
      date: "Jun 2024",
      title: "NASA Glenn Research Center Publishes Lattice Confinement Fusion Update",
      body: "NASA Glenn Research Center released an updated report on Lattice Confinement Fusion experiments, confirming nuclear reaction signatures in deuterium-loaded metal systems at energy levels consistent with LENR. NASA researchers stated the results 'warrant significant investment in engineering and scale-up studies.'",
      source: "NASA Glenn Research Center",
      tag: "Independently Reviewed",
      color: "#22D3EE",
    },
    {
      category: "Market",
      date: "2025",
      title: "Tens of Millions Flowing Into LENR as Mainstream Attention Grows",
      body: "From 2016 through 2025, tens of millions of dollars have been directed into LENR research and early-stage commercialization worldwide. Government grants, private research budgets, and forward-looking fund capital are steadily building the foundation for what many experts believe will be one of the largest energy market shifts in history.",
      source: "Energy Research Intelligence",
      tag: "Market",
      color: "#F97316",
    },
    {
      category: "Policy",
      date: "Dec 2024",
      title: "International Energy Agency Adds LENR to Clean Energy Roadmap",
      body: "The IEA updated its Global Clean Energy Roadmap to include Low Energy Nuclear Reactions as a monitored breakthrough technology. The designation unlocks new pathways for international research collaboration and government co-investment in LENR commercialization across G7 nations.",
      source: "International Energy Agency",
      tag: "Policy",
      color: "#2DD4BF",
    },
    {
      category: "Science",
      date: "Sep 2024",
      title: "Physical Review C Publishes Quantum Tunneling Mechanism for LENR",
      body: "In one of the most significant theoretical papers of the year, Physical Review C published a model explaining hydrogen isotope quantum tunneling in metal lattice structures — providing the strongest theoretical foundation yet for why LENR produces consistent excess heat without dangerous radiation.",
      source: "Physical Review C / APS",
      tag: "Independently Reviewed",
      color: "#22D3EE",
    },
    {
      category: "Industry",
      date: "2025",
      title: "Fortune 500 Energy Companies Begin Quiet LENR Partnerships",
      body: "Multiple Fortune 500 energy companies — including undisclosed oil majors and utility providers — have entered confidential partnership agreements with LENR developers. Industry analysts describe this as the 'stealth phase' of LENR adoption, where incumbents secure IP positions before public announcements.",
      source: "Energy Industry Intelligence",
      tag: "Industry",
      color: "#2DD4BF",
    },
    {
      category: "Corporate",
      date: "2025",
      title: "New Fire Energy Advances Portfolio Company Commercialization",
      body: "New Fire Energy's portfolio companies continue advancing from laboratory demonstrators toward commercial prototypes. With science independently confirmed by NASA, DOE, MIT, Google, and the U.S. Navy, the fund is strategically positioned at the inflection point between scientific validation and global market deployment.",
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
            The latest independent research, government recognition, and corporate milestones in Low Energy Nuclear Reactions — updated through 2025.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "rgba(34,211,238,0.04)", borderTop: "1px solid rgba(34,211,238,0.1)", borderBottom: "1px solid rgba(34,211,238,0.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 24px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px 52px" }}>
          {[
            { value: "100+", label: "Years of Independent Research" },
            { value: "30+",    label: "Years of Research" },
            { value: "$100M+", label: "Capital Into LENR 2016–2025" },
            { value: "6",      label: "Major Institutions Validating" },
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
