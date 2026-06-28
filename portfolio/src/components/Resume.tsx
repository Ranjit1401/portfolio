import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { PERSONAL, EXPERIENCES, CERTS, EDUCATION, ACHIEVEMENTS } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

const TABS = ["Education", "Experience", "Achievements", "Certifications"];

export default function Resume() {
  const { ref, visible } = useReveal();
  const [tab, setTab] = useState("Education");

  return (
    <section id="resume" style={{ background: "#F6FAFD", padding: "140px 48px", position: "relative", overflow: "hidden" }}>
      <div ref={ref as React.Ref<HTMLDivElement>} style={{ maxWidth: "1060px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#4A7FA7", textTransform: "uppercase" }}>
            My Background
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700,
            color: "#0A1931", marginTop: "14px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>Resume</h2>
        </div>

        {/* Tab pills */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "44px", flexWrap: "wrap" }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "10px 26px", borderRadius: "100px",
              fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500,
              border: "1px solid",
              borderColor: tab === t ? "#4A7FA7" : "rgba(74,127,167,0.2)",
              background: tab === t ? "linear-gradient(135deg, #0A1931, #1A3D63)" : "transparent",
              color: tab === t ? "#F6FAFD" : "#4A7FA7",
              transition: "all 0.3s ease",
            }}>{t}</button>
          ))}
        </div>

        {/* Paper */}
        <div style={{
          background: "#ffffff", borderRadius: "32px", padding: "52px 60px",
          boxShadow: "0 40px 120px rgba(10,25,49,0.1), 0 1px 0 rgba(74,127,167,0.08)",
          minHeight: "380px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          {/* Paper header */}
          <div style={{ borderBottom: "1px solid rgba(74,127,167,0.12)", paddingBottom: "28px", marginBottom: "36px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#0A1931", fontWeight: 700 }}>{PERSONAL.name}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#4A7FA7", marginTop: "5px", letterSpacing: "0.5px" }}>
                {PERSONAL.role}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#4A7FA7" }}>{PERSONAL.location}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#4A7FA7" }}>{PERSONAL.github.replace("https://", "")}</p>
            </div>
          </div>

          {/* Education tab */}
          {tab === "Education" && (
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#0A1931", marginBottom: "24px" }}>Education</h4>
              {EDUCATION.map((edu, i) => (
                <div key={i} style={{ marginBottom: "28px", paddingLeft: "20px", borderLeft: "2px solid rgba(74,127,167,0.2)" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#0A1931", fontWeight: 700 }}>{edu.degree}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#4A7FA7", marginTop: "4px" }}>{edu.school}</div>
                  <div style={{ display: "flex", gap: "16px", marginTop: "6px" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(10,25,49,0.38)" }}>{edu.year}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#4A7FA7" }}>{edu.note}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience tab */}
          {tab === "Experience" && (
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#0A1931", marginBottom: "24px" }}>Work Experience</h4>
              {EXPERIENCES.slice(0, 2).map((exp, i) => (
                <div key={i} style={{ marginBottom: "28px", paddingLeft: "20px", borderLeft: "2px solid rgba(74,127,167,0.2)" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#0A1931", fontWeight: 700 }}>{exp.title}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#4A7FA7", marginTop: "4px" }}>{exp.org} · {exp.period}</div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(10,25,49,0.55)", marginTop: "8px", lineHeight: 1.75 }}>{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Achievements tab */}
          {tab === "Achievements" && (
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#0A1931", marginBottom: "24px" }}>Achievements</h4>
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4A7FA7", marginTop: "7px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#0A1931", fontWeight: 600 }}>{a.title}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(10,25,49,0.5)", marginTop: "4px" }}>{a.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications tab */}
          {tab === "Certifications" && (
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#0A1931", marginBottom: "24px" }}>Certifications</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                {CERTS.map((c, i) => (
                  <div key={i} style={{ padding: "18px 22px", borderRadius: "18px", border: "1px solid rgba(74,127,167,0.13)", background: "rgba(74,127,167,0.025)" }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: c.dot, marginBottom: "10px" }} />
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#0A1931", fontWeight: 600 }}>{c.name}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#4A7FA7", marginTop: "3px" }}>{c.org}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Download / Preview */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "44px", flexWrap: "wrap" }}>
          {[
            { label: "Download Resume", icon: <Download size={15} />, primary: true  },
            { label: "Preview Resume",  icon: <ExternalLink size={15} />, primary: false },
          ].map(btn => (
            <a key={btn.label} href="#" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "17px 38px", borderRadius: "100px",
              fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.5px",
              textDecoration: "none",
              background: btn.primary ? "linear-gradient(135deg, #0A1931, #1A3D63)" : "transparent",
              color: btn.primary ? "#F6FAFD" : "#0A1931",
              border: btn.primary ? "none" : "1px solid rgba(10,25,49,0.18)",
              boxShadow: btn.primary ? "0 16px 48px rgba(10,25,49,0.2)" : "none",
              transition: "all 0.35s ease",
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = btn.primary ? "0 24px 64px rgba(10,25,49,0.32)" : "0 8px 24px rgba(10,25,49,0.1)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = btn.primary ? "0 16px 48px rgba(10,25,49,0.2)" : "none";
              }}
            >
              {btn.icon} {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
