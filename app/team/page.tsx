import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the New Fire Energy board of directors: Wall Street veterans, Silicon Valley engineers, and global innovators united by one mission: to bring clean, abundant energy to the world.",
};

const boardMembers = [
  {
    name: "Steve Previch",
    title: "CEO & Founder",
    photo: "https://newfireenergy.us/wp-content/uploads/2021/09/SteveP.webp",
    gradient: "from-plasma-500 to-teal-500",
    bio: "Steve Previch is a seasoned senior executive with 20 years of experience in the Wall Street financial industry, particularly within the securities sector. He has extensive expertise in directing operations for international corporations and multi-million-dollar enterprises, with a proven track record in strategic planning and operational performance enhancement. Currently, Steve serves as the CEO of New Fire Energy Incorporated, a pioneering energy private equity fund that supports cutting-edge energy technologies, with a specific focus on low energy nuclear reactions. His deep experience collaborating with CEOs, labs, physics professors, and energy technology experts has been instrumental in driving innovation in this emerging field.",
    credentials: ["Wall Street Securities (20 yrs)", "International Corporate Operations", "LENR Energy Technology", "Strategic Planning"],
  },
  {
    name: "Sam Massaquoi",
    title: "Board Member, Technology & AI",
    photo: "https://newfireenergy.us/wp-content/uploads/2025/02/Sam-M.png",
    gradient: "from-teal-500 to-plasma-500",
    bio: "Mr. Sam Massaquoi holds a Master of Science degree in Computer Science & Software Engineering from Pace University (NY) and is an inductee of the National Who's Who Registry and Biltmore's Who's Who Business Executives in America. He served as Vice President and Technical Lead at JP Morgan, the largest investment bank in the United States, where he was one of the lead architects for CoIN (Contract Intelligence), the firm's first-ever AI & Machine Learning software, covered by Bloomberg, Harvard Business Review, and the Wall Street Journal. He has also facilitated successful launches for American Express, JetBlue, ADP, Getty Images, Citi Private Bank, Google Zagat, and A&E Television Network.",
    credentials: ["MS Computer Science, Pace University", "VP Technical Lead, JP Morgan", "CoIN AI Architect", "National Who's Who Registry"],
  },
  {
    name: "Michael Alvarez",
    title: "Board Member, Finance & Capital",
    photo: "https://newfireenergy.us/wp-content/uploads/2021/09/MichaelA.webp",
    gradient: "from-fire-400 to-plasma-500",
    bio: "Mr. Michael Alvarez is an experienced professional with a focus on project finance syndication for startups since 2009. He is currently the domestic sales manager and capital consultant for Dellepere Enterprises, and the managing member of Capital Funding Realty, specializing in securing investor financing through real estate. Michael is an active investor in blockchain infrastructures delivering financial services including algo trading, global currency transfers, and commodity-backed stable coins. His professional network comprises investment bankers, angel investors, C-level board members, and high-net-worth individuals.",
    credentials: ["Project Finance, 2009–present", "Capital Funding Realty", "Blockchain Infrastructure Investor", "Green Technology Patents"],
  },
  {
    name: "Gaj Subudhi",
    title: "Board Member, Solutions Architecture",
    photo: "https://newfireenergy.us/wp-content/uploads/2021/09/GajP.webp",
    gradient: "from-plasma-500 to-teal-400",
    bio: "Gaj is a Solutions Architect and Engineering Lead with 20+ years of experience in enterprise applications across Financial Services, Healthcare, Retail, IoT, Aviation, and Digital Advertising. He has delivered next-generation solution architecture on cloud, data platforms, and AI/ML decision-making for Fortune 50 clients including Abbott Labs, USAA, Google, Boeing, Western Union, Symantec, and Apple. He is currently engaged in Distributed Ledger Technologies, AI/ML, Blockchain as a Service, and Microservices-based application design.",
    credentials: ["20+ yrs Enterprise Architecture", "Fortune 50: Google, Apple, Boeing", "AI/ML & Blockchain Solutions", "IoT & Distributed Ledger"],
  },
  {
    name: "George Miller",
    title: "Board Member, Global Partnerships",
    photo: "https://newfireenergy.us/wp-content/uploads/2021/09/GeorgeM.webp",
    gradient: "from-teal-400 to-fire-400",
    bio: "Mr. George Miller began his career in real estate in 1995 and quickly became an international public speaker, creator of \"Wealth Masters Live\" entrepreneur training courses. He has built thousands of relationships with family offices, prime ministers, financial leaders, UN delegates, and high-net-worth families globally. George has found his calling in creating an investment bank utilizing blockchain technologies, leveraging his vast global network to help accelerate the LENR/ZPE energy revolution.",
    credentials: ["Real Estate (1995–present)", "International Public Speaker", "Global Family Office Network", "Blockchain Investment Banking"],
  },
  {
    name: "Maria Lozovaia",
    title: "Board Member, Administration",
    photo: "https://newfireenergy.us/wp-content/uploads/2021/09/mariaL.webp",
    gradient: "from-plasma-400 to-fire-300",
    bio: "Mrs. Maria Lozovaia is a service-oriented administrator with a 15-year background in business environments. Her core competencies include office management, client relationships, and excellent communication and time-management skills. She handles tasks with accuracy and efficiency, and is multilingual in 4 languages, serving as a translator in high-profile international transactions. Her global perspective and administrative expertise are vital to New Fire Energy's operations.",
    credentials: ["15 yrs Business Administration", "Multilingual in 4 Languages", "International Transaction Translator", "Client Relations Management"],
  },
];

const advisors = [
  {
    name: "Peter Fiekowsky",
    title: "Scientific Advisor, Physics",
    photo: "https://newfireenergy.us/wp-content/uploads/2021/09/PeterF.webp",
    gradient: "from-plasma-500 to-teal-400",
    bio: "Mr. Peter Fiekowsky is an MIT-educated physicist with 27 patents, a serial entrepreneur, and clean energy advocate. He founded Silicon Valley software company Automated Visual Inspection in 1984, and later the Foundation for Climate Restoration (F4CR), the Methane Action Group, and the Methane Oxidation Corporation. His work focuses on scalable, science-backed solutions to global energy and climate challenges. Peter brings rigorous scientific thinking and a deep understanding of clean energy technology evaluation to New Fire Energy's advisory board.",
    credentials: ["MIT Physics", "27 Patents", "Founder, Foundation for Climate Restoration", "Silicon Valley Serial Entrepreneur"],
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-subtitle mb-4">Leadership</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Board of <span className="gradient-text">Directors</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            Wall Street veterans, Silicon Valley engineers, and global innovators
            united by one mission: to bring clean, abundant LENR energy to the world.
          </p>
        </div>

        {/* Board grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {boardMembers.map((member) => (
            <div key={member.name} className="glass-card p-8 flex gap-6">
              <div className="shrink-0">
                <div className="relative">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-2xl object-cover shadow-xl"
                  />
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-20 blur -z-10`} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-xl font-bold text-white mb-0.5">{member.name}</h2>
                <p className="text-plasma-400 text-sm font-medium mb-3">{member.title}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span key={cred} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div id="advisors" className="mb-16">
          <div className="text-center mb-12">
            <div className="section-subtitle mb-3">Scientific Advisory</div>
            <h2 className="font-display text-3xl font-bold text-white">Advisors</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="glass-card p-8 flex gap-6">
                <div className="shrink-0">
                  <div className="relative">
                    <Image
                      src={advisor.photo}
                      alt={advisor.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-2xl object-cover shadow-xl"
                    />
                    <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${advisor.gradient} opacity-20 blur -z-10`} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-xl font-bold text-white mb-0.5">{advisor.name}</h2>
                  <p className="text-teal-400 text-sm font-medium mb-3">{advisor.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{advisor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {advisor.credentials.map((cred) => (
                      <span key={cred} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-gradient rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-plasma-500/5 via-teal-500/5 to-plasma-500/5 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Advancing the Future of Clean Energy
            </h3>
            <p className="text-white/50 max-w-xl mx-auto text-sm mb-6">
              New Fire Energy seeks accredited investors who share our vision of a decentralized, zero-carbon energy future.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/investors" className="btn-fire">Become an Investor</Link>
              <Link href="/contact" className="btn-secondary">
                <Mail className="w-4 h-4" />
                Contact the Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
