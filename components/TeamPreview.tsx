import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

const team = [
  {
    name: "Steve Previch",
    role: "CEO & Founder",
    background: "20 yrs Wall Street securities. Strategic planning & international enterprise leadership.",
    initials: "SP",
    color: "from-plasma-400 to-teal-400",
  },
  {
    name: "Sam Massaquoi",
    role: "Board, Technology",
    background: "MS Computer Science, Pace University. Former VP at JP Morgan, architect of CoIN AI.",
    initials: "SM",
    color: "from-teal-400 to-plasma-400",
  },
  {
    name: "Gaj Subudhi",
    role: "Board, Engineering",
    background: "20+ yrs Solutions Architecture. Clients include Google, Boeing, Apple, USAA, Western Union.",
    initials: "GS",
    color: "from-plasma-400 to-fire-400",
  },
  {
    name: "Peter Fiekowsky",
    role: "Advisor, Physics",
    background: "MIT physicist, 27 patents. Founder F4CR. Founded Silicon Valley's Automated Visual Inspection.",
    initials: "PF",
    color: "from-fire-300 to-plasma-400",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-subtitle mb-3">Leadership</div>
            <h2 className="section-title">
              Our Board of{" "}
              <span className="gradient-text">Directors</span>
            </h2>
          </div>
          <Link
            href="/team"
            className="btn-secondary shrink-0 self-start sm:self-auto group"
          >
            Full Board
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card-hover group p-6 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-display font-bold text-xl shadow-lg`}
                >
                  {member.initials}
                </div>
                <div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${member.color} opacity-20 blur -z-10`}
                />
              </div>

              {/* Info */}
              <h3 className="font-display font-semibold text-white text-base mb-1">
                {member.name}
              </h3>
              <div className="text-plasma-400 text-sm font-medium mb-2">
                {member.role}
              </div>
              <p className="text-white/40 text-xs leading-relaxed mb-4">
                {member.background}
              </p>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/30 hover:text-plasma-400 text-xs transition-colors duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Advisors note */}
        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm">
            Advised by MIT physicists, blockchain innovators, and global finance leaders.{" "}
            <Link
              href="/team#advisors"
              className="text-plasma-400/70 hover:text-plasma-400 transition-colors"
            >
              Meet our full board &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
