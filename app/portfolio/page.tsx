import Link from "next/link";
import type { Metadata } from "next";
import { PORTFOLIO_COMPANIES } from "@/lib/portfolio-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio Companies | New Fire Energy",
  description: "Deep dives into New Fire Energy's LENR portfolio: Brillouin, ENG8, Clean Planet, and Prometheus Reactor.",
};

export default function PortfolioPage() {
  return (
    <div style={{ background: "#060E1F", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: "0.72rem", color: "rgba(0,184,230,0.7)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            LENR / ZPE Investment Portfolio
          </div>
          <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff", fontWeight: 700, marginBottom: 20 }}>
            Portfolio Companies
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 600, margin: "0 auto" }}>
            Four independent LENR technology developers, each pursuing a distinct reaction mechanism with independent third-party physicist reviews.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 24 }}>
          {PORTFOLIO_COMPANIES.map((co) => {
            const bestCOP = Math.max(...co.copRecords.map(r => r.cop));
            return (
              <Link key={co.slug} href={`/portfolio/${co.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${co.accentColor}22`,
                  borderRadius: 20,
                  padding: "36px 32px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = co.accentColor + "55";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = co.accentColor + "22";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Accent glow */}
                  <div style={{
                    position: "absolute", top: 0, right: 0, width: 200, height: 200,
                    background: `radial-gradient(circle at 100% 0%, ${co.accentColor}12 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: co.accentColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>
                        {co.location} · Est. {co.founded}
                      </div>
                      <h2 style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, fontFamily: "var(--font-display, serif)", margin: 0 }}>
                        {co.name}
                      </h2>
                    </div>
                    <div style={{
                      background: co.accentColor + "18",
                      border: `1px solid ${co.accentColor}40`,
                      borderRadius: 10,
                      padding: "6px 12px",
                      textAlign: "center",
                      flexShrink: 0,
                      marginLeft: 16,
                    }}>
                      <div style={{ color: co.accentColor, fontWeight: 700, fontSize: "1rem" }}>COP {bestCOP.toFixed(1)}</div>
                      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Verified</div>
                    </div>
                  </div>

                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", marginBottom: 16, fontStyle: "italic" }}>
                    {co.tagline}
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 24 }}>
                    {co.description.substring(0, 140)}...
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: co.accentColor, fontSize: "0.82rem", fontWeight: 600 }}>
                    Technical Deep Dive <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
