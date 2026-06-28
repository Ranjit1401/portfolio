import { SKILLS } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" style={{
      background: "linear-gradient(160deg, #0A1931 0%, #1A3D63 50%, #0A1931 100%)",
      padding: "140px 48px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "5%", right: "0",
        width: "500px", height: "500px",
        background: "radial-gradient(ellipse, rgba(74,127,167,0.1) 0%, transparent 70%)",
        animation: "blob 14s ease-in-out infinite",
      }} />

      <div ref={ref as React.Ref<HTMLDivElement>} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "96px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#4A7FA7", textTransform: "uppercase" }}>
            Technical Arsenal
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
            color: "#F6FAFD", marginTop: "14px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>Skills & Expertise</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(179,207,229,0.45)", marginTop: "18px", fontSize: "14px" }}>
            Technologies I work with daily
          </p>
        </div>

        {/* Bubble cloud */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", justifyContent: "center", alignItems: "center" }}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-bubble"
              style={{
                width: `${skill.size}px`, height: `${skill.size}px`, borderRadius: "50%",
                background: "rgba(26,61,99,0.55)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(74,127,167,0.28)",
                display: "flex", alignItems: "center", justifyContent: "center",
                textAlign: "center",
                fontFamily: "'Inter', sans-serif",
                fontSize: skill.size >= 100 ? "12px" : skill.size >= 84 ? "11px" : "10px",
                fontWeight: 500, color: "#B3CFE5", letterSpacing: "0.3px",
                padding: "8px", lineHeight: 1.3,
                animation: `float ${6 + (i % 4)}s ease-in-out infinite ${(i * 0.22).toFixed(2)}s`,
                boxShadow: `0 0 ${Math.round(skill.size / 4)}px rgba(74,127,167,0.12)`,
                opacity: visible ? 1 : 0,
                transition: `opacity 0.5s ease ${(i * 0.04).toFixed(2)}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(74,127,167,0.28)";
                el.style.borderColor = "rgba(179,207,229,0.5)";
                el.style.boxShadow = "0 0 48px rgba(74,127,167,0.55), 0 0 90px rgba(74,127,167,0.2)";
                el.style.color = "#F6FAFD";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(26,61,99,0.55)";
                el.style.borderColor = "rgba(74,127,167,0.28)";
                el.style.boxShadow = `0 0 ${Math.round(skill.size / 4)}px rgba(74,127,167,0.12)`;
                el.style.color = "#B3CFE5";
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div style={{ marginTop: "80px", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(90deg, #0A1931, transparent)", zIndex: 2 }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(-90deg, #0A1931, transparent)", zIndex: 2 }} />
          <div style={{ display: "flex", gap: "36px", animation: "marqueeScroll 22s linear infinite", width: "max-content" }}>
            {[...SKILLS, ...SKILLS].map((s, i) => (
              <span key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(74,127,167,0.5)", letterSpacing: "2.5px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {s.name} ·
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
