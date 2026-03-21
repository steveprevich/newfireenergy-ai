"use client";

export default function NewsPage() {
  const news = [
    {
      category: "Government",
      date: "Nov 2023",
      title: "U.S. Dept. of Energy Releases LENR Program Review",
      body: "The Department of Energy published an updated program review recognizing Low Energy Nuclear Reactions as a legitimate area of scientific inquiry, recommending continued research funding. This marks a significant shift in official U.S. energy policy toward LENR.",
      source: "U.S. Dept. of Energy",
      tag: "Policy",
      color: "#22D3EE",
    },
    {
      category: "Corporate",
      date: "2024",
      title: "Leonardo Corp QLED Module Goes Live 24/7 on YouTube",
      body: "Andrea Rossi's Leonardo Corporation began a continuous live demonstration of the QLED Self-Sustaining Module on YouTube, showing the device running autonomously around the clock. This represents a significant commercialization milestone for LENR-based technology.",
      source: "Leonardo Corp",
      tag: "Breakthrough",
      color: "#F97316",
    },
    {
      category: "Research",
      date: "2023",
      title: "ARPA-E Awards $10M to LENR Research Teams",
      body: "The U.S. Advanced Research Projects Agency-Energy awarded significant funding to multiple LENR research groups, signaling mainstream federal recognition. Projects focus on excess heat reproducibility and lattice confinement mechanisms.",
      source: "ARPA-E / DOE",
      tag: "Funding",
      color: "#2DD4BF",
    },
    {
      category: "Science",
      date: "2021",
      title: "NASA Publishes Lattice Confinement Fusion Research",
      body: "NASA Glenn Research Center published peer-reviewed research confirming nuclear reactions occurring within metal lattice structures at low energies. The paper, authored by NASA scientists, provides strong institutional validation for the core LENR mechanism.",
      source: "NASA Glenn Research Center",
      tag: "Peer-Reviewed",
      color: "#22D3EE",
    },
    {
      category: "Corporate",
      date: "2023",
      title: "ENG8 International Demonstrates EnergiCell CoP Results",
      body: "ENG8 International, a portfolio company in the LENR space, reported Coefficient of Performance results in laboratory conditions using their EnergiCell technology. The company targets CoP 5-10 for minimum viable commercial product, with lab results showing higher COP figures.",
      source: "ENG8 International",
      tag: "Portfolio",
      color: "#F97316",
    },
    {
      category: "Science",
      date: "2019-2023",
      title: "Google-Funded LENR Research Confirms Excess Heat",
      body: "A multi-year, $10M+ Google-funded research collaboration at leading universities produced peer-reviewed results confirming LENR excess heat phenomena. Results published in respected scientific journals further validate the science that New Fire Energy is built upon.",
      source: "Google / Nature",
      tag: "Validation",
      color: "#2DD4BF",
    },
    {
      category: "Policy",
      date: "2022",
      title: "U.S. Navy SPAWAR LENR Research Declassified",
      body: "Additional U.S. Navy SPAWAR LENR research results entered the public domain, confirming that the Navy has been actively researching low energy nuclear reactions for decades. The findings include confirmation of excess heat and nuclear signatures in electrolytic experiments.",
      source: "U.S. Navy SPAWAR",
      tag: "Government",
      color: "#22D3EE",
    },
    {
      category: "Industry",
      date: "2025",
      title: "Global Energy Investment Shifts Toward Alternative Nuclear",
      body: "With hot fusion (ITER) facing continued delays and cost overruns, global investment attention is increasingly shifting toward alternative nuclear approaches including LENR and lattice confinement fusion. Multiple sovereign wealth funds and family offices have begun exploratory positions.",
      source: "Energy Industry Reports",
      tag: "Market",
      color: "#2DD4BF",
    },
    {
      category: "Research",
      date: "2024",
      title: "Physical Review C Publishes New LENR Mechanism Papers",
      body: "Physical Review C, a leading peer-reviewed physics journal, published additional papers on LENR nuclear mechanisms, further cementing the science in mainstream academia. The papers focus on quantum tunneling and phonon-assisted nuclear reactions within metal lattice structures.",
      source: "Physical Review C / APS",
      tag: "Peer-Reviewed",
      color: "#F97316",
    },
  ];

  const tagColors: Record<string, string> = {
    "Breakthrough": "rgba(249,115,22,0.15)",
    "Peer-Reviewed": "rgba(34,211,238,0.12)",
    "Funding": "rgba(45,212,191,0.12)",
    "Policy": "rgba(34,211,238,0.12)",
    "Validation": "rgba(45,212,191,0.12)",
    "Portfolio": "rgba(249,115,22,0.15)",
    "Government": "rgba(34,211,238,0.12)",
    "Market": "rgba(45,212,191,0.12)",
  };

  return (
    <div style={{ background: "#060E1F", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ position: "relative", height: "60vh", minHeight: 480, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.play().catch(() => {});
              el.addEventListener("timeupdate", () => {
                if (el.duration && el.currentTime > el.duration - 0.3) el.currentTime = 0;
              });
            }
          }}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            filter: "hue-rotate(195deg) saturate(2) brightness(0.6)",
            mixBlendMode: "screen", opacity: 0.55, zIndex: 0,
          }}
        >
          <source src="/news-bg.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, background: "rgba(6,14,31,0.6)", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top,rgba(6,14,31,1) 0%,transparent 100%)", zIndex: 2 }} />

        <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 24px", maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(34,211,238,0.3)", background: "rgba(34,211,238,0.08)", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22D3EE", display: "inline-block" }} />
            <span style={{ color: "#22D3EE", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Science in Progress</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem,6vw,4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", marginBottom: 16 }}>
            LENR{" "}
            <span style={{ background: "linear-gradient(90deg,#22D3EE,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>News</span>{" "}
            &amp; Research
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            The latest developments in Low Energy Nuclear Reactions, institutional validation, and the global commercialization of clean energy technology.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "rgba(34,211,238,0.05)", borderTop: "1px solid rgba(34,211,238,0.12)", borderBottom: "1px solid rgba(34,211,238,0.12)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 48 }}>
          {[
            { value: "3,000+", label: "Peer-Reviewed Experiments" },
            { value: "30+", label: "Years of Research" },
            { value: "6", label: "Major Institutions Validating" },
            { value: "$10M+", label: "Google Research Investment" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, background: "linear-gradient(90deg,#22D3EE,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS GRID */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "70px 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 24 }}>
          {news.map((item) => (
            <article key={item.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", gap: 14, transition: "all 0.2s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: item.color }}>{item.category}</span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ background: tagColors[item.tag] || "rgba(255,255,255,0.08)", border: `1px solid ${item.color}30`, color: item.color, fontSize: "0.68rem", fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{item.tag}</span>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>{item.date}</span>
                </div>
              </div>
              <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, margin: 0, lineHeight: 1.45 }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.75, margin: 0, flex: 1 }}>{item.body}</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: item.color, display: "inline-block" }} />
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>Source: {item.source}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, textAlign: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: 20, padding: "48px 32px" }}>
          <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700, marginBottom: 12 }}>Want to Stay at the Forefront?</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28, maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Ask NOVA, our AI assistant, any question about LENR technology, the science, or our investment opportunity. Available 24/7 in the bottom-right corner.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/technology" style={{ padding: "12px 24px", borderRadius: 12, background: "linear-gradient(135deg,#22D3EE,#2DD4BF)", color: "#060E1F", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              Explore the Technology
            </a>
            <a href="/investors" style={{ padding: "12px 24px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
              Become an Investor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
