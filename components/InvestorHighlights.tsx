import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Zap,
  DollarSign,
} from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "$100 Trillion Market Horizon",
    description:
      "When you account for all global energy infrastructure replacement, AI data center power demand, government subsidies, grid maintenance, fossil fuel debt, and the full cost of energy across retail, industrial, and municipal use worldwide, the total addressable disruption exceeds $100 trillion.",
    stat: "$100T",
    statLabel: "Total energy ecosystem disruption",
  },
  {
    icon: TrendingUp,
    title: "Unprecedented Growth Potential",
    description:
      "A breakthrough 30 years in development, now on the precipice of commercialization. Companies holding these patents are pioneers and gatekeepers of a new, lucrative market.",
    stat: "30 Yrs",
    statLabel: "Development milestone",
  },
  {
    icon: Zap,
    title: "Decentralized Clean Energy",
    description:
      "Imagine energy that is abundant, nontoxic, and nearly free, available 24/7, disconnected from traditional power grids. Not just a vision, an impending reality.",
    stat: "24/7",
    statLabel: "Continuous clean output",
  },
  {
    icon: DollarSign,
    title: "Capital Efficient via Blockchain",
    description:
      "New Fire Energy uses smart contracts and blockchain technology to bridge lab demonstrators to commercialization, funding the companies poised to change the world.",
    stat: "ZPE",
    statLabel: "Token-backed funding",
  },
];

export default function InvestorHighlights() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="section-subtitle mb-4">Investment Philosophy</div>
            <h2 className="section-title">
              Why Invest in{" "}
              <span className="gradient-text-fire">New Fire Energy</span>
            </h2>
          </div>
          <Link
            href="/investors"
            className="btn-primary shrink-0 group self-start lg:self-auto"
          >
            Become an Investor
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card-hover group p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-plasma-500/10 border border-plasma-400/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-plasma-400" />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xl font-bold gradient-text">
                      {item.stat}
                    </div>
                    <div className="text-white/30 text-xs">{item.statLabel}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Investor callout */}
        <div className="mt-12 border-gradient rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-plasma-500/5 via-teal-500/5 to-plasma-500/5 pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fire-400/10 border border-fire-400/20 text-fire-300 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fire-400 animate-pulse" />
              Limited Window, Accredited Investors Only
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Join the New Energy Revolution
            </h3>
            <p className="text-white/50 max-w-xl mx-auto text-sm mb-6">
              As companies gear up for commercialization, the chance to invest in this
              groundbreaking LENR/ZPE technology is now. This is a limited-time window of opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/investors" className="btn-fire">
                Verify Accredited Status
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?type=investor" className="btn-secondary">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
