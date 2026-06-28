import { useState, useEffect } from "react";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 2100);
    const t3 = setTimeout(() => onDone(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  const letters = "RANJIT BHARDWAJ".split("");

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#0A1931",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      animation: phase === 2 ? "wipeUp 0.55s cubic-bezier(0.76, 0, 0.24, 1) forwards" : "none",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(74,127,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,127,167,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div style={{ position: "relative", textAlign: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1px", maxWidth: "700px", overflow: "hidden" }}>
          {letters.map((l, i) =>
            l === " " ? (
              <span key={i} style={{ width: "20px" }} />
            ) : (
              <span key={i} style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5.5vw, 4.5rem)", fontWeight: 700, color: "#F6FAFD",
                display: "inline-block", opacity: 0,
                animation: `letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards ${i * 0.055}s`,
              }}>{l}</span>
            )
          )}
        </div>
        <div style={{
          width: "240px", height: "1px", background: "rgba(74,127,167,0.15)",
          margin: "40px auto 0", overflow: "hidden",
          opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.3s ease",
        }}>
          <div style={{
            height: "100%",
            background: "linear-gradient(90deg, transparent, #4A7FA7, #B3CFE5, #4A7FA7, transparent)",
            animation: phase >= 1 ? "loadingBar 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
          }} />
        </div>
        <p style={{
          marginTop: "20px",
          fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "5px",
          color: "#4A7FA7", textTransform: "uppercase",
          opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.5s ease 0.2s",
        }}>
          Portfolio · 2026
        </p>
      </div>
    </div>
  );
}
