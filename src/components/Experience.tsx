import { EXPERIENCES } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" style={{
      background: "linear-gradient(180deg, #0A1931 0%, #1A3D63 100%)",
      padding: "140px 48px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "-150px", right: "-100px",
        width: "500px", height: "500px",
        background: "radial-gradient(ellipse, rgba(74,127,167,0.1) 0%, transparent 70%)",
        animation: "blob 13s ease-in-out infinite",
      }} />

      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <div ref={ref as React.Ref<HTMLDivElement>} style={{ textAlign: "center", marginBottom: "96px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#4A7FA7", textTransform: "uppercase" }}>
            Experience
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
            color: "#F6FAFD", marginTop: "14px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>Experience & Achievements</h2>
        </div>

        <div style={{ position: "relative", paddingLeft: "56px" }}>
          {/* Glowing timeline line */}
          <div style={{
            position: "absolute", left: "18px", top: "18px",
            width: "1px", height: "calc(100% - 36px)",
            background: "linear-gradient(180deg, #4A7FA7 0%, rgba(74,127,167,0.1) 100%)",
            boxShadow: "0 0 10px rgba(74,127,167,0.35)",
          }} />

          {EXPERIENCES.map((exp, i) => (
            <div key={exp.org} style={{
              position: "relative", marginBottom: "52px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15 + 0.25}s`,
            }}>
              {/* Timeline node */}
              <div style={{
                position: "absolute", left: "-44px", top: "20px",
                width: "15px", height: "15px", borderRadius: "50%",
                background: "linear-gradient(135deg, #4A7FA7, #B3CFE5)",
                boxShadow: "0 0 18px rgba(74,127,167,0.65)",
              }} />

              <div className="exp-card"
                style={{
                  background: "rgba(26,61,99,0.28)", backdropFilter: "blur(16px)",
                  border: "1px solid rgba(74,127,167,0.18)",
                  borderRadius: "28px", padding: "32px 36px",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(26,61,99,0.48)";
                  el.style.borderColor = "rgba(74,127,167,0.38)";
                  el.style.boxShadow = "0 24px 64px rgba(74,127,167,0.14)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(26,61,99,0.28)";
                  el.style.borderColor = "rgba(74,127,167,0.18)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                  <div>
                    <span style={{
                      fontFamily: "'Inter', sans-serif", fontSize: "10px",
                      color: "#4A7FA7", letterSpacing: "2px", textTransform: "uppercase",
                      background: "rgba(74,127,167,0.14)", border: "1px solid rgba(74,127,167,0.25)",
                      borderRadius: "100px", padding: "4px 12px",
                    }}>{exp.type}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", color: "#F6FAFD", marginTop: "12px", fontWeight: 700 }}>{exp.title}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#4A7FA7", marginTop: "4px" }}>{exp.org}</p>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(179,207,229,0.35)", letterSpacing: "0.8px" }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(179,207,229,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
                  {exp.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {exp.tags.map(t => (
                    <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#B3CFE5", background: "rgba(74,127,167,0.1)", padding: "4px 12px", borderRadius: "100px", border: "1px solid rgba(74,127,167,0.18)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
