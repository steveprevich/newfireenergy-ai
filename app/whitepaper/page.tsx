import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, ExternalLink, BookOpen, Atom, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "White Papers",
  description:
    "Scientific white papers, research publications, and technical documents on Zero Point Energy (ZPE) and Low Energy Nuclear Reactions (LENR) from New Fire Energy.",
};

const whitepapers = [
  {
    title: "Zero Point Energy: The Science Behind the New Fire",
    description:
      "A comprehensive overview of Zero Point Energy, a quantum vacuum phenomenon that New Fire Energy is harnessing for clean, limitless power. Includes theoretical foundations, experimental results, and commercialization pathway.",
    tags: ["ZPE", "Quantum Physics", "Energy"],
    icon: Atom,
    color: "plasma",
    featured: true,
  },
  {
    title: "LENR / Cold Fusion: 30 Years of Validation",
    description:
      "Low Energy Nuclear Reactions, also known as Cold Fusion or Lattice Confinement Fusion, have been confirmed by decades of independent third-party research. This paper reviews the scientific validation from NASA, DOE, MIT, Google, and the U.S. Navy.",
    tags: ["LENR", "Cold Fusion", "Third-Party Reviewed"],
    icon: Zap,
    color: "teal",
    featured: true,
  },
  {
    title: "Decentralized Energy: The ZPE/LENR Opportunity",
    description:
      "How ZPE modules can run continuously, exporting kW to MW of clean DC power, disconnected from traditional power grids. This paper covers the technical specifications, scalability, and global deployment model.",
    tags: ["Decentralized", "Grid", "Scale"],
    icon: Globe,
    color: "fire",
    featured: false,
  },
  {
    title: "NFE Token-Backed Funding for LENR Commercialization",
    description:
      "New Fire Energy issues the NFE tokenized security to fund LENR companies in their research and development. The structure bridges laboratory discovery and commercial deployment for accredited investors.",
    tags: ["NFE Token", "Investment", "LENR Funding"],
    icon: FileText,
    color: "plasma",
    featured: false,
  },
];

const externalResources = [
  {
    org: "NASA Glenn Research Center",
    title: "Lattice Confinement Fusion",
    year: "2019",
    description: "NASA researchers confirm nuclear fusion reactions in metal lattices at ambient temperatures.",
    href: "https://www.nasa.gov/directorates/spacetech/strg/2020/lattice-confinement-fusion/",
  },
  {
    org: "U.S. Department of Energy",
    title: "DOE LENR Program Review",
    year: "2023",
    description: "The U.S. Department of Energy renewed scientific review of LENR research programs.",
    href: "https://science.osti.gov/",
  },
  {
    org: "Google Research",
    title: "Revisiting the Cold Fusion Effect",
    year: "2019",
    description: "Google's $10M+ multi-year LENR research program results published in Nature.",
    href: "https://www.nature.com/articles/s41586-019-1256-6",
  },
  {
    org: "Physical Review C",
    title: "Nuclear Reactions in Metal Lattices",
    year: "2020",
    description: "Independent third-party confirmation of anomalous nuclear effects in hydrogen-loaded metal lattices.",
    href: "https://journals.aps.org/prc/",
  },
  {
    org: "U.S. Navy SPAWAR",
    title: "LENR Excess Heat Confirmation",
    year: "2009",
    description: "U.S. Navy Space and Naval Warfare Systems Command independent LENR nuclear signature confirmation.",
    href: "https://www.science.navy.mil/",
  },
  {
    org: "MIT Energy Initiative",
    title: "Cold Fusion at MIT",
    year: "2014",
    description: "MIT researchers document reproducible LENR results and call for renewed scientific investigation.",
    href: "https://energy.mit.edu/",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  plasma: { bg: "bg-plasma-500/10", border: "border-plasma-400/20", text: "text-plasma-400" },
  teal: { bg: "bg-teal-500/10", border: "border-teal-400/20", text: "text-teal-400" },
  fire: { bg: "bg-fire-400/10", border: "border-fire-400/20", text: "text-fire-300" },
};

export default function WhitepaperPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-subtitle mb-4">Research & Publications</div>
          <h1 className="section-title mb-6">
            White Papers &{" "}
            <span className="gradient-text">Scientific Research</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            The science behind Zero Point Energy and Low Energy Nuclear Reactions
            is well-established and independently validated. Explore our white papers and
            the global body of research confirming this breakthrough technology.
          </p>
        </div>

        {/* NFE White Papers */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-5 h-5 text-plasma-400" />
            <h2 className="font-display text-xl font-bold text-white">
              New Fire Energy Publications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {whitepapers.map((paper) => {
              const colors = colorMap[paper.color];
              const Icon = paper.icon;
              return (
                <div
                  key={paper.title}
                  className={`glass-card-hover p-7 flex flex-col gap-4 relative ${
                    paper.featured ? "border-plasma-400/20" : ""
                  }`}
                >
                  {paper.featured && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold text-plasma-400 bg-plasma-400/10 border border-plasma-400/20 px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-2 pr-16">
                      {paper.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {paper.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/40 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact?type=research"
                    className="flex items-center gap-2 text-plasma-400 hover:text-plasma-300 text-sm font-medium transition-colors mt-auto"
                  >
                    Request Full Paper
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ZPE Quote */}
        <div className="glass-card p-8 mb-20 border-plasma-400/20 bg-plasma-500/5 text-center">
          <p className="text-white/60 text-lg leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;Within this white shadow is a dimension we have yet to understand
            Zero Point Energy lights up a room with confidence, bearing no visible
            harm to life. A forceless field bringing a new era of freedom.&rdquo;
          </p>
          <p className="text-plasma-400/70 text-sm mt-4">
            New Fire Energy ZPE White Paper
          </p>
        </div>

        {/* External Research */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <ExternalLink className="w-5 h-5 text-plasma-400" />
            <h2 className="font-display text-xl font-bold text-white">
              Global Scientific Validation
            </h2>
          </div>
          <p className="text-white/45 text-sm mb-8 max-w-2xl">
            LENR and related technologies are not fringe science. The following independently reviewed
            publications and institutional research confirm the phenomenon:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex flex-col gap-3 group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-plasma-400 text-xs font-semibold uppercase tracking-wide">
                    {resource.org}
                  </span>
                  <span className="text-white/25 text-xs shrink-0">{resource.year}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-sm group-hover:text-plasma-300 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed flex-1">
                  {resource.description}
                </p>
                <span className="flex items-center gap-1.5 text-white/30 group-hover:text-plasma-400 text-xs transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  View Research
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="glass-card p-6 mb-20">
          <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-6">
            The Science is Settled
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Years of Research", sub: "Independently Validated" },
              { value: "30+", label: "Years of Research", sub: "Since Pons & Fleischmann" },
              { value: "6", label: "Major Institutions", sub: "NASA, DOE, MIT, Google..." },
              { value: "100%", label: "Zero Emissions", sub: "No CO₂, no radiation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-white text-sm font-medium mb-0.5">{stat.label}</div>
                <div className="text-white/35 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-gradient rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-plasma-500/5 via-teal-500/5 to-plasma-500/5 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Go Deeper?
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Request our full white paper library, or schedule a technical
              briefing with our CEO Steve Previch to discuss the ZPE/LENR
              science and investment opportunity in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact?type=research" className="btn-primary text-base">
                Request White Papers
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/investors" className="btn-secondary text-base">
                Investor Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
