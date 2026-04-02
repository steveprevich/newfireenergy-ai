"use client";

import Link from "next/link";
import { ArrowRight, Flame, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* ── VIDEO BACKGROUND ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: 0.30,
          filter: "hue-rotate(195deg) saturate(1.8) brightness(0.75)",
          mixBlendMode: "screen",
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — just enough to keep text readable */}
      <div className="absolute inset-0 bg-[#060E1F]/60 pointer-events-none" />

      {/* Radial blue glow at centre — always visible as fallback */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Animated plasma rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-plasma-500/15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
        <div
          className="w-[750px] h-[750px] rounded-full border border-plasma-500/8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      {/* Central glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-plasma-500/20 to-transparent blur-3xl" />
      </div>

      {/* Wave SVG layers at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full opacity-20" preserveAspectRatio="none">
          <path fill="#1e3a8a" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,213.3C672,213,768,171,864,160C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
        <svg viewBox="0 0 1440 320" className="w-full opacity-10 -mt-24" preserveAspectRatio="none">
          <path fill="#1d4ed8" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,256C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-plasma-500/10 border border-plasma-400/20 text-plasma-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-plasma-400 animate-pulse" />
          Zero Point Energy · Zero Carbon Emissions
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-4">
          New Fire Energy
        </h1>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text-fire">NEW FIRE!</span>
        </h2>

        {/* Subheadline */}
        <p className="text-white/65 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed mb-4 text-balance">
          The Number One Company for the World&rsquo;s{" "}
          <span className="text-plasma-300 font-medium">New Energy Revolution!</span>
        </p>
        <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Are you ready for the Zero Point, Zero Carbon Emission Energy Makeover?
        </p>

        {/* Key stats row */}
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {[
            { value: "$100T", label: "Market Horizon" },
            { value: "Zero", label: "Carbon Emissions" },
            { value: "24/7", label: "Continuous Output" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/investors"
            className="btn-fire text-base px-8 py-4 group"
          >
            <Flame className="w-5 h-5" />
            Become an Investor
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/technology"
            className="btn-secondary text-base px-8 py-4 group"
          >
            Discover ZPE / LENR
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/30 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            NASA & DOE confirmed research
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Globally protected patents
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            No hazardous radiation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Accredited investors only
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
