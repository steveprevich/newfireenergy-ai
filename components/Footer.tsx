import Link from "next/link";
import { Zap, Mail, Linkedin, Twitter, ArrowUpRight, MapPin, Phone } from "lucide-react";


const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "ZPE / LENR", href: "/technology" },
    { label: "Board", href: "/team" },
    { label: "White Papers", href: "/whitepaper" },
    { label: "Contact Us", href: "/contact" },
  ],
  Investors: [
    { label: "Become an Investor", href: "/investors" },
    { label: "Investor FAQ", href: "/investors#faq" },
    { label: "Investor Materials", href: "/investors#documents" },
    { label: "Verify Accreditation", href: "https://investready.com" },
    { label: "Schedule a Call", href: "/contact?type=investor" },
  ],
  Technology: [
    { label: "ZPE Overview", href: "/technology" },
    { label: "LENR Science", href: "/technology#lenr" },
    { label: "White Papers", href: "/whitepaper" },
    { label: "Tech FAQ", href: "/technology#faq" },
    { label: "NASA & DOE Research", href: "/technology" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] mt-20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-plasma-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center shadow-lg shadow-plasma-400/20">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <span className="font-display font-bold text-base text-white block">
                  New Fire Energy
                </span>
                <span className="text-[9px] text-plasma-400/70 font-medium tracking-widest uppercase block">
                  The New Fire!
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              The Number One Company for the World&apos;s New Energy Revolution.
              ZPE and LENR technology — clean, safe, and virtually limitless.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-5">
              <a
                href="mailto:Info@NewFireEnergy.com"
                className="flex items-center gap-2 text-white/40 hover:text-plasma-400 text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                Info@NewFireEnergy.com
              </a>
              <a
                href="tel:+18137781209"
                className="flex items-center gap-2 text-white/40 hover:text-plasma-400 text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +1 813 778 1209
              </a>
              <div className="flex items-start gap-2 text-white/30 text-xs">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>30 N. Gould St. Suite R<br />Casper, Wyoming 82609</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-plasma-500/20 border border-white/[0.08] hover:border-plasma-400/30 flex items-center justify-center text-white/50 hover:text-plasma-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-plasma-500/20 border border-white/[0.08] hover:border-plasma-400/30 flex items-center justify-center text-white/50 hover:text-plasma-400 transition-all duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:Info@NewFireEnergy.com"
                className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-plasma-500/20 border border-white/[0.08] hover:border-plasma-400/30 flex items-center justify-center text-white/50 hover:text-plasma-400 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200 -mb-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} New Fire Energy, Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Powered by</span>
            <span className="text-plasma-400/60 font-medium">
              LENR Technology
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-plasma-400/40 mx-1 plasma-pulse" />
            <span>AI Assistant by Claude</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-white/20 text-xs leading-relaxed text-center">
          This website is for informational purposes only and does not constitute
          an offer or solicitation to sell or buy securities. Past performance is
          not indicative of future results. Investing in early-stage companies
          involves significant risk.
        </p>
      </div>
    </footer>
  );
}
