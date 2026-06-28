import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { PERSONAL } from "../data/portfolio";

const NAV_ITEMS = ["About", "Projects", "Skills", "Resume", "Contact"];

function goto(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: scrolled ? "10px" : "22px",
      left: "50%", transform: "translateX(-50%)",
      zIndex: 1000,
      width: scrolled ? "min(680px, 90vw)" : "min(820px, 92vw)",
      transition: "all 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
    }}>
      <div style={{
        background: scrolled ? "rgba(10,25,49,0.88)" : "rgba(10,25,49,0.45)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(74,127,167,0.22)",
        borderRadius: "100px",
        padding: scrolled ? "10px 20px" : "14px 26px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.45s ease",
        boxShadow: scrolled ? "0 16px 48px rgba(10,25,49,0.4)" : "none",
      }}>
        {/* GitHub icon */}
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
          style={{ color: "#B3CFE5", display: "flex", transition: "all 0.3s ease" }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "#F6FAFD";
            el.style.transform = "rotate(10deg) scale(1.25)";
            el.style.filter = "drop-shadow(0 0 10px rgba(74,127,167,0.9))";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "#B3CFE5"; el.style.transform = ""; el.style.filter = "";
          }}
        >
          <Github size={19} />
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "4px" }}>
          {NAV_ITEMS.map(item => {
            const isActive = active === item.toLowerCase();
            return (
              <button key={item} onClick={() => goto(item.toLowerCase())}
                className="nav-link-btn"
                style={{
                  background: isActive ? "rgba(74,127,167,0.18)" : "transparent",
                  border: "none",
                  color: isActive ? "#F6FAFD" : "#B3CFE5",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px", fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.4px",
                  padding: "7px 16px", borderRadius: "100px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#F6FAFD"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? "#F6FAFD" : "#B3CFE5"; }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Logo */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "15px", fontWeight: 700, letterSpacing: "3px",
          background: "linear-gradient(135deg, #4A7FA7, #B3CFE5)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          {PERSONAL.initials}
        </div>
      </div>
    </nav>
  );
}
