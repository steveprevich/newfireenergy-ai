"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  raised: number;
  target: number;
}

function formatM(n: number) {
  return "$" + (n / 1_000_000).toFixed(1) + "M";
}

export default function OfferingProgressBar({ raised, target }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayRaised, setDisplayRaised] = useState(0);
  const pct = Math.min((raised / target) * 100, 100).toFixed(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const start = Date.now();
    function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplayRaised(Math.round(raised * ease));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [visible, raised]);

  return (
    <div ref={ref} style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(0,184,230,0.15)",
      borderRadius: 20,
      padding: "32px 36px",
      maxWidth: 780,
      margin: "0 auto 60px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Reg D 506(c) · Offering Progress
        </span>
        <span style={{ color: "#00B8E6", fontWeight: 700, fontSize: "1.1rem" }}>
          {formatM(displayRaised)} <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, fontSize: "0.85rem" }}>raised</span>
        </span>
      </div>

      {/* Bar track */}
      <div style={{ position: "relative", height: 10, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: "0 auto 0 0",
          height: "100%",
          borderRadius: 99,
          background: "linear-gradient(90deg, #00B8E6, #2DD4BF)",
          width: visible ? `${pct}%` : "0%",
          transition: "width 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "0 0 12px rgba(0,184,230,0.5)",
        }} />
        {/* Milestone markers */}
        {[25, 50, 75].map(m => (
          <div key={m} style={{
            position: "absolute", left: `${m}%`, top: 0, bottom: 0,
            width: 1, background: "rgba(255,255,255,0.12)",
          }} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
        <span>$0</span>
        <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{pct}% funded</span>
        <span>$40.4M target</span>
      </div>

      {/* Milestone labels */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: 18, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {[
          { label: "Seed Close", pct: "25%" },
          { label: "Series A Gate", pct: "50%" },
          { label: "Full Deploy", pct: "100%" },
        ].map(m => (
          <div key={m.label} style={{ textAlign: "center" }}>
            <div style={{ color: "rgba(0,184,230,0.7)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em" }}>{m.pct}</div>
            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem", marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
