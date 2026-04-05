"use client";
import { useState } from "react";

const REFERENCES = [
  { cop: 1.0, label: "Break-even", note: "Energy in = Energy out", color: "rgba(255,255,255,0.3)" },
  { cop: 1.6, label: "Brillouin Energy", note: "SRI International test, 2017", color: "#2DD4BF" },
  { cop: 1.8, label: "ENG8 EnergiCell", note: "Dr. Robert Morgan, UK, 2020", color: "#00B8E6" },
  { cop: 3.0, label: "Commercial target", note: "Industry benchmark for viability", color: "#60A5FA" },
];

export default function COPExplainerWidget() {
  const [cop, setCop] = useState(1.8);
  const energyIn = 100;
  const energyOut = Math.round(cop * 100);
  const gain = Math.round((cop - 1) * 100);
  const outBarHeight = Math.min((cop / 4) * 100, 100);
  const inBarHeight = Math.min((1 / 4) * 100, 100);

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(0,184,230,0.12)",
      borderRadius: 24,
      padding: "40px 36px",
      maxWidth: 860,
      margin: "0 auto 60px",
    }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: "0.72rem", color: "rgba(0,184,230,0.7)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
          Interactive · Coefficient of Performance
        </div>
        <div style={{ fontFamily: "var(--font-display, serif)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#fff", fontWeight: 700 }}>
          COP = <span style={{ color: "#00B8E6" }}>{cop.toFixed(1)}</span>
          <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)", marginLeft: 12, fontFamily: "sans-serif", fontWeight: 400 }}>
            {gain > 0 ? `+${gain}% more energy out than in` : "break-even"}
          </span>
        </div>
      </div>

      {/* Bar visualizer */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 48, marginBottom: 32, height: 180 }}>
        {/* Energy In */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{energyIn}W</div>
          <div style={{
            width: 72, height: `${inBarHeight}%`, minHeight: 12,
            background: "linear-gradient(to top, #F97316, rgba(249,115,22,0.4))",
            borderRadius: "8px 8px 4px 4px",
            transition: "height 0.3s ease",
            boxShadow: "0 0 16px rgba(249,115,22,0.3)",
          }} />
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>Energy<br />In</div>
        </div>

        {/* Arrow */}
        <div style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.2)", marginBottom: 40 }}>→</div>

        {/* Energy Out */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: "0.75rem", color: "#00B8E6", fontWeight: 700 }}>{energyOut}W</div>
          <div style={{
            width: 72, height: `${outBarHeight}%`, minHeight: 12,
            background: "linear-gradient(to top, #00B8E6, rgba(45,212,191,0.6))",
            borderRadius: "8px 8px 4px 4px",
            transition: "height 0.3s ease",
            boxShadow: "0 0 24px rgba(0,184,230,0.4)",
          }} />
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>Energy<br />Out</div>
        </div>
      </div>

      {/* Slider */}
      <div style={{ marginBottom: 32, padding: "0 8px" }}>
        <input
          type="range" min={1.0} max={4.0} step={0.1}
          value={cop}
          onChange={e => setCop(parseFloat(e.target.value))}
          style={{ width: "100%", accentColor: "#00B8E6", cursor: "pointer" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", marginTop: 4 }}>
          <span>COP 1.0 (break-even)</span>
          <span>COP 4.0</span>
        </div>
      </div>

      {/* Reference table */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
        {REFERENCES.map(r => (
          <button
            key={r.cop}
            onClick={() => setCop(r.cop)}
            style={{
              background: cop === r.cop ? "rgba(0,184,230,0.1)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${cop === r.cop ? "rgba(0,184,230,0.4)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 12,
              padding: "12px 14px",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
            }}
          >
            <div style={{ color: r.color, fontWeight: 700, fontSize: "0.95rem", marginBottom: 2 }}>COP {r.cop.toFixed(1)}</div>
            <div style={{ color: "#fff", fontSize: "0.78rem", marginBottom: 2 }}>{r.label}</div>
            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem" }}>{r.note}</div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: 20, fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", textAlign: "center" }}>
        COP values sourced from independent third-party physicist reviews. Leonardo Corp / E-Cat figures are company-reported and excluded here.
      </div>
    </div>
  );
}
