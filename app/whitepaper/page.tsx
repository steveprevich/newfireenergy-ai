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
      "Zero Point Energy is the lowest possible energy state of a quantum system, the irreducible energy that remains in a vacuum even at absolute zero temperature. Predicted by quantum mechanics and supported by measurable phenomena such as the Casimir effect, ZPE research is finding more and more evidence that energy from the zero point field could represent an enormous untapped reservoir embedded in the fabric of space itself. Its connection to Low Energy Nuclear Reactions lies in the lattice environment: when hydrogen isotopes are loaded into a metal lattice at high density, the quantum fluctuations and phonon interactions of the lattice are theorized to couple with nuclear-scale events, lowering the energy barrier for fusion. This is the theoretical bridge between ZPE and the anomalous excess heat observed in LENR experiments worldwide.",
    tags: ["ZPE", "Quantum Physics", "Energy"],
    icon: Atom,
    color: "plasma",
    featured: true,
  },
  {
    title: "LENR / Cold Fusion: 30 Years of Validation",
    description:
      "Low Energy Nuclear Reactions, also known as Cold Fusion or Lattice Confinement Fusion, have been studied by independent research teams for over 30 years. This paper reviews the published findings from NASA, the DOE, MIT, and the U.S. Navy, and the growing body of independent third-party physicist reviews supporting the field.",
    tags: ["LENR", "Cold Fusion", "Third-Party Reviewed"],
    icon: Zap,
    color: "teal",
    featured: true,
  },
  {
    title: "Decentralized Energy: The LENR/ZPE Opportunity",
    description:
      "How LENR modules can run continuously, exporting kW to MW of clean DC power, disconnected from traditional power grids. This paper covers the technical specifications, scalability, and global deployment model.",
    tags: ["Decentralized", "Grid", "Scale"],
    icon: Globe,
    color: "fire",
    featured: false,
  },
  {
    title: "LENR-Backed Token Funding for LENR Commercialization",
    description:
      "New Fire Energy issues the LENR-backed token (NFE) to fund LENR companies in their research and development. The structure bridges laboratory discovery and commercial deployment for accredited investors.",
    tags: ["LENR Token", "Investment", "LENR Funding"],
    icon: FileText,
    color: "plasma",
    featured: false,
  },
];

const externalResources = [
  {
    org: "NASA Glenn Research Center",
    title: "Lattice Confinement Fusion",
    year: "2020",
    description: "NASA Glenn Research Center publishes peer-reviewed findings in Physical Review C confirming nuclear fusion reactions in metal lattices at ambient temperatures via Lattice Confinement Fusion.",
    href: "https://www.nasa.gov/directorates/spacetech/strg/2020/lattice-confinement-fusion/",
  },
  {
    org: "U.S. Dept. of Energy / ARPA-E",
    title: "$10M in LENR Research Grants to Eight Institutions",
    year: "2023",
    description: "On February 17, 2023, ARPA-E announced $10 million in federal funding across eight research institutions, including MIT, Stanford, Texas Tech, and the University of Michigan, to determine whether LENR could be the basis for a transformative carbon-free energy source.",
    href: "https://arpa-e.energy.gov/news-and-events/news-and-insights/us-department-energy-announces-10-million-funding-projects-studying-low-energy-nuclear-reactions",
  },
  {
    org: "ICCF-24 Conference",
    title: "International Conference on Condensed Matter Nuclear Science",
    year: "2022",
    description: "The 24th international LENR conference brought together researchers from NASA, MIT, leading universities, and independent labs to present the latest experimental results, reproducibility advances, and commercialization progress in LENR science.",
    href: "https://iccf24.com",
  },
  {
    org: "Physical Review C",
    title: "Nuclear Reactions in Metal Lattices",
    year: "2020",
    description: "Peer-reviewed confirmation published by the American Physical Society that nuclear fusion reactions occur within deuterium-loaded metal lattices at ambient conditions, with measurable energy output consistent with LENR.",
    href: "https://journals.aps.org/prc/",
  },
  {
    org: "U.S. Naval Surface Warfare Center",
    title: "Multi-Lab LENR Research Initiative",
    year: "2023",
    description: "The Naval Surface Warfare Center, Indian Head Division, partnered with Army and NIST laboratories to run a coordinated series of LENR experiments. Separately, ARPA-E issued its first direct grants to LENR research groups in February 2023, citing LENR as a potentially transformative carbon-free energy source.",
    href: "https://spectrum.ieee.org/cold-fusion-or-low-energy-nuclear-reactions-us-navy-researchers-reopen-case",
  },
  {
    org: "MIT / New Journal of Physics",
    title: "Known Mechanisms That Increase Nuclear Fusion Rates in the Solid State",
    year: "2024",
    description: "MIT physicist Peter Hagelstein and colleagues published a peer-reviewed study in New Journal of Physics identifying the specific physical mechanisms that enhance nuclear fusion rates inside metal lattices, directly supporting the theoretical foundation of LENR.",
    href: "https://iopscience.iop.org/article/10.1088/1367-2630/ad091c",
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
            Low Energy Nuclear Reactions have been independently studied and published
            by NASA, the U.S. Navy, the Department of Energy, and MIT. While mainstream scientific
            consensus is still forming, and the body of independent third-party physicist reviews is growing. Zero Point Energy
            remains an active area of theoretical research. Explore our white papers and the global body
            of published work behind these technologies.
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
            &ldquo;In the quiet between atoms lives the oldest power in creation.
            It needs no fuel. It casts no shadow.
            It has filled the cosmos since before the first star was born.
            Zero Point Energy is not new. We are.&rdquo;
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
              Published Research &amp; Studies
            </h2>
          </div>
          <p className="text-white/45 text-sm mb-8 max-w-2xl">
            LENR and related technologies are not fringe science. The following independently reviewed
            publications and institutional research support the field:
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
            The Evidence is Growing
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "1989", label: "Year LENR Began", sub: "Pons & Fleischmann, University of Utah" },
              { value: "30+", label: "Years of Research", sub: "Peer-reviewed studies worldwide" },
              { value: "5+", label: "Major Institutions", sub: "NASA, DOE, MIT, U.S. Navy, ENEA" },
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
              briefing with our CEO Steve Previch to discuss the LENR/ZPE
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
