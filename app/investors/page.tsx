import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Lock,
  FileText,
  CheckCircle,
  AlertTriangle,
  Zap,
  Shield,
  Mail,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become an Investor",
  description:
    "Join the new energy revolution. Accredited investor opportunities in ZPE and LENR technology — the $100 trillion energy market disruption.",
};

const risks = [
  "Technology risk: ZPE and LENR are emerging technologies not yet fully understood at the theoretical level",
  "Regulatory: Novel energy technology may face uncertain regulatory pathways as commercialization accelerates",
  "Scale-up: Lab demonstrator results may not perfectly translate to commercial-scale deployment",
  "Market adoption: Industrial and utility customers may be slow to adopt new paradigm energy technology",
  "Competition: Established energy incumbents and well-funded fusion startups competing for market share",
];

const documents = [
  { name: "Executive Summary", type: "PDF", locked: false },
  { name: "Investment Presentation", type: "PDF", locked: false },
  { name: "ZPE/LENR White Paper", type: "PDF", locked: false },
  { name: "Financial Model", type: "XLSX", locked: true },
  { name: "IP Portfolio Overview", type: "PDF", locked: true },
  { name: "Data Room Access", type: "Link", locked: true },
];

export default function InvestorsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fire-400/10 border border-fire-400/20 text-fire-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-fire-400 animate-pulse" />
            Limited Window — Accredited Investors Only
          </span>
          <h1 className="section-title mb-6">
            Join the{" "}
            <span className="gradient-text-fire">New Energy Revolution</span>
          </h1>
          <p className="text-white/55 text-xl leading-relaxed mb-10">
            Zero Point Energy and LENR represent a once-in-a-generation investment
            opportunity. Companies holding these patents are pioneers and gatekeepers
            of a new, lucrative $100 trillion energy market. The window to invest
            early is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://investready.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fire text-base"
            >
              Verify Accredited Status
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/contact?type=investor" className="btn-secondary text-base">
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Why now */}
        <div className="glass-card p-8 mb-20 border-fire-400/20 bg-fire-400/5 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Why Now?
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">
            A breakthrough 30 years in development is now on the precipice of
            commercialization. NASA, the U.S. Department of Energy, MIT, and Google
            have all confirmed the science. New Fire Energy is positioned to bridge
            the gap from lab demonstrator to global commercialization — using
            blockchain smart contracts to fund the companies poised to change the world.
          </p>
        </div>

        {/* Investment thesis */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-plasma-500/10 border border-plasma-400/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-plasma-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              $100 Trillion Market Horizon
            </h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              As ZPE and LENR technologies disrupt traditional energy markets,
              analysts project a valuation surge creating entirely new industries —
              redefining energy and money in global trade. This is not incremental
              improvement; it is a complete paradigm shift.
            </p>
            <div className="font-display text-2xl font-bold gradient-text">
              $100T
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              30 Years in Development
            </h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              LENR — also known as Cold Fusion or Lattice Confinement Fusion —
              has been confirmed by 3,000+ peer-reviewed experiments. The science
              is settled. We are now at the commercialization inflection point.
              Early investors will own a piece of history.
            </p>
            <div className="font-display text-2xl font-bold text-teal-400">
              Proven
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-fire-400/10 border border-fire-400/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-fire-300" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Decentralized Clean Energy
            </h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              Imagine energy that is abundant, nontoxic, and nearly free —
              available 24/7, disconnected from traditional power grids. ZPE
              modules can run continuously, exporting kW to MW of clean DC power.
              Not just a vision: an impending reality.
            </p>
            <div className="font-display text-2xl font-bold text-fire-300">
              24/7
            </div>
          </div>
        </div>

        {/* Blockchain funding model */}
        <div className="glass-card p-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-subtitle mb-3">Funding Model</div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                Capital Efficient via{" "}
                <span className="gradient-text">Blockchain</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-4">
                New Fire Energy uses smart contracts and blockchain technology to
                bridge lab demonstrators to full commercialization — transparently
                funding the companies poised to change the world.
              </p>
              <p className="text-white/55 leading-relaxed">
                Our ZPE token-backed funding model provides investors with
                unprecedented transparency, liquidity options, and participation
                in the technology ecosystem we are building.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Token-Backed", value: "ZPE", sub: "Funding instrument" },
                { label: "Transparency", value: "100%", sub: "On-chain reporting" },
                { label: "Clean Output", value: "24/7", sub: "Continuous energy" },
                { label: "Market Size", value: "$100T", sub: "Projected disruption" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-5 text-center">
                  <div className="font-display text-2xl font-bold gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className="text-white text-sm font-medium mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-white/35 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accredited investor verification */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="section-subtitle mb-3">How to Invest</div>
            <h2 className="section-title">
              Accredited Investor{" "}
              <span className="gradient-text">Verification</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                step: "01",
                title: "Verify Accreditation",
                desc: "Complete accredited investor verification through InvestReady Inc. — our trusted third-party verification partner.",
                cta: "Start Verification",
                href: "https://investready.com",
                external: true,
              },
              {
                step: "02",
                title: "Request Materials",
                desc: "Contact us directly to receive our investor deck, white papers, and access to our data room for verified investors.",
                cta: "Request Materials",
                href: "/contact?type=investor",
                external: false,
              },
              {
                step: "03",
                title: "Schedule a Call",
                desc: "Schedule a direct call with our CEO, Steve Previch, to discuss the opportunity and have your questions answered.",
                cta: "Schedule Call",
                href: "/contact?type=investor",
                external: false,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="glass-card p-7 flex flex-col gap-4"
              >
                <div className="font-display text-4xl font-bold gradient-text opacity-40">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-2.5 justify-center"
                  >
                    {item.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="btn-secondary text-sm py-2.5 justify-center"
                  >
                    {item.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="glass-card p-6 border-plasma-400/20 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div>
              <p className="text-white font-semibold mb-1">
                Questions? Contact our investor relations team directly.
              </p>
              <p className="text-white/50 text-sm">
                We respond within 24–48 hours to all verified investor inquiries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="mailto:Info@NewFireEnergy.com"
                className="flex items-center gap-2 text-plasma-400 hover:text-plasma-300 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Info@NewFireEnergy.com
              </a>
              <a
                href="tel:+16566661210"
                className="flex items-center gap-2 text-plasma-400 hover:text-plasma-300 transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                656-666-1210
              </a>
            </div>
          </div>
        </div>

        {/* Investor materials */}
        <div id="documents" className="mb-20">
          <h2 className="font-display text-2xl font-bold text-white mb-8">
            <FileText className="w-6 h-6 text-plasma-400 inline mr-3" />
            Investor Materials
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.name}
                className={`glass-card-hover p-5 flex items-center gap-4 ${
                  doc.locked ? "opacity-60" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-plasma-500/10 border border-plasma-400/20 flex items-center justify-center shrink-0">
                  {doc.locked ? (
                    <Lock className="w-5 h-5 text-white/30" />
                  ) : (
                    <FileText className="w-5 h-5 text-plasma-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm truncate">
                    {doc.name}
                  </div>
                  <div className="text-white/35 text-xs">{doc.type}</div>
                </div>
                {doc.locked ? (
                  <span className="text-white/25 text-xs shrink-0">
                    Verified access
                  </span>
                ) : (
                  <ArrowRight className="w-4 h-4 text-plasma-400 shrink-0" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 glass-card border-plasma-400/20">
            <p className="text-white/50 text-sm">
              <Lock className="w-4 h-4 inline mr-1.5 text-plasma-400" />
              Full data room access — including financial model, IP portfolio, and
              technical due diligence package — is available to verified accredited
              investors.{" "}
              <Link
                href="/contact?type=investor"
                className="text-plasma-400 hover:text-plasma-300 transition-colors"
              >
                Request access &rarr;
              </Link>
            </p>
          </div>
        </div>

        {/* Validation */}
        <div className="glass-card p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Validated by the World&apos;s Leading Institutions
            </h2>
            <p className="text-white/45 text-sm">
              LENR is confirmed science — not speculation
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { org: "NASA", detail: "Lattice Confinement Fusion research" },
              { org: "U.S. Dept. of Energy", detail: "LENR program review" },
              { org: "MIT", detail: "Cold fusion experiments confirmed" },
              { org: "Google", detail: "$10M+ LENR research program" },
              { org: "U.S. Navy", detail: "SPAWAR LENR research" },
              { org: "Physical Review C", detail: "Peer-reviewed publications" },
            ].map((item) => (
              <div key={item.org} className="text-center">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-plasma-400" />
                  {item.org}
                </div>
                <div className="text-white/35 text-xs">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk factors */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-fire-300" />
            Risk Factors
          </h2>
          <div className="glass-card p-6">
            <p className="text-white/50 text-sm mb-4">
              Investing in early-stage companies involves significant risk. This
              is not a securities offering. Please consider the following:
            </p>
            <ul className="space-y-2">
              {risks.map((risk) => (
                <li
                  key={risk}
                  className="flex items-start gap-2 text-white/50 text-sm"
                >
                  <span className="text-fire-400 mt-0.5 shrink-0">•</span>
                  {risk}
                </li>
              ))}
            </ul>
            <p className="text-white/30 text-xs mt-5 pt-4 border-t border-white/[0.06]">
              This page does not constitute a securities offering or solicitation.
              Investment opportunities are available only to accredited investors as
              defined by SEC Regulation D Rule 501.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2
            id="faq"
            className="font-display text-2xl font-bold text-white mb-8 text-center"
          >
            Investor FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Who can invest?",
                a: "This opportunity is limited to accredited investors as defined by SEC Rule 501 of Regulation D. You must meet income ($200K+ individual or $300K+ joint) or net worth ($1M+ excluding primary residence) thresholds. Verification is handled through InvestReady Inc.",
              },
              {
                q: "How do I verify my accredited investor status?",
                a: "We partner with InvestReady Inc. for accredited investor verification. Visit investready.com to complete the verification process. Once verified, contact us at Info@NewFireEnergy.com or call 656-666-1210 to begin the investor onboarding process.",
              },
              {
                q: "What is the investment structure?",
                a: "New Fire Energy uses blockchain smart contracts and ZPE token-backed funding to bridge lab demonstrators to commercialization. This model provides transparency, potential liquidity options, and direct participation in the energy technology ecosystem. Contact us for full details on the current investment structure.",
              },
              {
                q: "What is the exit strategy?",
                a: "We anticipate multiple paths to liquidity as ZPE and LENR technologies reach commercialization. These include strategic partnerships with global energy companies, licensing deals, and potential token liquidity as the blockchain-based funding model matures. The technology commercialization timeline is accelerating.",
              },
              {
                q: "How do I learn more about the technology?",
                a: "Download our white papers from the Technology page or the materials section above. You can also schedule a direct call with our CEO Steve Previch, who will walk you through the ZPE/LENR science, our patent portfolio, and the investment opportunity in detail.",
              },
              {
                q: "How do I get in touch?",
                a: "Email us at Info@NewFireEnergy.com or call 656-666-1210. Our office is located at 30 N. Gould St. Suite R, Casper, Wyoming 82609. We respond to all investor inquiries within 24–48 hours.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="glass-card group open:border-plasma-400/20 cursor-pointer"
              >
                <summary className="flex items-center justify-between p-6 list-none font-semibold text-white group-open:text-plasma-400 transition-colors duration-200">
                  {item.q}
                  <span className="text-white/40 group-open:text-plasma-400 text-xl transition-transform duration-200 group-open:rotate-45 ml-4 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/55 leading-relaxed text-sm border-t border-white/[0.06] pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-gradient rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-plasma-500/5 via-fire-500/3 to-teal-500/5 pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fire-400/10 border border-fire-400/20 text-fire-300 text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-fire-400 animate-pulse" />
              Accredited Investors Only
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Be Part of the New Energy Revolution?
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Schedule a call with Steve Previch, CEO, to discuss the ZPE/LENR
              opportunity and learn how New Fire Energy is commercializing the
              technology that will change the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://investready.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fire text-base"
              >
                Verify Accredited Status
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/contact?type=investor" className="btn-secondary text-base">
                <CheckCircle className="w-4 h-4" />
                Schedule Investor Call
              </Link>
            </div>
            <p className="text-white/30 text-xs mt-6">
              Questions? Email{" "}
              <a
                href="mailto:Info@NewFireEnergy.com"
                className="text-plasma-400/70 hover:text-plasma-400"
              >
                Info@NewFireEnergy.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+16566661210"
                className="text-plasma-400/70 hover:text-plasma-400"
              >
                656-666-1210
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
