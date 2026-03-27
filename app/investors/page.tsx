"use client";

import Link from "next/link";

export default function InvestorsPage() {
  return (
    <div style={{ background: "#060E1F", minHeight: "100vh" }}>

      {/* HERO — full-screen video background */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

        {/* Video bg */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
            filter: "saturate(1.2) brightness(0.55)",
            opacity: 0.72, zIndex: 0,
          }}
        >
          <source src="/investors-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(6,14,31,0.55)", zIndex: 1 }} />

        {/* Edge fades */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "20%", height: "100%", background: "linear-gradient(to right,rgba(6,14,31,1) 0%,transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "20%", height: "100%", background: "linear-gradient(to left,rgba(6,14,31,1) 0%,transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top,rgba(6,14,31,1) 0%,transparent 100%)", zIndex: 2, pointerEvents: "none" }} />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 24px", maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 100, border: "1px solid rgba(249,115,22,0.4)", background: "rgba(249,115,22,0.08)", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F97316", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#FCD34D", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Accredited Investors Only</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20, color: "#fff" }}>
            Invest in the{" "}
            <span style={{ background: "linear-gradient(90deg,#22D3EE,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>New Energy</span>{" "}
            Revolution
          </h1>

          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(1rem,2vw,1.25rem)", lineHeight: 1.7, marginBottom: 36, maxWidth: 680, margin: "0 auto 36px" }}>
            New Fire Energy issues the NFE tokenized security, backing LENR companies in their research and development. The extensively reviewed and independently validated science of Low Energy Nuclear Reactions is poised to disrupt a $100 trillion global energy market.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://newfireenergy.investready.com/" target="_blank" rel="noopener noreferrer"
              style={{ padding: "13px 28px", borderRadius: 12, background: "linear-gradient(135deg,#F97316,#EF4444)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(249,115,22,0.4)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Verify Accredited Status
            </a>
            <Link href="/contact?type=investor"
              style={{ padding: "13px 28px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 3, textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>SCROLL</div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.2rem" }}>↓</div>
        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 20, padding: "40px 48px", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>Why Now?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 700, margin: "0 auto", lineHeight: 1.8, fontSize: "1rem" }}>
            A breakthrough 30 years in development is now at the commercialization inflection point. NASA, the U.S. Department of Energy, MIT, and Google have all confirmed the science. New Fire Energy is positioned to bridge the gap from lab demonstrator to global deployment using blockchain smart contracts to fund the companies poised to change the world.
          </p>
        </div>
      </section>

      {/* INVESTMENT THESIS — 3 columns */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {[
            {
              icon: "🌍",
              color: "#22D3EE",
              title: "$100 Trillion Market Horizon",
              body: "As LENR technologies disrupt traditional energy markets, analysts project a valuation surge creating entirely new industries, redefining energy and global trade. This is not incremental improvement; it is a complete paradigm shift.",
              stat: "$100T",
            },
            {
              icon: "🔬",
              color: "#2DD4BF",
              title: "30 Years of Independently Validated Science",
              body: "LENR, also known as Cold Fusion or Lattice Confinement Fusion, has been independently validated by NASA, the U.S. Navy, DOE, MIT, Google, and Physical Review C. The science is established. We are now at the commercialization inflection point. Early investors will own a piece of history.",
              stat: "Proven",
            },
            {
              icon: "⚡",
              color: "#F97316",
              title: "Decentralized Clean Energy",
              body: "Energy that is abundant, nontoxic, and nearly free, available 24/7, disconnected from traditional power grids. LENR modules can run continuously, exporting kW to MW of clean power. Not just a vision; an impending reality.",
              stat: "24/7",
            },
          ].map((card) => (
            <div key={card.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: "2rem" }}>{card.icon}</div>
              <h3 style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>{card.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.75, margin: 0, flex: 1 }}>{card.body}</p>
              <div style={{ color: card.color, fontSize: "1.8rem", fontWeight: 800 }}>{card.stat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTREADY VERIFICATION */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 24, overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(135deg,rgba(34,211,238,0.12),rgba(45,212,191,0.06))", padding: "40px 48px 32px", borderBottom: "1px solid rgba(34,211,238,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(34,211,238,0.15)", border: "1px solid rgba(34,211,238,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>✓</div>
              <div>
                <div style={{ color: "#22D3EE", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>Accredited Investor Verification</div>
                <h2 style={{ color: "#fff", fontSize: "1.7rem", fontWeight: 700, margin: 0 }}>New Fire Energy × InvestReady</h2>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: 0, maxWidth: 760, fontSize: "1rem" }}>
              Thank you for your interest in New Fire Energy (the "Offering"). This offering is only open to accredited investors. The SEC requires independent verification of accredited investor status. To make this as easy as possible, we have partnered with <strong style={{ color: "#22D3EE" }}>InvestReady, Inc.</strong>, an industry-leading third-party Accredited Investor Verification Service.
            </p>
          </div>

          <div style={{ padding: "36px 48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginBottom: 36 }}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "#22D3EE", fontWeight: 700, marginBottom: 12, fontSize: "0.9rem" }}>Your Privacy is Protected</div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
                  The detailed information you provide will NOT be accessible by anyone outside of InvestReady's U.S.-based analysts. New Fire Energy will not have access to your detailed information and will bear the cost of InvestReady's services.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "#2DD4BF", fontWeight: 700, marginBottom: 12, fontSize: "0.9rem" }}>Simple, Fast Process</div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
                  Registration takes only a couple of minutes. InvestReady will guide you through a brief process to confirm your accredited investor status. You can complete this in minutes, or save and return later as needed.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "#F97316", fontWeight: 700, marginBottom: 12, fontSize: "0.9rem" }}>What to Expect</div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
                  This process involves uploading one or more documents proving income ($200K+ individual or $300K+ joint) or net worth ($1M+ excluding primary residence). For full details on InvestReady's security,{" "}
                  <a href="https://newfireenergy.investready.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#22D3EE", textDecoration: "underline" }}>click here</a>.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 16, padding: "32px 24px" }}>
              <h3 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, marginBottom: 10 }}>Ready to Get Started?</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginBottom: 24, maxWidth: 500, margin: "0 auto 24px" }}>
                Register with InvestReady below. Once verified, contact us directly to begin the investor onboarding process.
              </p>
              <a
                href="https://newfireenergy.investready.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 36px", borderRadius: 12, background: "linear-gradient(135deg,#22D3EE,#2DD4BF)", color: "#060E1F", fontWeight: 800, fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 24px rgba(34,211,238,0.35)", letterSpacing: "0.01em" }}>
                Start Verification at InvestReady
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </a>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginTop: 14 }}>
                Questions about the offering? Email{" "}
                <a href="mailto:contact@newfireenergy.com" style={{ color: "#22D3EE" }}>contact@newfireenergy.com</a>{" "}
                or call <a href="tel:+18137781209" style={{ color: "#22D3EE" }}>813-778-1209</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO INVEST — 3 steps */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ color: "#22D3EE", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>How to Invest</div>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, margin: 0 }}>Three Steps to Get Started</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginBottom: 32 }}>
          {[
            { step: "01", title: "Verify Accreditation", body: "Complete accredited investor verification through InvestReady Inc., our trusted third-party verification partner.", cta: "Start Verification", href: "https://newfireenergy.investready.com/", external: true },
            { step: "02", title: "Request Materials", body: "Contact us to receive our investor deck, white papers, and access to the data room for verified investors.", cta: "Request Materials", href: "/contact?type=investor", external: false },
            { step: "03", title: "Schedule a Call", body: "Schedule a direct call with CEO Steve Previch to discuss the opportunity and have your questions answered.", cta: "Schedule Call", href: "/contact?type=investor", external: false },
          ].map((item) => (
            <div key={item.step} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ fontSize: "3rem", fontWeight: 800, background: "linear-gradient(90deg,#22D3EE,#2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.4 }}>{item.step}</div>
              <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0, flex: 1 }}>{item.body}</p>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                  {item.cta} →
                </a>
              ) : (
                <Link href={item.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                  {item.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.15)", borderRadius: 16, padding: "24px 32px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div>
            <p style={{ color: "#fff", fontWeight: 600, margin: "0 0 4px" }}>Questions? Contact our investor relations team directly.</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", margin: 0 }}>We respond within 24 to 48 hours to all verified investor inquiries.</p>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href="mailto:contact@newfireenergy.com" style={{ color: "#22D3EE", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>✉ contact@newfireenergy.com</a>
            <a href="tel:+18137781209" style={{ color: "#22D3EE", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>📞 813-778-1209</a>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL VALIDATION */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "40px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 8 }}>Validated by the World's Leading Institutions</h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", margin: 0 }}>LENR is confirmed science, not speculation</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32 }}>
            {[
              { org: "NASA", detail: "Lattice Confinement Fusion research" },
              { org: "U.S. Dept. of Energy", detail: "LENR program review and funding" },
              { org: "MIT", detail: "Cold fusion experiments confirmed" },
              { org: "Google", detail: "$10M+ LENR research program" },
              { org: "U.S. Navy", detail: "SPAWAR LENR research" },
              { org: "Physical Review C", detail: "Independent scientific publications" },
            ].map((item) => (
              <div key={item.org} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, marginBottom: 4, justifyContent: "center" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22D3EE", display: "inline-block" }} />
                  {item.org}
                </div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK FACTORS */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          ⚠️ Risk Factors
        </h2>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "28px 32px" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginBottom: 16 }}>
            Investing in early-stage companies involves significant risk. This is not a securities offering. Please consider the following:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Technology risk: LENR is an emerging technology still advancing toward full commercial scale",
              "Regulatory: Novel energy technology may face uncertain regulatory pathways as commercialization accelerates",
              "Scale-up: Lab demonstrator results may not perfectly translate to commercial-scale deployment",
              "Market adoption: Industrial and utility customers may be slow to adopt new paradigm energy technology",
              "Competition: Established energy incumbents and well-funded fusion startups competing for market share",
            ].map((risk) => (
              <li key={risk} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#F97316", marginTop: 2 }}>•</span>
                {risk}
              </li>
            ))}
          </ul>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            This page does not constitute a securities offering or solicitation. Investment opportunities are available only to accredited investors as defined by SEC Regulation D Rule 501.
          </p>
        </div>
      </section>

      {/* INVESTOR FAQ */}
      <section style={{ padding: "0 24px 80px", maxWidth: 860, margin: "0 auto" }}>
        <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700, textAlign: "center", marginBottom: 40 }}>Investor FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { q: "Who can invest?", a: "This opportunity is limited to accredited investors as defined by SEC Rule 501 of Regulation D. You must meet income ($200K+ individual or $300K+ joint) or net worth ($1M+ excluding primary residence) thresholds. Verification is handled through InvestReady Inc." },
            { q: "How do I verify my accredited investor status?", a: "We partner with InvestReady Inc. for accredited investor verification. Visit newfireenergy.investready.com/ to complete the verification process. Once verified, contact us at contact@newfireenergy.com or call 813-778-1209 to begin the investor onboarding process." },
            { q: "What is the investment structure?", a: "New Fire Energy uses blockchain smart contracts and token-backed funding to bridge lab demonstrators to commercialization. This model provides transparency, potential liquidity options, and direct participation in the energy technology ecosystem. Contact us for full details on the current investment structure." },
            { q: "What is the exit strategy?", a: "We anticipate multiple paths to liquidity as LENR technologies reach commercialization. These include strategic partnerships with global energy companies, licensing deals, and potential token liquidity as the blockchain-based funding model matures. The technology commercialization timeline is accelerating." },
            { q: "How do I get in touch?", a: "Email us at contact@newfireenergy.com or call 813-778-1209. Our office is located at 30 N. Gould St. Suite R, Sheridan, Wyoming 82801. We respond to all investor inquiries within 24 to 48 hours." },
          ].map((item) => (
            <details key={item.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, cursor: "pointer" }}>
              <summary style={{ padding: "20px 24px", color: "#fff", fontWeight: 600, fontSize: "0.95rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {item.q}
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>+</span>
              </summary>
              <div style={{ padding: "0 24px 20px", color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.75, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, marginTop: 0 }}>
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "0 24px 100px", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ background: "linear-gradient(#060E1F,#060E1F) padding-box, linear-gradient(135deg,rgba(34,211,238,0.5),rgba(45,212,191,0.3)) border-box", border: "1px solid transparent", borderRadius: 24, padding: "60px 32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 100, border: "1px solid rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.08)", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F97316", display: "inline-block" }} />
            <span style={{ color: "#FCD34D", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Accredited Investors Only</span>
          </div>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 700, marginBottom: 16 }}>Ready to Be Part of the New Energy Revolution?</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 32, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Schedule a call with Steve Previch, CEO, to discuss the LENR opportunity and learn how New Fire Energy is commercializing the technology that will change the world.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://newfireenergy.investready.com/" target="_blank" rel="noopener noreferrer"
              style={{ padding: "13px 28px", borderRadius: 12, background: "linear-gradient(135deg,#F97316,#EF4444)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(249,115,22,0.4)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Verify Accredited Status →
            </a>
            <Link href="/contact?type=investor"
              style={{ padding: "13px 28px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Schedule Investor Call
            </Link>
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem", marginTop: 24 }}>
            Questions? Email{" "}
            <a href="mailto:contact@newfireenergy.com" style={{ color: "rgba(34,211,238,0.7)" }}>contact@newfireenergy.com</a>{" "}
            or call{" "}
            <a href="tel:+18137781209" style={{ color: "rgba(34,211,238,0.7)" }}>813-778-1209</a>
          </p>
        </div>
      </section>

    </div>
  );
}
