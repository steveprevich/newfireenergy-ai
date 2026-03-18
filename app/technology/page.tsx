import type { Metadata } from "next";
import Link from "next/link";
import {
  Atom,
  Zap,
  FlaskConical,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ZPE / LENR Technology",
  description:
    "Zero Point Energy and Low Energy Nuclear Reactions — the science behind New Fire Energy's clean, safe, limitless energy technology. Confirmed by NASA, DOE, MIT, and Google.",
};

const milestones = [
  {
    year: "1989",
    title: "Cold Fusion",
    desc: "Pons & Fleischmann announce cold fusion at University of Utah, igniting 30+ years of global research.",
  },
  {
    year: "2009",
    title: "SPAWAR",
    desc: "U.S. Navy SPAWAR lab publishes peer-reviewed confirmation of LENR excess heat and nuclear signatures.",
  },
  {
    year: "2015",
    title: "Google",
    desc: "Google launches $10M+ LENR research program, collaborating with leading universities worldwide.",
  },
  {
    year: "2019",
    title: "NASA LCF",
    desc: "NASA Glenn Research Center publishes Lattice Confinement Fusion results, confirming the reaction mechanism.",
  },
  {
    year: "2022",
    title: "NFE Founded",
    desc: "New Fire Energy founded in Casper, Wyoming to commercialize ZPE and LENR technology globally.",
  },
  {
    year: "2023",
    title: "Board Built",
    desc: "MIT physicist Peter Fiekowsky, JP Morgan AI architect Sam Massaquoi, and Fortune 50 engineer Gaj Subudhi join the board.",
  },
  {
    year: "2025",
    title: "Investing",
    desc: "Accredited investor window open. Blockchain smart contract funding model launched. ZPE token-backed.",
  },
  {
    year: "2026+",
    title: "Commercial",
    desc: "First ZPE/LENR module deployments. KW to MW commercial installations for grid and off-grid customers.",
  },
];

const faqs = [
  {
    q: "Is LENR the same as cold fusion?",
    a: `LENR (Low Energy Nuclear Reactions) is the scientifically rigorous term for the same phenomenon first reported by Pons and Fleischmann in 1989. The term "cold fusion" is avoided because the reaction mechanism differs fundamentally from conventional hot fusion. LENR involves a quantum mechanical process within a metal lattice, not plasma confinement.`,
  },
  {
    q: "How is LENR different from conventional nuclear fission?",
    a: "Fission splits heavy atoms (uranium, plutonium) and produces significant radioactive waste and dangerous gamma radiation. LENR involves light hydrogen isotopes reacting in a metal lattice, producing primarily heat and helium-4 as a byproduct — with no harmful radiation and no long-lived radioactive waste.",
  },
  {
    q: "What is the scientific basis for LENR?",
    a: "LENR relies on quantum tunneling of hydrogen nuclei in a highly ordered metal lattice (typically nickel or palladium). The lattice environment screens the Coulomb barrier between protons, enabling nuclear reactions at low temperatures. Over 3,000 peer-reviewed experiments confirm anomalous excess heat production.",
  },
  {
    q: "What does COP mean and why does it matter?",
    a: "COP (Coefficient of Performance) is the ratio of energy out to energy in. A COP of 3.4 means 3.4x more heat energy comes out than electrical energy goes in. For comparison, the best heat pumps achieve COP ~4-5, but they simply move heat rather than generating it. Our LENR system at 340% COP is generating entirely new energy from a nuclear process.",
  },
  {
    q: "Why hasn't LENR been commercialized before?",
    a: "The primary challenge has been reproducibility. Early experiments were highly variable, making it difficult to engineer reliable systems. New Fire Energy's breakthrough is a proprietary catalyst formulation and reactor geometry that achieves consistent, repeatable results — the key engineering bottleneck that has now been solved.",
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="max-w-3xl mb-20">
          <div className="section-subtitle mb-4">The Science</div>
          <h1 className="section-title mb-6">
            ZPE /{" "}
            <span className="gradient-text">Low Energy Nuclear Reactions</span>
          </h1>
          <p className="text-white/50 text-xl leading-relaxed mb-6">
            Zero Point Energy and LENR — also known as Cold Fusion or Lattice
            Confinement Fusion — represent a paradigm shift in energy production.
            A technology 30 years in development, confirmed by NASA, DOE, MIT,
            and Google, is now ready for the world to have.
          </p>
          <p className="text-white/40 text-base leading-relaxed italic border-l-2 border-plasma-400/30 pl-4">
            &ldquo;Within this white shadow is a dimension we have yet to
            understand — Zero Point Energy that lights up a room with confidence,
            bearing no visible harm to life. A forceless field bringing a new era
            of freedom.&rdquo;
          </p>
        </div>

        {/* Core mechanism */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              The Core Mechanism
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: Atom,
                  title: "Hydrogen Loading",
                  desc: "Hydrogen isotopes (protium, deuterium) are loaded into a specially prepared metal lattice at elevated pressure and temperature.",
                },
                {
                  icon: FlaskConical,
                  title: "Lattice Confinement",
                  desc: "The crystal lattice confines hydrogen nuclei at inter-atomic distances below the Bohr radius — conditions that dramatically increase quantum tunneling probability.",
                },
                {
                  icon: Zap,
                  title: "Nuclear Reaction",
                  desc: "Hydrogen nuclei fuse with nickel nuclei or with each other, releasing energy as phonons (heat) rather than dangerous gamma radiation.",
                },
                {
                  icon: BarChart3,
                  title: "Excess Heat Output",
                  desc: "The system outputs significantly more thermal energy than the electrical energy input — confirmed at COP 3.4 over sustained runs.",
                },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-plasma-500/10 border border-plasma-400/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-plasma-400" />
                      </div>
                      {i < 3 && (
                        <div className="w-px flex-1 bg-white/[0.05] mt-2 mb-0" />
                      )}
                    </div>
                    <div className="pb-5">
                      <h3 className="font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual representation */}
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-plasma-500/5 to-teal-500/5" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  Energy Balance
                </h3>
                <p className="text-white/40 text-sm">
                  Measured in our lab — Q4 2023
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Electrical Input", value: 100, color: "bg-white/20", pct: "100 W" },
                  { label: "Thermal Output", value: 340, color: "bg-plasma-400", pct: "340 W" },
                  { label: "Net Excess", value: 240, color: "bg-teal-400", pct: "+240 W" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/60">{item.label}</span>
                      <span className="text-white font-mono font-medium">
                        {item.pct}
                      </span>
                    </div>
                    <div className="h-3 bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                        style={{ width: `${(item.value / 340) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-plasma-500/10 border border-plasma-400/20 text-center">
                <div className="font-display text-3xl font-bold gradient-text mb-1">
                  340%
                </div>
                <div className="text-white/50 text-sm">
                  Coefficient of Performance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            LENR vs. Existing Energy Sources
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-4 px-4 text-white/40 text-sm font-medium">
                    Attribute
                  </th>
                  {["LENR (Ours)", "Solar/Wind", "Natural Gas", "Nuclear Fission"].map(
                    (h) => (
                      <th
                        key={h}
                        className={`text-center py-4 px-4 text-sm font-semibold ${
                          h === "LENR (Ours)"
                            ? "text-plasma-400"
                            : "text-white/60"
                        }`}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {[
                  ["Carbon Emissions", "Zero", "Zero", "High", "Low"],
                  ["Energy Density", "10,000× gas", "Very Low", "Baseline", "High"],
                  ["24/7 Baseload", "Yes", "No", "Yes", "Yes"],
                  ["Radioactive Waste", "None", "None", "None", "Yes (millennia)"],
                  ["Fuel Cost", "$0.001/kWh", "$0/kWh*", "$0.04/kWh", "$0.005/kWh"],
                  ["Scalability", "High", "Land-limited", "High", "Very slow/expensive"],
                  ["Safety", "Intrinsically safe", "Safe", "Explosion risk", "Meltdown risk"],
                ].map(([attr, ...values]) => (
                  <tr key={attr} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 text-white/60 text-sm font-medium">
                      {attr}
                    </td>
                    {values.map((v, i) => (
                      <td
                        key={i}
                        className={`py-3.5 px-4 text-center text-sm ${
                          i === 0
                            ? "text-plasma-400 font-semibold"
                            : "text-white/40"
                        }`}
                      >
                        {i === 0 ? (
                          <span className="flex items-center justify-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5" />
                            {v}
                          </span>
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/25 text-xs mt-3">
            * Solar/wind have zero fuel cost but require significant capex for storage and transmission.
          </p>
        </div>

        {/* Roadmap */}
        <div className="mb-24">
          <div className="section-subtitle mb-4 text-center">Development Timeline</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            From Lab to Commercial Scale
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plasma-400/30 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {milestones.map((m, i) => {
                const isPast = parseInt(m.year) <= 2025;
                const isCurrent = m.year === "2025";
                return (
                  <div key={m.year} className="flex flex-col items-center text-center">
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold mb-3 border-2 transition-all duration-300 ${
                        isPast
                          ? "bg-plasma-500 border-plasma-400 text-white"
                          : isCurrent
                          ? "bg-fire-400 border-fire-300 text-navy-900"
                          : "bg-navy-800 border-white/20 text-white/40"
                      }`}
                    >
                      {isPast ? "✓" : isCurrent ? "◉" : String(i + 1)}
                    </div>
                    <div className={`font-mono text-xs font-bold mb-1 ${isCurrent ? "text-fire-300" : isPast ? "text-plasma-400" : "text-white/30"}`}>
                      {m.year}
                    </div>
                    <div className={`text-xs font-semibold mb-1 ${isCurrent ? "text-white" : isPast ? "text-white/70" : "text-white/40"}`}>
                      {m.title}
                    </div>
                    <div className="text-white/30 text-xs leading-tight hidden lg:block">
                      {m.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="section-subtitle mb-4 text-center">Common Questions</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            Technical FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="glass-card group open:border-plasma-400/20 cursor-pointer"
              >
                <summary className="flex items-center justify-between p-6 list-none font-semibold text-white group-open:text-plasma-400 transition-colors duration-200">
                  {faq.q}
                  <span className="text-white/40 group-open:text-plasma-400 text-xl transition-transform duration-200 group-open:rotate-45 ml-4 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/55 leading-relaxed text-sm border-t border-white/[0.06] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/investors" className="btn-primary text-base">
            Explore Investment Opportunity
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
