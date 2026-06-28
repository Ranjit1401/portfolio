import { PERSONAL } from "../data/portfolio";

function goto(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer style={{
      background: "#0A1931",
      borderTop: "1px solid rgba(74,127,167,0.1)",
      padding: "60px 48px 36px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Wave top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, lineHeight: 0, transform: "translateY(-99%)" }}>
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="#0A1931" />
        </svg>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "28px", marginBottom: "48px" }}>
          {/* Logo + credit */}
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem", fontWeight: 700, letterSpacing: "4px",
              background: "linear-gradient(135deg, #4A7FA7, #B3CFE5)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{PERSONAL.initials}</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(74,127,167,0.55)", marginTop: "6px", letterSpacing: "0.4px" }}>
              Designed & Developed by {PERSONAL.name}
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            {["about", "projects", "skills", "contact"].map(link => (
              <button key={link} onClick={() => goto(link)} style={{
                background: "none", border: "none",
                fontFamily: "'Inter', sans-serif", fontSize: "13px",
                color: "rgba(74,127,167,0.65)",
                textTransform: "capitalize", letterSpacing: "0.5px",
                transition: "color 0.3s ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#B3CFE5"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(74,127,167,0.65)"; }}
              >{link}</button>
            ))}
          </div>

          {/* Back to top */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
            padding: "11px 22px", borderRadius: "100px",
            background: "rgba(74,127,167,0.08)", border: "1px solid rgba(74,127,167,0.2)",
            color: "#B3CFE5",
            fontFamily: "'Inter', sans-serif", fontSize: "12px", letterSpacing: "0.8px",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(74,127,167,0.18)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(74,127,167,0.08)";
              el.style.transform = "";
            }}
          >↑ Back to Top</button>
        </div>

        <div style={{
          borderTop: "1px solid rgba(74,127,167,0.07)", paddingTop: "22px",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif", fontSize: "12px",
          color: "rgba(74,127,167,0.35)", letterSpacing: "0.4px",
        }}>
          © 2026 {PERSONAL.name} · All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
