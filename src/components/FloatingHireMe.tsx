export default function FloatingHireMe() {
  return (
    <a
      href="#contact"
      onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
      style={{
        position: "fixed", bottom: "36px", left: "28px", zIndex: 500,
        background: "linear-gradient(135deg, #1A3D63, #0A1931)",
        border: "1px solid rgba(74,127,167,0.35)",
        color: "#B3CFE5",
        fontFamily: "'Inter', sans-serif",
        fontSize: "11px", fontWeight: 500, letterSpacing: "1.5px",
        textTransform: "uppercase",
        padding: "12px 22px", borderRadius: "100px",
        textDecoration: "none",
        boxShadow: "0 8px 32px rgba(74,127,167,0.25)",
        animation: "floatB 4s ease-in-out infinite",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", gap: "6px",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "linear-gradient(135deg, #4A7FA7, #1A3D63)";
        el.style.color = "#F6FAFD";
        el.style.boxShadow = "0 16px 48px rgba(74,127,167,0.5)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "linear-gradient(135deg, #1A3D63, #0A1931)";
        el.style.color = "#B3CFE5";
        el.style.boxShadow = "0 8px 32px rgba(74,127,167,0.25)";
      }}
    >
      <span style={{
        width: "5px", height: "5px", borderRadius: "50%",
        background: "#4A7FA7", animation: "pulseGlow 2s ease-in-out infinite",
        display: "inline-block",
      }} />
      Hire Me
    </a>
  );
}
