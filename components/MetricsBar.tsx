"use client";

import Link from "next/link";
import { ArrowRight, Zap, Globe, Shield, Clock, Layers, Atom } from "lucide-react";

const stats = [
  {
    value: "$100T",
    label: "Market Horizon",
    sublabel: "ZPE disrupts the entire global energy market",
    icon: Globe,
    color: "from-plasma-400 to-teal-400",
    iconColor: "text-plasma-400",
    border: "border-plasma-400/20",
    bg: "bg-plasma-500/5",
  },
  {
    value: "100%",
    label: "Zero CO₂",
    sublabel: "No carbon emissions. No hazardous waste. Ever.",
    icon: Shield,
    color: "from-teal-400 to-plasma-400",
    iconColor: "text-teal-400",
    border: "border-teal-400/20",
    bg: "bg-teal-500/5",
  },
  {
    value: "24/7",
    label: "Continuous Output",
    sublabel: "Always-on power — no grid, no weather dependency",
    icon: Clock,
    color: "from-plasma-400 to-teal-400",
    iconColor: "text-plasma-400",
    border: "border-plasma-400/20",
    bg: "bg-plasma-500/5",
  },
  {
    value: "0",
    label: "Harmful Radiation",
    sublabel: "Completely safe for life and the environment",
    icon: Zap,
    color: "from-teal-400 to-fire-400",
    iconColor: "text-teal-400",
    border: "border-teal-400/20",
    bg: "bg-teal-500/5",
  },
  {
    value: "KW→MW",
    label: "Fully Scalable",
    sublabel: "Modular design — grid, off-grid, mobile",
    icon: Layers,
    color: "from-fire-300 to-fire-400",
    iconColor: "text-fire-300",
    border: "border-fire-400/20",
    bg: "bg-fire-400/5",
  },
  {
    value: "30 Yrs",
    label: "In Development",
    sublabel: "Confirmed by NASA, DOE, MIT & Google",
    icon: Atom,
    color: "from-plasma-400 to-teal-400",
    iconColor: "text-plasma-400",
    border: "border-plasma-400/20",
    bg: "bg-plasma-500/5",
  },
];

export default function MetricsBar() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/[0.06]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-950/60 to-navy-900/80 pointer-events-none" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-plasma-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plasma-500/10 border border-plasma-400/20 text-plasma-300 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-plasma-400 animate-pulse" />
            The New Fire by the Numbers
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Zero Point Energy —{" "}
            <span className="gradient-text">Why It Changes Everything</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto">
            A technology 30 years in development is now on the precipice of
            commercialization. The numbers speak for themselves.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`glass-card-hover p-7 flex gap-5 items-start border ${stat.border} ${stat.bg}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/[0.04] border ${stat.border} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <div
                    className={`font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/40 text-xs leading-relaxed">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="border-gradient rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-plasma-500/5 via-teal-500/3 to-fire-500/5 pointer-events-none" />
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-white font-display font-bold text-lg mb-1">
              Ready for the New Energy Revolution?
            </p>
            <p className="text-white/45 text-sm">
              Companies holding ZPE patents are pioneers and gatekeepers of a $100 trillion market.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/investors" className="btn-fire text-sm px-6">
              Become an Investor
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/technology" className="btn-secondary text-sm px-6">
              Learn the Science
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
