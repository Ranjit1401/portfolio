import { useRef } from "react";
import { PERSONAL, TIMELINE } from "../data/portfolio";
import { useReveal, useCounter } from "../hooks/useReveal";

export default function About() {
  const { ref, visible } = useReveal();
  const statsRef = useRef<HTMLDivElement>(null);
  const { ref: sRef, visible: sv } = useReveal();
  const projects = useCounter(10, sv);
  const hacks    = useCounter(5,  sv);

  const stats = [
    { value: `${projects}+`, label: "Projects Completed", dark: true  },
    { value: "100%",          label: "Dedication",          dark: false },
    { value: `${hacks}+`,    label: "Hackathons",           dark: true  },
    { value: "AI",            label: "ML · Python · Full Stack", dark: false },
  ];

  return (
    <section id="about" style={{ background: "#F6FAFD", padding: "140px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "-200px", right: "-200px",
        width: "600px", height: "600px",
        background: "radial-gradient(ellipse, rgba(74,127,167,0.055) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div ref={ref as React.Ref<HTMLDivElement>} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#4A7FA7", textTransform: "uppercase" }}>
            Get to Know Me
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
            color: "#0A1931", marginTop: "14px", lineHeight: 1.08,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>About Me</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "96px", alignItems: "start" }}>
          {/* Image */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-50px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          }}>
            <div style={{ position: "relative", borderRadius: "36px", overflow: "hidden", aspectRatio: "4/5", background: "#B3CFE5" }}>
              <img src={PERSONAL.aboutImage} alt="About" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,25,49,0.15) 0%, transparent 55%)" }} />
              <div style={{
                position: "absolute", bottom: "28px", left: "24px", right: "24px",
                background: "rgba(10,25,49,0.78)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(74,127,167,0.28)", borderRadius: "20px", padding: "18px 22px",
              }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "#F6FAFD", marginBottom: "4px" }}>{PERSONAL.name}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B3CFE5", letterSpacing: "1px" }}>AI & ML Engineer · {PERSONAL.location}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(50px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.9, color: "#4A7FA7", marginBottom: "52px" }}>
              {PERSONAL.about}
            </p>

            {/* Stats */}
            <div ref={sRef as React.Ref<HTMLDivElement>} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "60px" }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  padding: "28px 24px", borderRadius: "24px",
                  background: s.dark ? "linear-gradient(135deg, #0A1931, #1A3D63)" : "rgba(74,127,167,0.07)",
                  border: s.dark ? "none" : "1px solid rgba(74,127,167,0.18)",
                  animation: sv ? `slideUp 0.6s ease ${i * 0.1 + 0.2}s both` : "none",
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: s.dark ? "#B3CFE5" : "#0A1931", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: s.dark ? "rgba(179,207,229,0.55)" : "#4A7FA7", marginTop: "8px", letterSpacing: "0.4px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#0A1931", marginBottom: "32px" }}>My Journey</h3>
            <div style={{ position: "relative", paddingLeft: "28px" }}>
              <div style={{ position: "absolute", left: "6px", top: "8px", width: "1px", height: "calc(100% - 16px)", background: "linear-gradient(180deg, #4A7FA7, transparent)" }} />
              {TIMELINE.map((item, i) => (
                <div key={i} style={{ position: "relative", marginBottom: "28px" }}>
                  <div style={{ position: "absolute", left: "-24px", top: "5px", width: "9px", height: "9px", borderRadius: "50%", background: "#4A7FA7", boxShadow: "0 0 10px rgba(74,127,167,0.7)" }} />
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#4A7FA7", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "3px" }}>{item.year}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#0A1931", fontWeight: 600 }}>{item.event}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#4A7FA7", marginTop: "2px" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
