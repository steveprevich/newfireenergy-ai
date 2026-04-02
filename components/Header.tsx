"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "ZPE / LENR" },
  { href: "/whitepaper", label: "White Papers" },
  { href: "/team", label: "Board" },
  { href: "/simulation", label: "AI Simulation" },
  { href: "/investors", label: "Become an Investor" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/90 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center shadow-lg shadow-plasma-400/30 group-hover:shadow-plasma-400/50 transition-all duration-300">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-plasma-400 to-teal-500 opacity-20 blur group-hover:opacity-40 transition-opacity duration-300 -z-10" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white leading-tight block">
                New Fire Energy
              </span>
              <span className="text-[10px] text-plasma-400/80 font-medium tracking-widest uppercase leading-tight block">
                The New Fire!
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative py-1 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-plasma-400 to-teal-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/investors" className="btn-secondary py-2 text-sm">
              Become an Investor
            </Link>
            <Link href="/contact" className="btn-primary py-2 text-sm">
              <Zap className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/95 backdrop-blur-xl border-t border-white/[0.06] mt-1">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-plasma-500/10 text-plasma-400"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/[0.06]">
              <Link
                href="/investors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-secondary justify-center text-sm"
              >
                Investor Portal
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary justify-center text-sm"
              >
                <Zap className="w-4 h-4" />
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
