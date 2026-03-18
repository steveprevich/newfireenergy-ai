import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Fire Energy | Zero Point Energy Revolution",
  description: "The Number One Company for the World's New Energy Revolution. ZPE and LENR technology — clean, safe, and virtually limitless.",
};

const navLinks = [
  { label: "Home",               href: "/" },
  { label: "ZPE / LENR",         href: "/technology" },
  { label: "White Papers",       href: "/whitepaper" },
  { label: "Board",              href: "/team" },
  { label: "Contact Us",         href: "/contact" },
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
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #00B8E6, #2DD4BF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.1rem", boxShadow: "0 0 16px rgba(0,184,230,0.35)",
            }}>
              🔥
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                New Fire Energy
              </div>
              <div style={{ color: "rgba(0,184,230,0.65)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                The New Fire!
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
            🔥 Become an Investor
          </a>
        </header>

        {/* Page content — no top padding needed since hero is full-screen */}
        {children}

      </body>
    </html>
  );
}
