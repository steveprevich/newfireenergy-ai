import Link from "next/link";
import { ArrowRight, Atom, Zap, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Atom,
    title: "Zero Point Energy (ZPE)",
    description:
      "Within this white shadow is a dimension we have yet to understand, Zero Point Energy that lights up a room with confidence, bearing no visible harm to life. A forceless field bringing a new era of freedom.",
    color: "plasma",
  },
  {
    icon: Zap,
    title: "Low Energy Nuclear Reactions",
    description:
      "LENR, also known as Cold Fusion or Lattice Confinement Fusion, releases virtually limitless energy on-demand using simple, inexpensive elements like Nickel. Confirmed by NASA, DOE, and MIT research.",
    color: "teal",
  },
  {
    icon: Globe,
    title: "Decentralized Global Energy",
    description:
      "Imagine energy that is abundant, nontoxic, and nearly free, available 24/7 and disconnected from traditional power grids. ZPE modules can run continuously, exporting kW to MW of clean DC power.",
    color: "fire",
  },
  {
    icon: Shield,
    title: "Zero Harmful Byproducts",
    description:
      "100% no direct CO₂ emissions. No hazardous waste, fuel, or radiation emitted. Negligible CO₂ footprint. Modular and scalable from KW to MW, grid and off-grid, stationary and mobile.",
    color: "plasma",
  },
];

const colorMap = {
  plasma: {
    bg: "bg-plasma-500/10",
    border: "border-plasma-400/20",
    text: "text-plasma-400",
    glow: "group-hover:shadow-plasma-500/20",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-400/20",
    text: "text-teal-400",
    glow: "group-hover:shadow-teal-500/20",
  },
  fire: {
    bg: "bg-fire-400/10",
    border: "border-fire-400/20",
    text: "text-fire-300",
    glow: "group-hover:shadow-fire-400/20",
  },
};

export default function TechnologySection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="section-subtitle mb-4">The Science</div>
          <h2 className="section-title mb-6">
            Why LENR / ZPE is the{" "}
            <span className="gradient-text">Energy Breakthrough</span> the
            World Has Been Waiting For
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Low Energy Nuclear Reactions, confirmed by NASA, the U.S. Department of Energy,
            MIT, and Google, represent a paradigm shift in energy production.
            A technology 30 years in development is now ready for the world to have.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => {
            const colors = colorMap[feature.color as keyof typeof colorMap];
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass-card-hover group p-8 shadow-xl transition-all duration-300 ${colors.glow}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ZPE endorsement badges */}
        <div className="glass-card p-6 mb-10">
          <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-4">Validated & Endorsed By</p>
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm font-medium">
            {["NASA", "U.S. Dept. of Energy", "MIT", "Google", "U.S. Navy", "Physical Review C"].map((org) => (
              <span key={org} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-plasma-400/60" />
                {org}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/technology"
            className="btn-secondary inline-flex group"
          >
            Explore LENR / ZPE Science
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
