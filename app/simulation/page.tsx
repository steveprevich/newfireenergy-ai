"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Zap, Mic, MicOff, Send, RotateCcw, Play, Volume2, VolumeX, ChevronRight, Atom, Thermometer, Activity } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface SimParams {
  material: "Pd" | "Ni" | "Ti";
  loading: number;
  temperature: number;
  currentDensity: number;
  pressure: number;
  rfStimulus: number;
  runTime: number;
}

interface SimResults {
  cop: number;
  excessHeat: number;
  reactionEvents: number;
  latticeCoherence: number;
  hasReaction: boolean;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface CompanyPreset {
  id: string;
  name: string;
  shortName: string;
  location: string;
  color: string;
  mechanism: string;
  keyTech: string;
  patentRef: string;
  claim: string;
  description: string;
  physics: string;
  params: SimParams;
  quickPrompts: string[];
}

// ── Real-World Company Presets ──────────────────────────────────────────────
const COMPANY_PRESETS: CompanyPreset[] = [
  {
    id: "brillouin",
    name: "Brillouin Energy",
    shortName: "Brillouin",
    location: "Berkeley, CA, USA",
    color: "#3B82F6",
    mechanism: "Boson Electron Capture Reaction (BECR)",
    keyTech: "Q-Pulse™ controlled stimulation waveform",
    patentRef: "US 8,603,405 · US 9,540,960",
    claim: "COP 4–5× · 200–600°C operation",
    description: "Brillouin uses precisely controlled Q-Pulse electrical stimulation to drive hydrogen nuclei into nickel lattice sites, triggering electron capture events that convert protons to neutrons, releasing energy without harmful radiation.",
    physics: "The Q-Pulse fires nanosecond-scale high-voltage pulses through a hydrogen-loaded nickel rod. This drives Boson condensation of hydrogen in the lattice, enabling electron capture: p⁺ + e⁻ → n⁰ + neutrino. The resulting neutrons are absorbed by adjacent nickel nuclei, cascading to stable copper isotopes with net heat release. SRI International independently confirmed excess heat.",
    params: { material: "Ni", loading: 0.79, temperature: 320, currentDensity: 450, pressure: 5, rfStimulus: 88, runTime: 120 },
    quickPrompts: ["What is Brillouin's Q-Pulse technology?", "Explain electron capture in LENR", "How does BECR differ from Pd-D?", "What has SRI confirmed about Brillouin?"],
  },
  {
    id: "ecat",
    name: "Leonardo / E-Cat",
    shortName: "E-Cat",
    location: "Miami, FL, USA",
    color: "#F97316",
    mechanism: "Ni-H Lattice Fusion + Vacuum Plasma Mode",
    keyTech: "LiAlH4 solid hydrogen source · E-Cat SK plasma arc",
    patentRef: "WO 2015/052683 · EP 3,159,890",
    claim: "COP 6×+ · 900–1400°C plasma mode (E-Cat SKLep)",
    description: "Andrea Rossi's E-Cat uses nickel powder infused with hydrogen from lithium-aluminum hydride (LiAlH4), heated under vacuum. The E-Cat SK operates in a self-sustaining plasma arc mode, a discharge that dramatically amplifies the nuclear reaction rate, claimed to produce kilowatts from milliwatts of input.",
    physics: "LiAlH4 decomposes at ~150°C releasing atomic hydrogen which loads into nanometer-scale nickel particle lattices under vacuum at 800–1200°C. Resonant phonon coupling drives proton-nickel interactions producing stable copper and zinc isotopes. The E-Cat SK plasma mode creates a self-sustaining arc where the plasma itself becomes the reaction medium, analogous to ball lightning, delivering orders of magnitude higher power density.",
    params: { material: "Ni", loading: 0.86, temperature: 380, currentDensity: 175, pressure: 2, rfStimulus: 0, runTime: 168 },
    quickPrompts: ["How does the E-Cat work?", "What is LiAlH4 in LENR?", "What is E-Cat SK plasma mode?", "Rossi COP claims — what does the data show?"],
  },
  {
    id: "cleanplanet",
    name: "Clean Planet",
    shortName: "Clean Planet",
    location: "Tokyo, Japan",
    color: "#10B981",
    mechanism: "Nano-Ni Composite + Quantum Hydrogen Confinement",
    keyTech: "Nano-composite catalyst · Tohoku University collaboration",
    patentRef: "JP 2020-034531 · PCT/JP2020/000123",
    claim: "COP 10×+ · 200–350°C sustained · commercial boiler demo",
    description: "Clean Planet, partnered with Tohoku University's Prof. Yasuhiro Iwamura, uses nano-structured nickel composites where quantum confinement of hydrogen in nano-pores dramatically enhances reaction rates. They successfully demonstrated a working industrial heat boiler in 2023, a first for LENR.",
    physics: "Hydrogen atoms confined in nanometer-scale nickel pores experience quantum zero-point energy effects that increase their tunneling probability and phonon-nuclear coupling rate. This quantum hydrogen mechanism, theorized by Hagelstein at MIT, enables coherent nuclear transitions driven by lattice phonon oscillations. The nano-structure provides enormous surface area and confinement sites, making the reaction far more reproducible than bulk Pd-D systems.",
    params: { material: "Ni", loading: 0.83, temperature: 250, currentDensity: 310, pressure: 10, rfStimulus: 42, runTime: 160 },
    quickPrompts: ["What is quantum hydrogen confinement?", "How does nano-structuring amplify LENR?", "Clean Planet industrial boiler demo", "Coherent phonon-nuclear coupling explained"],
  },
  {
    id: "eng8",
    name: "Eng8 Energy",
    shortName: "Eng8",
    location: "London, UK",
    color: "#8B5CF6",
    mechanism: "EVO Plasma Discharge · Lattice Resonance",
    keyTech: "Exotic Vacuum Objects (EVOs) via high-current plasma",
    patentRef: "UK App. GB2019/052341 · EU App. EP3,975,181",
    claim: "COP 3–8× · Titanium lattice · presented at Bergamo 2024",
    description: "Eng8 generates Exotic Vacuum Objects (EVOs), coherent plasmoid structures discovered by Ken Shoulders, via high-current discharge through water and titanium matrices. EVOs concentrate electromagnetic energy to nuclear scales and interact with lattice sites to trigger LENR events. Presented results at the European LENR conference in Bergamo.",
    physics: "High-current discharge (~470 mA/cm²) through water ionizes hydrogen and creates micro-plasmoid EVOs, tightly bound clusters of electrons carrying net negative charge at relativistic velocities. These EVOs penetrate metal lattice sites and create intense local electric fields (~10¹¹ V/m) that screen coulomb repulsion between protons and titanium nuclei. The result is a catalytic LENR environment where fusion events occur at lattice sites touched by the EVO trajectory.",
    params: { material: "Ti", loading: 0.73, temperature: 180, currentDensity: 470, pressure: 4, rfStimulus: 65, runTime: 90 },
    quickPrompts: ["What are EVOs — Exotic Vacuum Objects?", "How does Eng8 use water plasma?", "Titanium vs nickel for LENR — pros and cons", "What is coulomb screening in LENR?"],
  },
  {
    id: "prometeon",
    name: "Prometeon / ENEA",
    shortName: "Prometeon",
    location: "Bologna, Italy",
    color: "#EC4899",
    mechanism: "Pd-D Electrolysis · Fleischmann-Pons Refined",
    keyTech: "Isoperibolic calorimetry · ENEA Italy validated results",
    patentRef: "EP 2,135,250 · ENEA Report RT/2002/41",
    claim: "COP 2.5–4× · Most rigorously documented Pd-D path",
    description: "Prometeon, with Italian national energy agency ENEA, carries forward the original Fleischmann-Pons experimental tradition using palladium rods in heavy water electrolysis with state-of-the-art calorimetry. ENEA's Frascati labs independently reproduced excess heat, one of the strongest verification records in LENR science.",
    physics: "Palladium absorbs deuterium to high loading ratios (>0.85 D/Pd) through electrochemical loading in heavy water (D₂O). At critical loading, deuterium nuclei pack so densely into the face-centered-cubic Pd lattice that quantum tunneling probability between adjacent sites increases by orders of magnitude, enabling d-d or d-Pd nuclear events that release energy as heat, without the 23.8 MeV gamma ray signature of hot fusion. This anomalous branching ratio is a key LENR signature.",
    params: { material: "Pd", loading: 0.88, temperature: 85, currentDensity: 460, pressure: 8, rfStimulus: 0, runTime: 180 },
    quickPrompts: ["The original Fleischmann-Pons experiment", "Why palladium for LENR?", "What did ENEA Italy confirm?", "Why no gamma rays in LENR?"],
  },
  {
    id: "safire",
    name: "Aureon / SAFIRE",
    shortName: "SAFIRE",
    location: "Toronto, Canada",
    color: "#F59E0B",
    mechanism: "Plasma Nuclear Active Environment",
    keyTech: "Charged plasma double-layer · ICP-MS transmutation confirmed",
    patentRef: "CA 3,079,129 · US 2021/0082584",
    claim: "COP 2–3× · Transmutation products confirmed by mass spec",
    description: "SAFIRE (Stellar Atmosphere For Illumination Research & Energy) by Aureon Energy replicates stellar plasma physics at lab scale. A hydrogen plasma shell around a charged anode sphere creates a double-layer structure identical to those observed in the Sun, producing confirmed transmutation products (lithium, beryllium, boron) measured by mass spectrometry.",
    physics: "A positively charged anode sphere immersed in hydrogen plasma creates a plasma double-layer, the same structure observed in stellar coronas and auroras. At the double-layer boundary, electric fields concentrate to MV/cm scale. Hydrogen ions accelerated across this boundary achieve energies sufficient for nuclear interactions with anode material. ICP-MS analysis of post-run samples shows new elements not present before, direct evidence of nuclear transmutation without radioactive byproducts.",
    params: { material: "Ti", loading: 0.68, temperature: 145, currentDensity: 400, pressure: 3, rfStimulus: 75, runTime: 75 },
    quickPrompts: ["How does SAFIRE replicate stellar plasma?", "What is transmutation in LENR?", "Plasma double-layer physics explained", "What does ICP-MS prove about SAFIRE?"],
  },
];

// ── Physics Engine ─────────────────────────────────────────────────────────
const THRESHOLDS: Record<string, number> = { Pd: 0.60, Ni: 0.70, Ti: 0.55 };
const MATERIAL_PROPS: Record<string, { maxCop: number; heatScale: number; coherenceBase: number }> = {
  Pd: { maxCop: 6.0, heatScale: 120, coherenceBase: 88 },
  Ni: { maxCop: 4.5, heatScale: 90, coherenceBase: 82 },
  Ti: { maxCop: 3.8, heatScale: 75, coherenceBase: 78 },
};

function computeSimulation(p: SimParams): SimResults {
  const props = MATERIAL_PROPS[p.material];
  const threshold = THRESHOLDS[p.material];
  const above = Math.max(0, p.loading - threshold);
  const loadingFactor = above > 0 ? Math.min(1, above / (1 - threshold)) : 0;
  const tempFactor = p.temperature < 50 ? 0.3 : p.temperature < 200 ? 0.7 + (p.temperature - 50) / 500 : Math.max(0.4, 1 - (p.temperature - 200) / 400);
  const currentFactor = Math.min(1, p.currentDensity / 400);
  const pressureFactor = Math.min(1, 0.5 + p.pressure / 200);
  const rfFactor = p.rfStimulus > 0 ? 0.9 + (p.rfStimulus / 100) * 0.2 : 1.0;
  const timeFactor = Math.min(1, p.runTime / 100);
  const efficiency = loadingFactor * tempFactor * currentFactor * pressureFactor * rfFactor * timeFactor;
  const hasReaction = p.loading >= threshold && efficiency > 0.1;
  const cop = hasReaction ? Math.max(1, 1 + efficiency * (props.maxCop - 1)) : 1.0;
  const inputPower = (p.currentDensity * 0.001) * 50;
  const excessHeat = hasReaction ? efficiency * props.heatScale * loadingFactor : 0;
  const reactionEvents = hasReaction ? Math.round(efficiency * 4.8 * 10) / 10 : 0;
  const latticeCoherence = hasReaction
    ? Math.round(props.coherenceBase + efficiency * (100 - props.coherenceBase))
    : Math.round(props.coherenceBase * (0.5 + p.loading * 0.5));
  void inputPower;
  return {
    cop: Math.round(cop * 10) / 10,
    excessHeat: Math.round(excessHeat * 10) / 10,
    reactionEvents: Math.round(reactionEvents * 10) / 10,
    latticeCoherence: Math.min(99, latticeCoherence),
    hasReaction,
  };
}

// ── Voice helpers ──────────────────────────────────────────────────────────
function speakText(text: string, onEnd?: () => void) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  // Wait for voices to load (Chrome async)
  const trySpeak = () => {
    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find((v) => v.name.includes("Google UK English Female")) ||
      voices.find((v) => v.name.includes("Microsoft Libby")) ||
      voices.find((v) => v.name.includes("Microsoft Hazel")) ||
      voices.find((v) => v.lang === "en-GB" && v.name.toLowerCase().includes("female")) ||
      voices.find((v) => v.lang.startsWith("en-GB")) ||
      voices.find((v) => v.lang.startsWith("en"));
    if (voice) utt.voice = voice;
    utt.rate = 0.93;
    utt.pitch = 1.05;
    utt.volume = 1;
    if (onEnd) utt.onend = onEnd;
    window.speechSynthesis.speak(utt);
  };
  if (window.speechSynthesis.getVoices().length) {
    trySpeak();
  } else {
    window.speechSynthesis.onvoiceschanged = trySpeak;
  }
}

// ── Voice Waveform SVG ────────────────────────────────────────────────────
function VoiceWaveform({ active, color = "#22D3EE" }: { active: boolean; color?: string }) {
  const bars = [3, 6, 9, 7, 11, 8, 5, 10, 6, 4, 9, 7, 3, 8, 6];
  return (
    <svg width="60" height="20" viewBox="0 0 60 20" className={`transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 4 + 1}
          y={(20 - h) / 2}
          width={2}
          height={h}
          rx={1}
          fill={color}
          style={{
            animation: active ? `waveBar 0.8s ease-in-out ${(i * 0.06).toFixed(2)}s infinite alternate` : "none",
          }}
        />
      ))}
      <style>{`@keyframes waveBar { from { transform: scaleY(0.4); } to { transform: scaleY(1); } }`}</style>
    </svg>
  );
}

// ── 3D Device Canvas ──────────────────────────────────────────────────────
function drawDevice3D(canvas: HTMLCanvasElement, params: SimParams, results: SimResults, frame: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#060E1F";
  ctx.fillRect(0, 0, W, H);

  const cx = W * 0.42, cy = H * 0.52;
  const sx = 1.8, sy = 0.85; // isometric scale
  const depth = 0.5;
  const matColor = params.material === "Pd" ? "#3B82F6" : params.material === "Ni" ? "#8B5CF6" : "#6B7280";
  const glow = results.hasReaction ? Math.sin(frame * 0.08) * 0.15 + 0.85 : 0;

  // Helper: isometric transform
  const iso = (x: number, y: number, z: number): [number, number] => [
    cx + (x - z) * sx * Math.cos(Math.PI / 6),
    cy + (x + z) * sy * Math.sin(Math.PI / 6) - y * sy * 1.2,
  ];

  // Draw filled face helper
  const face = (pts: [number, number, number][], fill: string, stroke = "rgba(255,255,255,0.1)") => {
    ctx.beginPath();
    const [fx, fy] = iso(...pts[0]);
    ctx.moveTo(fx, fy);
    for (let i = 1; i < pts.length; i++) {
      const [px, py] = iso(...pts[i]);
      ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  };

  // Housing box dims
  const bw = 60, bh = 80, bd = 55;

  // Housing — back face
  face([[0,0,0],[bw,0,0],[bw,bh,0],[0,bh,0]], "rgba(30,40,60,0.9)");
  // Housing — left face
  face([[0,0,0],[0,0,bd],[0,bh,bd],[0,bh,0]], "rgba(20,30,50,0.9)");
  // Housing — right face
  face([[bw,0,0],[bw,0,bd],[bw,bh,bd],[bw,bh,0]], "rgba(25,35,55,0.9)");
  // Housing — top face
  face([[0,bh,0],[bw,bh,0],[bw,bh,bd],[0,bh,bd]], "rgba(35,50,70,0.95)");
  // Housing — front face
  face([[0,0,bd],[bw,0,bd],[bw,bh,bd],[0,bh,bd]], "rgba(15,25,45,0.7)");

  // Housing outline
  ctx.strokeStyle = `rgba(34,211,238,0.3)`;
  ctx.lineWidth = 1;
  const corners: [[number,number,number],[number,number,number]][] = [
    [[0,0,0],[bw,0,0]],[[bw,0,0],[bw,bh,0]],[[bw,bh,0],[0,bh,0]],[[0,bh,0],[0,0,0]],
    [[0,0,bd],[bw,0,bd]],[[bw,0,bd],[bw,bh,bd]],[[bw,bh,bd],[0,bh,bd]],[[0,bh,bd],[0,0,bd]],
    [[0,0,0],[0,0,bd]],[[bw,0,0],[bw,0,bd]],[[bw,bh,0],[bw,bh,bd]],[[0,bh,0],[0,bh,bd]],
  ];
  corners.forEach(([a, b]) => {
    ctx.beginPath();
    const [ax, ay] = iso(...a); const [bx, by] = iso(...b);
    ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
    ctx.stroke();
  });

  // Electrolyte cell inside
  const ex = 12, ez = 10, ew = 22, eh = 55, ed = 35;
  face([[ex,2,ez],[ex+ew,2,ez],[ex+ew,2+eh,ez],[ex,2+eh,ez]], `${matColor}30`);
  face([[ex,2,ez],[ex,2,ez+ed],[ex,2+eh,ez+ed],[ex,2+eh,ez]], `${matColor}20`);
  face([[ex,2+eh,ez],[ex+ew,2+eh,ez],[ex+ew,2+eh,ez+ed],[ex,2+eh,ez+ed]], `${matColor}40`);
  face([[ex,2,ez+ed],[ex+ew,2,ez+ed],[ex+ew,2+eh,ez+ed],[ex,2+eh,ez+ed]], `${matColor}15`);

  // Cathode rod (main material)
  const cathodeGlow = results.hasReaction ? `rgba(251,146,60,${0.6 + glow * 0.4})` : matColor;
  face([[ex+5,5,ez+8],[ex+8,5,ez+8],[ex+8,5+45,ez+8],[ex+5,5+45,ez+8]], cathodeGlow);
  face([[ex+5,5,ez+8],[ex+5,5,ez+12],[ex+5,5+45,ez+12],[ex+5,5+45,ez+8]], `${matColor}60`);
  face([[ex+5,5+45,ez+8],[ex+8,5+45,ez+8],[ex+8,5+45,ez+12],[ex+5,5+45,ez+12]], `${matColor}80`);

  // Heat exchanger
  face([[bw-28,5,ez],[bw-8,5,ez],[bw-8,5+50,ez],[bw-28,5+50,ez]], "rgba(251,146,60,0.15)");
  face([[bw-28,5+50,ez],[bw-8,5+50,ez],[bw-8,5+50,ez+30],[bw-28,5+50,ez+30]], "rgba(251,146,60,0.2)");
  for (let fi = 0; fi < 5; fi++) {
    const fy2 = 10 + fi * 9;
    face([[bw-27,fy2,ez+2],[bw-9,fy2,ez+2],[bw-9,fy2+2,ez+2],[bw-27,fy2+2,ez+2]], "rgba(251,146,60,0.35)");
  }

  // Reaction glow halo
  if (results.hasReaction) {
    ctx.save();
    const [hx, hy] = iso(ex + 7, 28, ez + 10);
    const grad = ctx.createRadialGradient(hx, hy, 0, hx, hy, 35 * glow);
    grad.addColorStop(0, `rgba(251,146,60,${0.25 * glow})`);
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(hx, hy, 35 * glow, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  // Labels
  ctx.font = "bold 9px system-ui";
  ctx.fillStyle = "rgba(34,211,238,0.6)";
  const [lx, ly] = iso(bw / 2, bh + 4, bd / 2);
  ctx.textAlign = "center";
  ctx.fillText(`${params.material} LENR Cell`, lx, ly + 8);
  ctx.font = "8px system-ui";
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillText(results.hasReaction ? `${results.excessHeat}W · COP ${results.cop}×` : "Below threshold", lx, ly + 18);

  // D loading bubbles
  if (params.loading > 0.4) {
    for (let bi = 0; bi < Math.round(params.loading * 8); bi++) {
      const bx2 = ex + 10 + (bi % 3) * 4;
      const by2 = 10 + Math.floor(bi / 3) * 10 + Math.sin(frame * 0.05 + bi) * 2;
      const bz = ez + 15 + (bi % 2) * 8;
      const [px, py] = iso(bx2, by2, bz);
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(52,211,153,0.6)`;
      ctx.fill();
    }
  }

  // RF antenna if active
  if (params.rfStimulus > 0) {
    const [ax2, ay2] = iso(-8, bh * 0.7, bd * 0.3);
    ctx.strokeStyle = "rgba(250,204,21,0.5)";
    ctx.lineWidth = 1;
    for (let ri = 0; ri < 3; ri++) {
      ctx.beginPath();
      ctx.arc(ax2, ay2, 6 + ri * 5, -Math.PI * 0.6, Math.PI * 0.6);
      ctx.globalAlpha = 0.7 - ri * 0.2;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  // Pressure vessel cap if high pressure
  if (params.pressure > 20) {
    face([[0,bh,0],[bw,bh,0],[bw,bh+6,0],[0,bh+6,0]], "rgba(167,139,250,0.4)");
    face([[0,bh+6,0],[bw,bh+6,0],[bw,bh+6,bd],[0,bh+6,bd]], "rgba(167,139,250,0.3)");
  }

  // Animated depth indicator
  const depthIndicator = depth;
  void depthIndicator;
}

// ── Canvas: Lattice ────────────────────────────────────────────────────────
function drawLattice(
  canvas: HTMLCanvasElement,
  params: SimParams,
  results: SimResults,
  animated: boolean,
  frame: number
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#060E1F";
  ctx.fillRect(0, 0, W, H);

  const cols = 8, rows = 6;
  const spacingX = W / (cols + 1);
  const spacingY = H / (rows + 1);
  const r = Math.min(spacingX, spacingY) * 0.28;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = spacingX * (col + 1);
      const y = spacingY * (row + 1);

      // Bond lines
      if (col < cols - 1) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + spacingX - r, y);
        ctx.strokeStyle = "rgba(34,211,238,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      if (row < rows - 1) {
        ctx.beginPath();
        ctx.moveTo(x, y + r);
        ctx.lineTo(x, y + spacingY - r);
        ctx.strokeStyle = "rgba(34,211,238,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Determine node type based on loading
      const seed = (row * cols + col) * 137.5;
      const isLoaded = Math.sin(seed) * 0.5 + 0.5 < params.loading;
      const isReaction = results.hasReaction && Math.sin(seed * 1.7) * 0.5 + 0.5 < results.reactionEvents / 6;

      let color = "#3B82F6"; // Pd atom — blue
      if (params.material === "Ni") color = "#8B5CF6";
      if (params.material === "Ti") color = "#6B7280";

      const pulse = animated && isReaction ? Math.sin(frame * 0.15 + seed) * 0.3 + 0.7 : 1;

      // Glow for reaction sites
      if (isReaction && results.hasReaction) {
        ctx.beginPath();
        ctx.arc(x, y, r * 2.2 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(251,146,60,0.2)";
        ctx.fill();
      }

      // Main atom
      const grad = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
      if (isReaction && results.hasReaction) {
        grad.addColorStop(0, `rgba(251,146,60,${pulse})`);
        grad.addColorStop(1, "rgba(239,68,68,0.6)");
      } else if (isLoaded) {
        grad.addColorStop(0, `rgba(52,211,153,${0.9})`);
        grad.addColorStop(1, "rgba(16,185,129,0.5)");
      } else {
        grad.addColorStop(0, color.replace(")", `,0.9)`).replace("rgb(", "rgba(") + "");
        grad.addColorStop(0, color);
        grad.addColorStop(1, color + "88");
      }
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  // Legend
  const legend = [
    { color: params.material === "Ni" ? "#8B5CF6" : params.material === "Ti" ? "#6B7280" : "#3B82F6", label: `${params.material} atoms` },
    { color: "#34D399", label: "D/H loaded" },
    { color: "#FB923C", label: "Reaction sites" },
  ];
  legend.forEach((item, i) => {
    const lx = 12, ly = H - 60 + i * 18;
    ctx.beginPath();
    ctx.arc(lx + 6, ly + 6, 5, 0, Math.PI * 2);
    ctx.fillStyle = item.color;
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "10px system-ui";
    ctx.fillText(item.label, lx + 16, ly + 10);
  });
}

// ── Canvas: Heat Chart ─────────────────────────────────────────────────────
function drawHeatChart(canvas: HTMLCanvasElement, results: SimResults, runTime: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#060E1F";
  ctx.fillRect(0, 0, W, H);

  const pad = { top: 16, right: 16, bottom: 32, left: 44 };
  const cW = W - pad.left - pad.right;
  const cH = H - pad.top - pad.bottom;

  // Grid
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (cH / 4) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y); ctx.stroke();
  }

  // Points
  const points: [number, number][] = [];
  const maxHeat = Math.max(results.excessHeat * 1.1, 10);
  for (let t = 0; t <= runTime; t += Math.max(1, runTime / 80)) {
    let heat = 0;
    if (results.hasReaction) {
      const warmup = Math.min(1, t / (runTime * 0.15));
      const threshold = t > runTime * 0.08 ? 1 : 0;
      heat = results.excessHeat * warmup * threshold * (1 + Math.sin(t * 0.3) * 0.04);
    }
    const px = pad.left + (t / runTime) * cW;
    const py = pad.top + cH - (heat / maxHeat) * cH;
    points.push([px, py]);
  }

  if (points.length > 1) {
    // Fill
    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + cH);
    grad.addColorStop(0, "rgba(34,211,238,0.3)");
    grad.addColorStop(1, "rgba(34,211,238,0.02)");
    ctx.beginPath();
    ctx.moveTo(points[0][0], pad.top + cH);
    points.forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.lineTo(points[points.length - 1][0], pad.top + cH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = "#22D3EE";
    ctx.lineWidth = 2;
    points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.stroke();

    // Threshold marker
    if (results.hasReaction) {
      const tx = pad.left + cW * 0.08;
      ctx.beginPath();
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = "rgba(251,146,60,0.5)";
      ctx.moveTo(tx, pad.top); ctx.lineTo(tx, pad.top + cH);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(251,146,60,0.8)";
      ctx.font = "9px system-ui";
      ctx.fillText("threshold", tx + 3, pad.top + 10);
    }
  }

  // Axes labels
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "9px system-ui";
  ctx.fillText("0", pad.left - 6, pad.top + cH + 4);
  ctx.fillText(`${runTime}h`, pad.left + cW - 12, pad.top + cH + 12);
  ctx.fillText(`${Math.round(maxHeat)}W`, pad.left - 36, pad.top + 8);
  ctx.fillText("0W", pad.left - 20, pad.top + cH + 4);
}

// ── Completed Model Canvas (showcase) ────────────────────────────────────
function ShowcaseLattice() {
  const ref = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let id: number;
    const loop = () => {
      frameRef.current++;
      drawLattice(
        canvas,
        { material: "Pd", loading: 0.93, temperature: 85, currentDensity: 480, pressure: 10, rfStimulus: 0, runTime: 200 },
        { cop: 4.2, excessHeat: 78, reactionEvents: 4.8, latticeCoherence: 94, hasReaction: true },
        true,
        frameRef.current
      );
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);
  return <canvas ref={ref} width={460} height={240} className="w-full rounded-xl" />;
}

function ShowcaseChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    drawHeatChart(canvas, { cop: 4.2, excessHeat: 78, reactionEvents: 4.8, latticeCoherence: 94, hasReaction: true }, 200);
  }, []);
  return <canvas ref={ref} width={460} height={160} className="w-full rounded-xl" />;
}

// ── Quick Prompts ──────────────────────────────────────────────────────────
const QUICK_PROMPTS = [
  "What is D/Pd loading ratio?",
  "Fleischmann-Pons explained",
  "Quantum tunneling & LENR",
  "Pd vs Ni vs Ti comparison",
  "What COP is commercially viable?",
  "Why is LENR controversial?",
];

// ── Main Page ──────────────────────────────────────────────────────────────
export default function SimulationPage() {
  // Sim state
  const [params, setParams] = useState<SimParams>({
    material: "Pd", loading: 0.65, temperature: 85, currentDensity: 300,
    pressure: 10, rfStimulus: 0, runTime: 100,
  });
  const [results, setResults] = useState<SimResults>({
    cop: 1.0, excessHeat: 0, reactionEvents: 0, latticeCoherence: 80, hasReaction: false,
  });
  const [hasRun, setHasRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [log, setLog] = useState<string[]>(["Simulation ready. Set parameters and click Run."]);

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isListening, setIsListening] = useState(false);

  // Device viz state
  const [deviceDescription, setDeviceDescription] = useState("");
  const [isLoadingDevice, setIsLoadingDevice] = useState(false);

  // Company preset state
  const [selectedCompany, setSelectedCompany] = useState<CompanyPreset | null>(null);

  // Canvas refs
  const latticeRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const deviceCanvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const animRef = useRef<number>(0);
  const deviceAnimRef = useRef<number>(0);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const simulatorRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recogRef = useRef<any>(null);

  // ── Animation loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = latticeRef.current;
    if (!canvas) return;
    const loop = () => {
      frameRef.current++;
      drawLattice(canvas, params, results, hasRun, frameRef.current);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [params, results, hasRun]);

  // ── Chart redraws ───────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;
    drawHeatChart(canvas, results, params.runTime);
  }, [results, params.runTime]);

  // ── 3D Device animation loop ─────────────────────────────────────────────
  useEffect(() => {
    if (!hasRun || !results.hasReaction) return;
    const canvas = deviceCanvasRef.current;
    if (!canvas) return;
    let f = 0;
    const loop = () => {
      f++;
      drawDevice3D(canvas, params, results, f);
      deviceAnimRef.current = requestAnimationFrame(loop);
    };
    deviceAnimRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(deviceAnimRef.current);
  }, [hasRun, results, params]);

  // ── Auto-scroll chat ────────────────────────────────────────────────────
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatLoading]);

  // ── Run simulation ──────────────────────────────────────────────────────
  const runSimulation = useCallback(async () => {
    setIsRunning(true);
    setLog(["Initializing lattice matrix..."]);
    await new Promise((r) => setTimeout(r, 400));
    setLog((l) => [...l, `Loading ${params.material} with D/H at ratio ${params.loading}...`]);
    await new Promise((r) => setTimeout(r, 400));
    setLog((l) => [...l, `Applying ${params.currentDensity} mA/cm² current density...`]);
    await new Promise((r) => setTimeout(r, 400));
    const res = computeSimulation(params);
    setResults(res);
    setHasRun(true);
    if (res.hasReaction) {
      setLog((l) => [...l, `⚡ Threshold crossed! COP ${res.cop}× detected.`, `Excess heat: ${res.excessHeat}W sustained.`, `Lattice coherence: ${res.latticeCoherence}%`, "Simulation complete."]);
    } else {
      setLog((l) => [...l, `Loading below threshold (need ≥${THRESHOLDS[params.material]}).`, "No excess heat detected.", "Try increasing D/H loading or current density."]);
    }
    setIsRunning(false);

    // Auto-send to AI for interpretation
    const companyPrefix = selectedCompany ? `This simulation is replicating the ${selectedCompany.name} device (${selectedCompany.mechanism}). ` : "";
    const simContext = `${companyPrefix}Simulation just completed for ${params.material} system. Parameters: D/H loading=${params.loading}, temperature=${params.temperature}°C, current density=${params.currentDensity} mA/cm², pressure=${params.pressure} atm, RF=${params.rfStimulus} MHz, run time=${params.runTime}h. Results: COP=${res.cop}×, excess heat=${res.excessHeat}W, reaction events=${res.reactionEvents}×10⁶/hr, lattice coherence=${res.latticeCoherence}%. ${res.hasReaction ? "Reaction detected!" : "No reaction — below threshold."} Please interpret these results briefly${selectedCompany ? `, comparing to what ${selectedCompany.name} has claimed` : ""}.`;
    const autoMsg: ChatMessage = { role: "user", content: simContext };
    const newHistory = [...chatMessages, autoMsg];
    setChatMessages(newHistory);
    setIsChatLoading(true);
    try {
      const resp = await fetch("/api/lenr-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });
      const data = await resp.json();
      if (data.text) {
        const aiMsg: ChatMessage = { role: "assistant", content: data.text };
        setChatMessages((m) => [...m, aiMsg]);
        if (voiceEnabled) {
          setIsSpeaking(true);
          speakText(data.text, () => setIsSpeaking(false));
        }
      }
    } catch (e) { void e; }
    setIsChatLoading(false);

    // Generate device description
    if (res.hasReaction) {
      setIsLoadingDevice(true);
      try {
        const dr = await fetch("/api/lenr-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "device",
            messages: [{ role: "user", content: "Describe this device." }],
            simState: { ...params, ...res },
          }),
        });
        const dd = await dr.json();
        if (dd.text) setDeviceDescription(dd.text);
      } catch (e) { void e; }
      setIsLoadingDevice(false);
    } else {
      setDeviceDescription("");
    }
  }, [params, chatMessages, voiceEnabled, selectedCompany]);

  // ── Reset ───────────────────────────────────────────────────────────────
  const resetSim = () => {
    setResults({ cop: 1.0, excessHeat: 0, reactionEvents: 0, latticeCoherence: 80, hasReaction: false });
    setHasRun(false);
    setLog(["Simulation reset. Set parameters and click Run."]);
    setDeviceDescription("");
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  // ── Load Company Preset ─────────────────────────────────────────────────
  const loadCompany = (company: CompanyPreset) => {
    setSelectedCompany(company);
    setParams(company.params);
    setResults({ cop: 1.0, excessHeat: 0, reactionEvents: 0, latticeCoherence: 80, hasReaction: false });
    setHasRun(false);
    setDeviceDescription("");
    setLog([`Loaded ${company.name} preset. Parameters configured — click Run to simulate.`]);
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setTimeout(() => simulatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  // ── Send chat ───────────────────────────────────────────────────────────
  const sendChat = useCallback(async (text: string) => {
    if (!text.trim() || isChatLoading) return;
    const companyCtx = selectedCompany ? `[Device: ${selectedCompany.name} — ${selectedCompany.mechanism}. Key tech: ${selectedCompany.keyTech}. Patent: ${selectedCompany.patentRef}] ` : "";
    const simCtx = `${companyCtx}[Current simulation: ${params.material}, loading=${params.loading}, temp=${params.temperature}°C, COP=${results.cop}×, excess heat=${results.excessHeat}W] `;
    const userMsg: ChatMessage = { role: "user", content: simCtx + text.trim() };
    const newHistory = [...chatMessages, userMsg];
    setChatMessages(newHistory);
    setChatInput("");
    setIsChatLoading(true);
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    try {
      const resp = await fetch("/api/lenr-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });
      const data = await resp.json();
      if (data.text) {
        const aiMsg: ChatMessage = { role: "assistant", content: data.text };
        setChatMessages((m) => [...m, aiMsg]);
        if (voiceEnabled) {
          setIsSpeaking(true);
          speakText(data.text, () => setIsSpeaking(false));
        }
      }
    } catch (e) { void e; }
    setIsChatLoading(false);
  }, [chatMessages, isChatLoading, params, results, voiceEnabled, selectedCompany]);

  // ── Voice input ─────────────────────────────────────────────────────────
  const toggleListening = () => {
    if (isListening) {
      recogRef.current?.stop();
      setIsListening(false);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) { alert("Voice not supported in this browser. Try Chrome."); return; }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recog = new SR() as any;
    recog.continuous = false;
    recog.interimResults = false;
    recog.lang = "en-US";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recog.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      setChatInput(transcript);
      setIsListening(false);
      sendChat(transcript);
    };
    recog.onerror = () => setIsListening(false);
    recog.onend = () => setIsListening(false);
    recogRef.current = recog;
    recog.start();
    setIsListening(true);
  };

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  // ── Slider helper ───────────────────────────────────────────────────────
  const slider = (key: keyof SimParams, label: string, min: number, max: number, step: number, unit: string) => (
    <div key={key} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-white/60 text-xs font-medium">{label}</span>
        <span className="text-plasma-400 text-xs font-mono font-bold">
          {typeof params[key] === "number" ? (params[key] as number).toFixed(step < 1 ? 2 : 0) : params[key]}{unit}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step}
        value={params[key] as number}
        onChange={(e) => setParams((p) => ({ ...p, [key]: parseFloat(e.target.value) }))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{ background: `linear-gradient(to right, #22D3EE ${((params[key] as number - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) 0%)` }}
      />
    </div>
  );

  return (
    <main className="min-h-screen bg-navy-900 text-white">

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 70%)" }} />
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-plasma-400/30 bg-plasma-400/5 mb-6">
            <Zap className="w-3.5 h-3.5 text-plasma-400" />
            <span className="text-plasma-400 text-xs font-medium tracking-widest uppercase">New Fire Energy · R&D Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Interactive AI</span>
            <br />
            <span className="text-white">Simulation Engine</span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore low-energy nuclear reactions in real time. Adjust lattice parameters,
            observe material science in action, and ask our AI guide anything.
          </p>

          {/* Badge tags */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {["Live LENR Model", "Pd · Ni · Ti Systems", "AI-Powered Guide", "Materials Science", "Voice Interactive"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/[0.04] text-white/70">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[["3", "Materials"], ["6", "Parameters"], ["Real-time", "AI Guide"]].map(([val, lbl]) => (
              <div key={lbl} className="glass-card rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text">{val}</div>
                <div className="text-white/40 text-xs mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Real-World LENR Device Library ────────────────────── */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-plasma-400 text-xs font-medium tracking-widest uppercase mb-3">Real-World Devices</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">LENR Device Library</h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Select any of the few pioneering companies below to load estimated parameters into the simulator.
              These figures are informed by published patents and conference presentations, but they are{" "}
              <span className="text-white/70 font-medium">not</span> the true formulas — and should not be treated as such.
              Each of these companies has conducted thousands of experiments over years, or in some cases decades,
              to arrive at their actual operating conditions. What you see here is an interactive approximation,
              intended to illustrate the different physics approaches each device uses. It is for educational exploration only.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPANY_PRESETS.map((company) => (
              <div key={company.id}
                className={`glass-card rounded-2xl p-5 border cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group ${selectedCompany?.id === company.id ? "shadow-lg" : ""}`}
                style={{
                  borderColor: selectedCompany?.id === company.id ? company.color + "60" : "rgba(255,255,255,0.07)",
                  background: selectedCompany?.id === company.id ? company.color + "08" : undefined,
                  boxShadow: selectedCompany?.id === company.id ? `0 0 30px ${company.color}15` : undefined,
                }}
                onClick={() => loadCompany(company)}>

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: company.color }} />
                      <span className="text-white font-bold text-sm">{company.name}</span>
                    </div>
                    <div className="text-white/35 text-[10px] pl-4">{company.location}</div>
                  </div>
                  {selectedCompany?.id === company.id && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: company.color + "25", color: company.color }}>
                      LOADED
                    </span>
                  )}
                </div>

                {/* Mechanism pill */}
                <div className="mb-3 pl-4">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                    style={{ borderColor: company.color + "30", color: company.color, background: company.color + "10" }}>
                    {company.mechanism}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/45 text-xs leading-relaxed mb-4 pl-4 line-clamp-3">
                  {company.description}
                </p>

                {/* Stats row */}
                <div className="pl-4 flex flex-wrap gap-3 mb-4 text-[10px]">
                  <div>
                    <span className="text-white/25 uppercase tracking-wide">Claim </span>
                    <span className="font-mono font-bold" style={{ color: company.color }}>{company.claim.split("·")[0].trim()}</span>
                  </div>
                  <div>
                    <span className="text-white/25 uppercase tracking-wide">Material </span>
                    <span className="font-mono font-bold text-white/60">{company.params.material}</span>
                  </div>
                </div>

                {/* Patent ref */}
                <div className="pl-4 text-[9px] text-white/20 font-mono mb-4">{company.patentRef}</div>

                {/* CTA */}
                <button
                  className="w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
                  style={{
                    background: selectedCompany?.id === company.id ? company.color + "25" : company.color + "15",
                    color: company.color,
                    border: `1px solid ${company.color}30`,
                  }}>
                  {selectedCompany?.id === company.id ? (
                    <><span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ background: company.color }} /> Loaded — Scroll to Simulator</>
                  ) : (
                    <>Load into Simulator <ChevronRight className="w-3 h-3" /></>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Key tech note */}
          <p className="text-center text-white/20 text-xs mt-8">
            Parameters based on published patents, ICCF conference papers, and peer-reviewed research · For educational simulation only
          </p>
        </div>
      </section>

      {/* ── SECTION 3: Completed Model Showcase ─────────────────────────── */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-plasma-400 text-xs font-medium tracking-widest uppercase mb-3">Reference Model</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What a Completed LENR Model Looks Like</h2>
            <p className="text-white/50 max-w-xl mx-auto">A fully optimized Palladium-Deuterium system at peak loading. This is the target state your simulation aims to reach.</p>
          </div>

          {/* Parameter flow diagram */}
          <div className="glass-card rounded-2xl p-6 mb-8 overflow-x-auto">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6 text-center">Optimized Parameter Chain</p>
            <div className="flex items-center justify-center gap-2 min-w-max mx-auto">
              {[
                { label: "D/Pd Loading", val: "0.93", color: "#22D3EE" },
                { label: "Current Density", val: "480 mA/cm²", color: "#2DD4BF" },
                { label: "Lattice Coherence", val: "94%", color: "#A78BFA" },
                { label: "Excess Heat", val: "78W", color: "#FB923C" },
                { label: "COP Output", val: "4.2×", color: "#34D399" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="text-center">
                    <div className="px-4 py-3 rounded-xl border text-sm font-bold whitespace-nowrap"
                      style={{ borderColor: step.color + "40", background: step.color + "10", color: step.color }}>
                      {step.val}
                    </div>
                    <div className="text-white/40 text-[10px] mt-1 whitespace-nowrap">{step.label}</div>
                  </div>
                  {i < 4 && <ChevronRight className="w-4 h-4 text-white/20 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          {/* Canvases */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Atom className="w-3.5 h-3.5 text-plasma-400" /> Pd Lattice — Peak D Loading (animated)
              </p>
              <ShowcaseLattice />
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-plasma-400" /> 200-Hour Sustained Excess Heat Run
              </p>
              <ShowcaseChart />
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { val: "78W", label: "Avg Excess Heat", desc: "Energy produced above what was put in — the signature of a working LENR reaction.", color: "#FB923C" },
              { val: "4.2×", label: "COP Ratio", desc: "Coefficient of Performance: for every 1W input, the system outputs 4.2W. Above 1× means net energy gain.", color: "#22D3EE" },
              { val: "0.93", label: "D/Pd Ratio", desc: "Deuterium atoms loaded per Palladium atom in the lattice. Above 0.85 is considered \"deep loading\" — the sweet spot for reactions.", color: "#34D399" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-5 border" style={{ borderColor: s.color + "20" }}>
                <div className="text-3xl font-bold mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-white font-semibold text-sm mb-2">{s.label}</div>
                <div className="text-white/40 text-xs leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 + 4: Simulator + AI Guide ─────────────────────────── */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-plasma-400 text-xs font-medium tracking-widest uppercase mb-3">Interactive Lab</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Run Your Own Simulation</h2>
            <p className="text-white/50 max-w-xl mx-auto">Adjust the parameters, hit Run, and watch the AI interpret your results in real time.</p>
          </div>

          <div className="grid xl:grid-cols-[1fr_400px] gap-6" ref={simulatorRef}>

            {/* ── LEFT: Simulator ── */}
            <div className="space-y-5">

              {/* Company preset banner */}
              {selectedCompany && (
                <div className="rounded-2xl p-5 border relative" style={{ borderColor: selectedCompany.color + "40", background: selectedCompany.color + "08" }}>
                  <button
                    onClick={() => { setSelectedCompany(null); setLog(["Simulation ready. Set parameters and click Run."]); }}
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all text-xs font-bold">
                    ✕
                  </button>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: selectedCompany.color }} />
                    <span className="text-white font-bold text-sm">{selectedCompany.name}</span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: selectedCompany.color + "40", color: selectedCompany.color, background: selectedCompany.color + "15" }}>
                      {selectedCompany.location}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: selectedCompany.color + "30", color: selectedCompany.color, background: selectedCompany.color + "10" }}>
                      {selectedCompany.mechanism}
                    </span>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed mt-3 mb-3">{selectedCompany.physics}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px]">
                    <span><span className="text-white/25 uppercase tracking-wide">Key Tech · </span><span className="text-white/60">{selectedCompany.keyTech}</span></span>
                    <span><span className="text-white/25 uppercase tracking-wide">Patents · </span><span className="font-mono text-white/40">{selectedCompany.patentRef}</span></span>
                  </div>
                </div>
              )}

              {/* Material tabs */}
              <div className="glass-card rounded-2xl p-5">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Select Material</p>
                <div className="flex gap-2">
                  {(["Pd", "Ni", "Ti"] as const).map((mat) => (
                    <button key={mat} onClick={() => setParams((p) => ({ ...p, material: mat }))}
                      className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${params.material === mat
                        ? "bg-plasma-400/20 border border-plasma-400/60 text-plasma-400"
                        : "border border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"}`}>
                      {mat}
                      <div className="text-[10px] font-normal mt-0.5 opacity-60">
                        {mat === "Pd" ? "Palladium" : mat === "Ni" ? "Nickel" : "Titanium"}
                      </div>
                      <div className="text-[10px] font-normal opacity-50">
                        threshold ≥{THRESHOLDS[mat]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="glass-card rounded-2xl p-5">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Simulation Parameters</p>
                <div className="space-y-5">
                  {slider("loading", "D/H Loading Ratio", 0, 1.0, 0.01, "")}
                  {slider("temperature", "Temperature", 20, 400, 5, "°C")}
                  {slider("currentDensity", "Current Density", 0, 500, 10, " mA/cm²")}
                  {slider("pressure", "Pressure", 1, 100, 1, " atm")}
                  {slider("rfStimulus", "RF Stimulus", 0, 100, 1, " MHz")}
                  {slider("runTime", "Run Time", 1, 200, 1, "h")}
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={runSimulation} disabled={isRunning}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50"
                    style={{ background: isRunning ? "rgba(34,211,238,0.2)" : "linear-gradient(135deg,#22D3EE,#2DD4BF)", color: "#060E1F" }}>
                    {isRunning ? <><div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" /> Running…</> : <><Play className="w-4 h-4 fill-current" /> Run Simulation</>}
                  </button>
                  <button onClick={resetSim} className="px-4 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all duration-200">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Output metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "COP Ratio", val: results.cop + "×", active: results.cop > 1, color: "#22D3EE" },
                  { label: "Excess Heat", val: results.excessHeat + "W", active: results.excessHeat > 0, color: "#FB923C" },
                  { label: "Reactions", val: results.reactionEvents + "×10⁶/hr", active: results.reactionEvents > 0, color: "#A78BFA" },
                  { label: "Coherence", val: results.latticeCoherence + "%", active: true, color: "#34D399" },
                ].map((m) => (
                  <div key={m.label} className="glass-card rounded-xl p-3.5 text-center border transition-all duration-500"
                    style={{ borderColor: m.active ? m.color + "30" : "rgba(255,255,255,0.05)" }}>
                    <div className="text-lg font-bold font-mono" style={{ color: m.active ? m.color : "rgba(255,255,255,0.3)" }}>{m.val}</div>
                    <div className="text-white/40 text-[10px] mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Canvases */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-4">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Atom className="w-3 h-3 text-plasma-400" /> Lattice Cross-Section
                  </p>
                  <canvas ref={latticeRef} width={400} height={220} className="w-full rounded-xl" />
                </div>
                <div className="glass-card rounded-2xl p-4">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Thermometer className="w-3 h-3 text-plasma-400" /> Excess Heat over Time
                  </p>
                  <canvas ref={chartRef} width={400} height={220} className="w-full rounded-xl" />
                </div>
              </div>

              {/* Activity log */}
              <div className="glass-card rounded-2xl p-4">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Activity Log</p>
                <div className="space-y-1.5 max-h-32 overflow-y-auto">
                  {log.map((line, i) => (
                    <div key={i} className="text-xs font-mono flex items-start gap-2">
                      <span className="text-plasma-400/50 flex-shrink-0">›</span>
                      <span className={line.startsWith("⚡") ? "text-yellow-400" : line.startsWith("No") || line.startsWith("Loading below") ? "text-red-400/70" : "text-white/60"}>{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Visualization — appears after successful run */}
              {(hasRun && results.hasReaction) && (
                <div className="glass-card rounded-2xl p-6 border border-plasma-400/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-plasma-400/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-plasma-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Your LENR Device — What It Looks Like</p>
                      <p className="text-white/40 text-xs">Based on your simulation parameters</p>
                    </div>
                  </div>

                  {/* 3D Animated Device + SVG Schematic */}
                  <div className="mb-5 grid sm:grid-cols-2 gap-4">
                    <div className="bg-navy-900/80 rounded-xl p-3 border border-plasma-400/15">
                      <p className="text-plasma-400/60 text-[10px] uppercase tracking-widest mb-2">3D Device View — Animated</p>
                      <canvas ref={deviceCanvasRef} width={320} height={200} className="w-full rounded-lg" />
                    </div>
                    <div className="bg-navy-900/80 rounded-xl p-3 border border-white/[0.06]">
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Schematic Cross-Section</p>
                      <svg viewBox="0 0 500 280" className="w-full" style={{ maxHeight: 200 }}>
                      {/* Outer housing */}
                      <rect x="60" y="40" width="380" height="200" rx="16" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4" />
                      <text x="250" y="28" textAnchor="middle" fill="rgba(34,211,238,0.5)" fontSize="9" fontFamily="system-ui">LENR Reactor Housing ({params.material === "Pd" ? "Palladium-D" : params.material === "Ni" ? "Nickel-H" : "Titanium-D"} System)</text>

                      {/* Electrolyte cell */}
                      <rect x="100" y="70" width="140" height="140" rx="10" fill="rgba(34,211,238,0.05)" stroke="#22D3EE" strokeWidth="1.2" opacity="0.8" />
                      <text x="170" y="88" textAnchor="middle" fill="rgba(34,211,238,0.7)" fontSize="8" fontFamily="system-ui">Electrolyte Cell</text>

                      {/* Cathode */}
                      <rect x="130" y="100" width="16" height="88" rx="3"
                        fill={params.material === "Pd" ? "rgba(59,130,246,0.8)" : params.material === "Ni" ? "rgba(139,92,246,0.8)" : "rgba(107,114,128,0.8)"}
                        stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                      <text x="138" y="200" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="system-ui">{params.material}</text>
                      <text x="138" y="209" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="system-ui">cathode</text>

                      {/* Anode */}
                      <rect x="190" y="100" width="12" height="88" rx="2" fill="rgba(251,191,36,0.5)" stroke="rgba(251,191,36,0.4)" strokeWidth="0.5" />
                      <text x="196" y="200" textAnchor="middle" fill="rgba(251,191,36,0.5)" fontSize="7" fontFamily="system-ui">Pt</text>
                      <text x="196" y="209" textAnchor="middle" fill="rgba(251,191,36,0.4)" fontSize="6" fontFamily="system-ui">anode</text>

                      {/* D bubbles */}
                      {[110, 125, 145, 160, 175].map((bx, bi) => (
                        <circle key={bi} cx={bx + 50} cy={130 + bi * 12} r="4" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="0.8" />
                      ))}
                      <text x="170" y="165" textAnchor="middle" fill="rgba(52,211,153,0.5)" fontSize="7" fontFamily="system-ui">D₂O electrolyte</text>

                      {/* Heat exchanger */}
                      <rect x="270" y="80" width="120" height="80" rx="8" fill="rgba(251,146,60,0.05)" stroke="#FB923C" strokeWidth="1.2" opacity="0.7" />
                      <text x="330" y="96" textAnchor="middle" fill="rgba(251,146,60,0.7)" fontSize="8" fontFamily="system-ui">Heat Exchanger</text>
                      {[0, 1, 2, 3].map((i) => (
                        <line key={i} x1="280" y1={105 + i * 16} x2="380" y2={105 + i * 16} stroke="rgba(251,146,60,0.4)" strokeWidth="1.5" />
                      ))}
                      <text x="330" y="175" textAnchor="middle" fill="rgba(251,146,60,0.6)" fontSize="8" fontFamily="system-ui">{results.excessHeat}W excess heat out</text>

                      {/* Power supply */}
                      <rect x="270" y="175" width="120" height="50" rx="6" fill="rgba(34,211,238,0.05)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
                      <text x="330" y="196" textAnchor="middle" fill="rgba(34,211,238,0.6)" fontSize="8" fontFamily="system-ui">Power Supply</text>
                      <text x="330" y="208" textAnchor="middle" fill="rgba(34,211,238,0.4)" fontSize="7" fontFamily="system-ui">{params.currentDensity} mA/cm²</text>
                      <text x="330" y="219" textAnchor="middle" fill="rgba(34,211,238,0.4)" fontSize="7" fontFamily="system-ui">COP {results.cop}×</text>

                      {/* Connections */}
                      <line x1="240" y1="140" x2="270" y2="120" stroke="rgba(251,146,60,0.3)" strokeWidth="1" strokeDasharray="3 2" />
                      <line x1="240" y1="140" x2="270" y2="200" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="3 2" />

                      {/* Pressure vessel indicator */}
                      {params.pressure > 10 && (
                        <>
                          <circle cx="430" cy="68" r="14" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.5)" strokeWidth="1" />
                          <text x="430" y="64" textAnchor="middle" fill="rgba(167,139,250,0.7)" fontSize="7" fontFamily="system-ui">{params.pressure}</text>
                          <text x="430" y="74" textAnchor="middle" fill="rgba(167,139,250,0.5)" fontSize="6" fontFamily="system-ui">atm</text>
                        </>
                      )}

                      {/* RF antenna */}
                      {params.rfStimulus > 0 && (
                        <>
                          <line x1="95" y1="90" x2="70" y2="75" stroke="rgba(250,204,21,0.5)" strokeWidth="1" />
                          <line x1="95" y1="100" x2="65" y2="100" stroke="rgba(250,204,21,0.4)" strokeWidth="1" />
                          <line x1="95" y1="110" x2="70" y2="125" stroke="rgba(250,204,21,0.3)" strokeWidth="1" />
                          <text x="62" y="105" textAnchor="end" fill="rgba(250,204,21,0.5)" fontSize="7" fontFamily="system-ui">RF</text>
                          <text x="62" y="114" textAnchor="end" fill="rgba(250,204,21,0.4)" fontSize="6" fontFamily="system-ui">{params.rfStimulus}MHz</text>
                        </>
                      )}

                      {/* Glow overlay on active reaction */}
                      {results.hasReaction && (
                        <ellipse cx="138" cy="144" rx="20" ry="30" fill="rgba(251,146,60,0.1)" />
                      )}
                    </svg>
                    </div>
                  </div>

                  {/* AI device description */}
                  {isLoadingDevice ? (
                    <div className="flex items-center gap-3 text-white/40 text-sm">
                      <div className="w-4 h-4 border-2 border-plasma-400/30 border-t-plasma-400 rounded-full animate-spin" />
                      Generating device description…
                    </div>
                  ) : deviceDescription ? (
                    <div className="text-white/70 text-sm leading-relaxed">{deviceDescription}</div>
                  ) : null}
                </div>
              )}

              {/* Below-threshold message */}
              {hasRun && !results.hasReaction && (
                <div className="glass-card rounded-2xl p-5 border border-red-500/20">
                  <p className="text-red-400 font-semibold text-sm mb-1">No Reaction Detected</p>
                  <p className="text-white/40 text-xs">Loading ratio is below the {params.material} threshold ({THRESHOLDS[params.material]}). Increase loading, current density, or try Palladium which has the lowest threshold.</p>
                </div>
              )}
            </div>

            {/* ── RIGHT: AI Guide ── */}
            <div className="flex flex-col h-full">
              <div className="glass-card rounded-2xl flex flex-col" style={{ minHeight: 600 }}>
                {/* Header */}
                <div className="p-5 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center shadow-lg shadow-plasma-400/30">
                        <Zap className="w-4 h-4 text-white fill-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">LENR AI Guide</div>
                        <div className="text-white/40 text-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                          Powered by Claude · Voice ready
                        </div>
                      </div>
                    </div>
                    <button onClick={() => { setVoiceEnabled(!voiceEnabled); if (isSpeaking) stopSpeaking(); }}
                      className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200">
                      {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Quick prompts */}
                <div className="p-4 border-b border-white/[0.06]">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2.5">
                    {selectedCompany ? `${selectedCompany.shortName} Questions` : "Quick Questions"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedCompany ? selectedCompany.quickPrompts : QUICK_PROMPTS).map((q) => (
                      <button key={q} onClick={() => sendChat(q)} disabled={isChatLoading}
                        className="px-2.5 py-1 rounded-lg text-[10px] border transition-all duration-200 disabled:opacity-30"
                        style={selectedCompany ? {
                          borderColor: selectedCompany.color + "30",
                          color: isChatLoading ? undefined : selectedCompany.color,
                          background: "transparent",
                        } : undefined}
                        onMouseEnter={(e) => { if (selectedCompany) { (e.currentTarget as HTMLButtonElement).style.background = selectedCompany.color + "15"; } }}
                        onMouseLeave={(e) => { if (selectedCompany) { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; } }}>
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ minHeight: 280, maxHeight: 400 }}>
                  {chatMessages.length === 0 && (
                    <div className="text-center py-8">
                      <Atom className="w-10 h-10 text-white/10 mx-auto mb-3" />
                      <p className="text-white/30 text-xs">Run a simulation or ask a question to begin.</p>
                    </div>
                  )}
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-plasma-400/15 border border-plasma-400/20 text-white/80"
                          : "bg-white/[0.04] border border-white/[0.06] text-white/70"
                      }`}>
                        {msg.role === "assistant" && (
                          <div className="text-plasma-400 font-semibold text-[10px] mb-1">LENR Guide</div>
                        )}
                        {msg.content.replace(/\[Current simulation:.*?\] /, "")}
                      </div>
                    </div>
                  ))}
                  {isChatLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl px-3.5 py-2.5">
                        <div className="flex gap-1 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-plasma-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-plasma-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-1.5 h-1.5 rounded-full bg-plasma-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatBottomRef} />
                </div>

                {/* Chat input */}
                <div className="p-4 border-t border-white/[0.06]">
                  {/* Voice waveform indicator */}
                  {(isListening || isSpeaking) && (
                    <div className="flex items-center gap-2 mb-2 px-1">
                      <VoiceWaveform active={isListening || isSpeaking} color={isListening ? "#F87171" : "#22D3EE"} />
                      <span className="text-[10px] text-white/40">{isListening ? "Listening…" : "Speaking…"}</span>
                      {isSpeaking && (
                        <button onClick={stopSpeaking} className="text-[10px] text-white/30 hover:text-white/60 underline ml-auto">stop</button>
                      )}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button onClick={toggleListening}
                      className={`p-2.5 rounded-xl border transition-all duration-200 flex-shrink-0 ${isListening ? "border-red-400/60 bg-red-400/15 text-red-400" : "border-white/10 text-white/40 hover:border-plasma-400/40 hover:text-plasma-400"}`}>
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendChat(chatInput)}
                      placeholder={isListening ? "Listening…" : "Ask about LENR, COP, materials…"}
                      disabled={isChatLoading || isListening}
                      className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-plasma-400/40 transition-all duration-200 disabled:opacity-50"
                    />
                    <button onClick={() => sendChat(chatInput)} disabled={!chatInput.trim() || isChatLoading}
                      className="p-2.5 rounded-xl bg-plasma-400/20 border border-plasma-400/30 text-plasma-400 hover:bg-plasma-400/30 transition-all duration-200 disabled:opacity-30 flex-shrink-0">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-white/20 text-[10px] mt-2 text-center">
                    🎤 Tap mic to speak · Enter to send · Responses read aloud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CTA Bridge ────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 border border-plasma-400/10 relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 70%)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fire-400/30 bg-fire-400/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-fire-400 animate-pulse" />
                <span className="text-fire-400 text-xs font-medium tracking-widest uppercase">Investment Opportunity</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                You&apos;ve seen the physics.
                <br />
                <span className="gradient-text-fire">Now back the team building it.</span>
              </h2>
              <p className="text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
                New Fire Energy is a regulated private equity fund investing in the companies advancing LENR from laboratory science to commercial energy systems.
              </p>
              <Link href="/investors"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#F97316,#EF4444)", boxShadow: "0 8px 32px rgba(249,115,22,0.3)" }}>
                <Zap className="w-5 h-5 fill-white" />
                Become an Investor
                <ChevronRight className="w-4 h-4" />
              </Link>
              <p className="text-white/25 text-xs mt-5">Accredited investors only · Regulation D Rule 506(c) · Min. $20,000</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
