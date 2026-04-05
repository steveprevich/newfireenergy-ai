export interface COPRecord {
  tester: string;
  year: number;
  cop: number;
  source: string;
}

export interface RoadmapItem {
  year: string;
  milestone: string;
  status: "complete" | "active" | "upcoming";
}

export interface PortfolioCompany {
  slug: string;
  name: string;
  tagline: string;
  mechanism: string;
  location: string;
  founded: string;
  accentColor: string;
  description: string;
  copRecords: COPRecord[];
  techSpecs: { label: string; value: string }[];
  roadmap: RoadmapItem[];
}

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    slug: "brillouin",
    name: "Brillouin Energy",
    tagline: "Controlled Electron Capture Reaction (CECR)",
    mechanism: "Controlled Electron Capture Reaction — hydrogen loaded into a nickel lattice, stimulated by Q-pulses to produce excess heat via nuclear transmutation.",
    location: "Berkeley, CA",
    founded: "2009",
    accentColor: "#2DD4BF",
    description: "Brillouin Energy Corp. is developing a proprietary hydrogen hot tube boiler technology based on LENR. The company's Controlled Electron Capture Reaction (CECR) has been independently tested at SRI International.",
    copRecords: [
      { tester: "SRI International", year: 2017, cop: 1.6, source: "SRI International independent test report, 2017" },
    ],
    techSpecs: [
      { label: "Fuel", value: "Hydrogen / Nickel" },
      { label: "Reaction type", value: "Controlled Electron Capture" },
      { label: "Output form", value: "Heat (boiler compatible)" },
      { label: "Independent tester", value: "SRI International" },
      { label: "Verified COP", value: "1.6 (SRI, 2017)" },
      { label: "Radiation profile", value: "No harmful radiation detected" },
    ],
    roadmap: [
      { year: "2009", milestone: "Company founded, CECR theory developed", status: "complete" },
      { year: "2017", milestone: "SRI International independent test — COP 1.6 verified", status: "complete" },
      { year: "2022", milestone: "Hot tube boiler prototype testing", status: "complete" },
      { year: "2025", milestone: "Commercial boiler pilot program", status: "active" },
      { year: "2027", milestone: "Industrial heat market entry", status: "upcoming" },
    ],
  },
  {
    slug: "eng8",
    name: "ENG8 International",
    tagline: "Catalyzed Fusion · EnergiCell Technology",
    mechanism: "ENG8 describes their process as catalyzed fusion, utilizing a proprietary plasma double-layer effect to stimulate nuclear reactions within a metal lattice environment, producing excess heat.",
    location: "United Kingdom",
    founded: "2018",
    accentColor: "#00B8E6",
    description: "ENG8 International develops the EnergiCell, a modular LENR-based heat generation device. Their technology is described as catalyzed fusion, combining elements of plasma physics and lattice confinement to produce measurable excess heat.",
    copRecords: [
      { tester: "Dr. Robert Morgan (independent)", year: 2020, cop: 1.8, source: "Dr. Robert Morgan, independent UK validation, 2020" },
    ],
    techSpecs: [
      { label: "Fuel", value: "Hydrogen / Metal lattice" },
      { label: "Reaction type", value: "Catalyzed fusion / plasma double-layer" },
      { label: "Output form", value: "Heat (modular, stackable)" },
      { label: "Independent tester", value: "Dr. Robert Morgan, UK" },
      { label: "Verified COP", value: "1.8 (UK lab, 2020)" },
      { label: "Radiation profile", value: "No gamma radiation detected" },
    ],
    roadmap: [
      { year: "2018", milestone: "ENG8 founded, EnergiCell concept developed", status: "complete" },
      { year: "2020", milestone: "Dr. Robert Morgan independent UK test — COP 1.8", status: "complete" },
      { year: "2023", milestone: "EnergiCell Gen 2 prototype", status: "complete" },
      { year: "2025", milestone: "Modular commercial unit development", status: "active" },
      { year: "2028", milestone: "Grid-compatible power module deployment", status: "upcoming" },
    ],
  },
  {
    slug: "clean-planet",
    name: "Clean Planet",
    tagline: "Quantum Hydrogen Energy · Industrial Scale LENR",
    mechanism: "Clean Planet uses condensed cluster nuclear reactions in hydrogen-metal systems, developed in collaboration with Tohoku University in Japan. Their system targets industrial heat applications.",
    location: "Tokyo, Japan",
    founded: "2012",
    accentColor: "#60A5FA",
    description: "Clean Planet Inc. is a Japanese LENR company working with Tohoku University to develop quantum hydrogen energy systems for industrial heat generation. They represent one of the most institutional-grade LENR research collaborations in the world.",
    copRecords: [
      { tester: "Tohoku University", year: 2023, cop: 1.2, source: "Tohoku University collaboration, published findings, 2023" },
    ],
    techSpecs: [
      { label: "Fuel", value: "Hydrogen / Metal nanoparticles" },
      { label: "Reaction type", value: "Condensed cluster nuclear reaction" },
      { label: "Output form", value: "Industrial heat" },
      { label: "Research partner", value: "Tohoku University, Japan" },
      { label: "Reported COP", value: "1.2+ (Tohoku, 2023)" },
      { label: "Target market", value: "Industrial process heat" },
    ],
    roadmap: [
      { year: "2012", milestone: "Clean Planet founded in Tokyo", status: "complete" },
      { year: "2019", milestone: "Tohoku University research collaboration begins", status: "complete" },
      { year: "2023", milestone: "Industrial prototype tested with Tohoku — among first reported industrial-scale LENR demonstrations", status: "complete" },
      { year: "2025", milestone: "Commercial heat system pilot", status: "active" },
      { year: "2028", milestone: "Industrial scale deployment", status: "upcoming" },
    ],
  },
  {
    slug: "prometheus-reactor",
    name: "Prometheus Reactor",
    tagline: "Lattice Confinement Fusion · NASA-Aligned Research",
    mechanism: "The Prometheus Reactor concept is based on lattice confinement fusion, aligned with NASA Glenn Research Center's published work on deuterium-loaded metal systems producing nuclear reaction signatures.",
    location: "United States",
    founded: "2020",
    accentColor: "#F97316",
    description: "Prometheus Reactor is an early-stage LENR development project focused on lattice confinement fusion, the mechanism studied and published by NASA Glenn Research Center in Physical Review C (2020). The project targets modular energy applications.",
    copRecords: [
      { tester: "Internal testing", year: 2024, cop: 1.1, source: "Internal lab testing, aligned with NASA Glenn LCF methodology" },
    ],
    techSpecs: [
      { label: "Fuel", value: "Deuterium / Metal lattice" },
      { label: "Reaction type", value: "Lattice Confinement Fusion (LCF)" },
      { label: "Output form", value: "Heat / potential electricity" },
      { label: "Research alignment", value: "NASA Glenn Research Center (Physical Review C, 2020)" },
      { label: "Stage", value: "Early prototype" },
      { label: "Target", value: "Modular decentralized power" },
    ],
    roadmap: [
      { year: "2020", milestone: "Project initiated, aligned with NASA LCF publication", status: "complete" },
      { year: "2022", milestone: "Lab prototype constructed", status: "complete" },
      { year: "2024", milestone: "Initial thermal output confirmed in lab", status: "complete" },
      { year: "2025", milestone: "Independent third-party review in progress", status: "active" },
      { year: "2027", milestone: "Modular unit prototype", status: "upcoming" },
    ],
  },
];
