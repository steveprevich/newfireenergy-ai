import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIAssistant from "@/components/AIAssistant";
import FireLogo from "@/components/FireLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Fire Energy | Private Equity Fund · Advanced Energy Technology",
  description: "New Fire Energy Inc. issues the LENR-backed token (NFE), backing LENR companies in their research and development toward clean energy commercialization. Accredited investors only. Rule 506(c) Reg D.",
};

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "ZPE / LENR",  href: "/technology" },
  { label: "LENR News",   href: "/news" },
  { label: "White Papers", href: "/whitepaper" },
  { label: "Board",        href: "/team" },
  { label: "Contact Us",  href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* ── FIXED NAVIGATION ── */}
        <header style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 68,
          background: "rgba(6,14,31,0.80)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,184,230,0.12)",
        }}>

          {/* Logo */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <FireLogo size={42} />
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                New Fire Energy
              </div>
              <div style={{ color: "rgba(0,184,230,0.65)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Private Equity Fund
              </div>
            </div>
          </a>

          {/* Nav links — hidden on small screens via CSS */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <a href="/investors" style={{
            padding: "9px 20px",
            borderRadius: 9,
            background: "linear-gradient(135deg, #F97316, #EF4444)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.82rem",
            textDecoration: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 3px 14px rgba(249,115,22,0.35)",
            letterSpacing: "0.01em",
          }}>
            Request Access
          </a>
        </header>

        {/* Page content */}
        {children}
        <AIAssistant />

        {/* ── FOOTER ── */}
        <footer style={{ background: "#040B18", borderTop: "1px solid rgba(0,184,230,0.12)", padding: "60px 32px 32px", marginTop: 0 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            {/* Top row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px 32px", marginBottom: 48 }}>

              {/* Brand */}
              <div style={{ gridColumn: "span 1" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <FireLogo size={34} />
                  <div>
                    <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.9rem" }}>New Fire Energy</div>
                    <div style={{ color: "rgba(0,184,230,0.6)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Private Equity Fund</div>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", lineHeight: 1.7, marginBottom: 16, maxWidth: 240 }}>
                  A private equity fund using the NFE tokenization vehicle, backed by cutting-edge energy technologies. Supporting LENR companies from laboratory to commercial deployment.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <a href="mailto:contact@newfireenergy.com" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", textDecoration: "none" }}>✉ contact@newfireenergy.com</a>
                  <a href="tel:+13059721030" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", textDecoration: "none" }}>📞 (305) 972-1030</a>
                  <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>📍 30 N Gould St STE R, Sheridan, WY 82801</span>
                </div>
              </div>

              {/* Company links */}
              <div>
                <h4 style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Company</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[["Home", "/"], ["ZPE / LENR Technology", "/technology"], ["LENR News", "/news"], ["White Papers", "/whitepaper"], ["Our Board", "/team"], ["Contact Us", "/contact"]].map(([l, h]) => (
                    <a key={l} href={h} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", textDecoration: "none" }}>{l}</a>
                  ))}
                </div>
              </div>

              {/* Investor links */}
              <div>
                <h4 style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Investors</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    ["Become an Investor", "/investors"],
                    ["Investor Materials", "/investors#documents"],
                    ["Verify Accreditation", "https://newfireenergy.investready.com/"],
                    ["Schedule a Call", "/contact?type=investor"],
                  ].map(([l, h]) => (
                    <a key={l} href={h} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", textDecoration: "none" }}>{l}</a>
                  ))}
                </div>
              </div>

              {/* Regulatory / SEC links */}
              <div>
                <h4 style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Regulatory</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    ["SEC Rule 506(c) Info", "https://www.sec.gov/education/smallbusiness/exemptions/rule506c.htm"],
                    ["SEC EDGAR Filings", "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=new+fire+energy"],
                    ["FINRA BrokerCheck", "https://brokercheck.finra.org"],
                    ["Investor.gov Resources", "https://www.investor.gov"],
                    ["InvestReady Verification", "https://newfireenergy.investready.com/"],
                  ].map(([l, h]) => (
                    <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", textDecoration: "none" }}>{l} ↗</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>

              {/* Legal disclaimer */}
              <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.68rem", lineHeight: 1.7, marginBottom: 16, textAlign: "center" }}>
                <strong style={{ color: "rgba(255,255,255,0.3)" }}>IMPORTANT DISCLOSURE:</strong> The securities offered by New Fire Energy Inc. have not been registered under the Securities Act of 1933. This offering is made pursuant to Rule 506(c) of Regulation D and is available <strong>only to accredited investors</strong>. Shares are restricted securities and may not be resold without an effective registration statement or available exemption. Investing involves significant risk including possible loss of entire investment. Neither the SEC nor any state regulator has approved or disapproved the securities offered.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", margin: 0 }}>
                  © {new Date().getFullYear()} New Fire Energy Inc. · Wyoming Corporation · All rights reserved.
                </p>
                <div style={{ display: "flex", gap: 20 }}>
                  {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Disclaimer", "/disclaimer"]].map(([l, h]) => (
                    <a key={l} href={h} style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", textDecoration: "none" }}>{l}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
