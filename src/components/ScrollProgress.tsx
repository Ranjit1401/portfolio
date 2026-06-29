import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ position: "fixed", right: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 200 }}>
      <div style={{ width: "2px", height: "100px", background: "rgba(74,127,167,0.15)", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{
          width: "100%", height: `${pct}%`,
          background: "linear-gradient(180deg, #4A7FA7, #B3CFE5)",
          borderRadius: "2px", transition: "height 0.1s ease",
        }} />
      </div>
    </div>
  );
}
