import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_COMPANIES } from "@/lib/portfolio-data";
import { ArrowLeft, CheckCircle, Circle, Clock } from "lucide-react";

export async function generateStaticParams() {
  return PORTFOLIO_COMPANIES.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const co = PORTFOLIO_COMPANIES.find(c => c.slug === slug);
  if (!co) return { title: "Not Found" };
  return {
    title: `${co.name} | New Fire Energy Portfolio`,
    description: co.description,
  };
}

export default async function PortfolioCompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const co = PORTFOLIO_COMPANIES.find(c => c.slug === slug);
  if (!co) notFound();

  const statusIcon = (status: string) => {
    if (status === "complete") return <CheckCircle size={16} style={{ color: "#2DD4BF", flexShrink: 0 }} />;
    if (status === "active") return <Circle size={16} style={{ color: "#00B8E6", flexShrink: 0 }} />;
    return <Clock size={16} style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0 }} />;
  };

  return (
    <div style={{ background: "#060E1F", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 100px" }}>

        {/* Back */}
        <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", textDecoration: "none", marginBottom: 40, transition: "color 0.2s" }}>
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>

        {/* Hero */}
        <div style={{
          background: `linear-gradient(135deg, ${co.accentColor}10 0%, rgba(6,14,31,0) 60%)`,
          border: `1px solid ${co.accentColor}25`,
          borderRadius: 24,
          padding: "48px 44px",
          marginBottom: 40,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -60, right: -60, width: 300, height: 300,
            background: `radial-gradient(circle, ${co.accentColor}15 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />
          <div style={{ fontSize: "0.7rem", color: co.accentColor, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
            {co.location} · Founded {co.founded}
          </div>
          <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#fff", fontWeight: 700, marginBottom: 12 }}>
            {co.name}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", fontStyle: "italic", marginBottom: 20 }}>
            {co.tagline}
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 680 }}>
            {co.description}
          </p>
        </div>

        {/* Mechanism */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 36px", marginBottom: 32 }}>
          <h2 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Reaction Mechanism</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.85 }}>{co.mechanism}</p>
        </div>

        {/* Tech Specs */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 36px", marginBottom: 32 }}>
          <h2 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Technical Specifications</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {co.techSpecs.map(spec => (
              <div key={spec.label} style={{ borderLeft: `2px solid ${co.accentColor}40`, paddingLeft: 14 }}>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{spec.label}</div>
                <div style={{ color: "#fff", fontSize: "0.88rem", fontWeight: 500 }}>{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* COP Records */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 36px", marginBottom: 32 }}>
          <h2 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Independent Test Results</h2>
          {co.copRecords.map((r, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 0",
              borderBottom: i < co.copRecords.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              gap: 16, flexWrap: "wrap",
            }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600, marginBottom: 4 }}>{r.tester}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>{r.source}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>{r.year}</div>
                <div style={{
                  background: co.accentColor + "18",
                  border: `1px solid ${co.accentColor}40`,
                  borderRadius: 10, padding: "8px 18px",
                  color: co.accentColor, fontWeight: 700, fontSize: "1.1rem",
                }}>
                  COP {r.cop.toFixed(1)}
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 16, fontSize: "0.68rem", color: "rgba(255,255,255,0.2)" }}>
            COP = Coefficient of Performance. COP 1.0 = break-even. COP 1.8 = 80% more energy output than input.
            All figures sourced from independent third-party physicist reviews.
          </div>
        </div>

        {/* Roadmap */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 36px", marginBottom: 40 }}>
          <h2 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Development Roadmap</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {co.roadmap.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, position: "relative" }}>
                {/* Timeline line */}
                {i < co.roadmap.length - 1 && (
                  <div style={{
                    position: "absolute", left: 7, top: 20, bottom: 0, width: 2,
                    background: item.status === "complete" ? co.accentColor + "40" : "rgba(255,255,255,0.07)",
                  }} />
                )}
                <div style={{ paddingTop: 2, flexShrink: 0, zIndex: 1 }}>
                  {statusIcon(item.status)}
                </div>
                <div style={{ paddingBottom: 28 }}>
                  <div style={{ color: co.accentColor, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>{item.year}</div>
                  <div style={{
                    color: item.status === "active" ? "#fff" : item.status === "complete" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)",
                    fontSize: "0.88rem", lineHeight: 1.6,
                  }}>{item.milestone}</div>
                  {item.status === "active" && (
                    <div style={{ display: "inline-block", marginTop: 6, fontSize: "0.65rem", color: co.accentColor, background: co.accentColor + "15", border: `1px solid ${co.accentColor}30`, borderRadius: 6, padding: "2px 8px" }}>
                      In Progress
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/investors" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, #00B8E6, #2DD4BF)",
            color: "#060E1F", fontWeight: 700, fontSize: "0.9rem",
            padding: "14px 32px", borderRadius: 12, textDecoration: "none",
            transition: "opacity 0.2s",
          }}>
            Invest in This Portfolio →
          </Link>
        </div>
      </div>
    </div>
  );
}
