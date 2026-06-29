import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

const GRID_POSITIONS = [
  { gridColumn: "1 / 3", gridRow: "1" },
  { gridColumn: "3 / 4", gridRow: "1" },
  { gridColumn: "1 / 2", gridRow: "2" },
  { gridColumn: "2 / 4", gridRow: "2" },
  { gridColumn: "1 / 4", gridRow: "3" },
];

export default function Projects() {
  const { ref, visible } = useReveal();
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section id="projects" style={{ background: "#F6FAFD", padding: "140px 48px", position: "relative", overflow: "hidden" }}>
      <div ref={ref as React.Ref<HTMLDivElement>} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#4A7FA7", textTransform: "uppercase" }}>
            Featured Work
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
            color: "#0A1931", marginTop: "14px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>Featured Projects</h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "22px" }}>
          {PROJECTS.map((project, i) => {
            const isLarge = i === 0 || i === 3 || i === 4;
            const imgH = i === 4 ? "200px" : isLarge ? "260px" : "220px";
            return (
              <div key={project.title} className="project-card"
                style={{
                  ...GRID_POSITIONS[i],
                  borderRadius: "32px", overflow: "hidden",
                  position: "relative", background: "#0A1931",
                  boxShadow: hov === i ? "0 40px 80px rgba(10,25,49,0.28)" : "0 6px 32px rgba(10,25,49,0.1)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s, box-shadow 0.4s ease`,
                }}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              >
                {/* Image */}
                <div style={{ height: imgH, overflow: "hidden", position: "relative" }}>
                  <img src={project.image} alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 20%, rgba(10,25,49,0.85) 100%)",
                    opacity: hov === i ? 1 : 0.65, transition: "opacity 0.4s ease",
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: i === 4 ? "20px 28px 28px" : "24px 28px 32px" }}>
                  <span style={{
                    display: "inline-block",
                    background: "rgba(74,127,167,0.18)", border: "1px solid rgba(74,127,167,0.35)",
                    borderRadius: "100px", padding: "4px 12px",
                    fontFamily: "'Inter', sans-serif", fontSize: "10px",
                    color: "#B3CFE5", letterSpacing: "1px", marginBottom: "10px",
                  }}>{project.tag}</span>

                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: isLarge ? "1.55rem" : "1.2rem",
                    color: "#F6FAFD", fontWeight: 700, marginBottom: "10px", lineHeight: 1.2,
                  }}>{project.title}</h3>

                  {i !== 4 && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(179,207,229,0.65)", lineHeight: 1.75, marginBottom: "18px" }}>
                      {project.description}
                    </p>
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "18px" }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#4A7FA7", background: "rgba(74,127,167,0.1)", padding: "3px 10px", borderRadius: "100px", border: "1px solid rgba(74,127,167,0.2)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    {[
                      { href: project.live,   label: "Live Demo", icon: <ExternalLink size={11} /> },
                      { href: project.github, label: "GitHub",    icon: <Github size={11} /> },
                    ].map(link => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: "flex", alignItems: "center", gap: "5px",
                          fontFamily: "'Inter', sans-serif", fontSize: "11px",
                          color: "#B3CFE5", textDecoration: "none",
                          padding: "7px 14px", borderRadius: "100px",
                          background: "rgba(74,127,167,0.15)", border: "1px solid rgba(74,127,167,0.25)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(74,127,167,0.28)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(74,127,167,0.15)"; }}
                      >
                        {link.icon} {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
