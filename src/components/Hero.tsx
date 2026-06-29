import { useState, useEffect } from "react";
import { PERSONAL, TITLES } from "../data/portfolio";

function goto(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [show, setShow] = useState(true);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const iv = setInterval(() => {
      setShow(false);
      setTimeout(() => { setTitleIdx(i => (i + 1) % TITLES.length); setShow(true); }, 350);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: "linear-gradient(140deg, #0A1931 0%, #1A3D63 55%, #0A1931 100%)",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
    }}>
      {/* Mouse radial glow */}
      <div style={{
        position: "absolute",
        left: `${mouse.x * 100}%`, top: `${mouse.y * 100}%`,
        width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(74,127,167,0.1) 0%, transparent 65%)",
        transform: "translate(-50%,-50%)", pointerEvents: "none",
        transition: "left 0.4s ease, top 0.4s ease",
      }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(74,127,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,127,167,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      {/* Blobs */}
      {[
        { top: "-120px", right: "-120px", w: "560px", h: "560px", op: 0.14, delay: "0s",  dur: "12s" },
        { bottom: "-160px", left: "-100px", w: "480px", h: "480px", op: 0.1,  delay: "4s",  dur: "16s" },
        { top: "20%",  left: "40%",    w: "300px", h: "300px", op: 0.08, delay: "2s",  dur: "10s" },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute",
          top: (b as any).top, bottom: (b as any).bottom,
          left: (b as any).left, right: (b as any).right,
          width: b.w, height: b.h,
          background: `radial-gradient(ellipse, rgba(74,127,167,${b.op}) 0%, transparent 70%)`,
          animation: `blob ${b.dur} ease-in-out infinite ${b.delay}`,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }} />
      ))}

      {/* Particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: `${1 + (i % 3)}px`, height: `${1 + (i % 3)}px`,
          borderRadius: "50%",
          background: `rgba(179,207,229,${0.15 + (i % 4) * 0.08})`,
          left: `${5 + (i * 5.4) % 90}%`, bottom: "0",
          animation: `particleRise ${8 + (i % 5) * 2}s linear infinite ${i * 0.6}s`,
        }} />
      ))}

      <div style={{
        maxWidth: "1360px", width: "100%", margin: "0 auto",
        padding: "130px 48px 80px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "80px", alignItems: "center",
      }}>
        {/* Left – text */}
        <div style={{ animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "rgba(74,127,167,0.1)",
            border: "1px solid rgba(74,127,167,0.28)",
            borderRadius: "100px", padding: "7px 18px", marginBottom: "36px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4A7FA7", display: "inline-block", animation: "pulseGlow 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B3CFE5", letterSpacing: "1px" }}>
              Learning: {PERSONAL.currentlyLearning}
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 6.5vw, 6rem)",
            fontWeight: 700, lineHeight: 1.02,
            color: "#F6FAFD", letterSpacing: "-2px", marginBottom: "28px",
          }}>
            {PERSONAL.name.split(" ")[0]}<br />
            <span className="text-shimmer">{PERSONAL.name.split(" ")[1]}</span><br />
            {PERSONAL.name.split(" ")[2]}
          </h1>

          {/* Cycling title */}
          <div style={{ height: "36px", marginBottom: "32px", overflow: "hidden" }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "#4A7FA7", fontWeight: 500, letterSpacing: "0.5px",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(-16px)",
              transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
            }}>
              — {TITLES[titleIdx]}
            </p>
          </div>

          {/* Bio */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem", lineHeight: 1.85,
            color: "rgba(179,207,229,0.65)",
            maxWidth: "500px", marginBottom: "52px",
          }}>
            {PERSONAL.bio}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {[
              { label: "View Projects",    href: "#projects", primary: true  },
              { label: "Download Resume",  href: "resume",   primary: false },
              { label: "GitHub",           href: PERSONAL.github, primary: false, external: true },
              { label: "Contact",          href: "#contact",  primary: false },
            ].map(btn => (
              <a key={btn.label} href={btn.href}
                target={(btn as any).external ? "_blank" : undefined}
                rel={(btn as any).external ? "noopener noreferrer" : undefined}
                onClick={e => {
                  if (btn.href.startsWith("#")) {
                    e.preventDefault(); goto(btn.href.slice(1));
                  }
                }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "14px 28px", borderRadius: "100px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px", fontWeight: 500, letterSpacing: "0.5px",
                  textDecoration: "none",
                  background: btn.primary ? "linear-gradient(135deg, #4A7FA7, #1A3D63)" : "rgba(74,127,167,0.1)",
                  color: btn.primary ? "#F6FAFD" : "#B3CFE5",
                  border: btn.primary ? "none" : "1px solid rgba(74,127,167,0.28)",
                  boxShadow: btn.primary ? "0 8px 32px rgba(74,127,167,0.35)" : "none",
                  transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-3px) scale(1.03)";
                  el.style.boxShadow = btn.primary ? "0 20px 50px rgba(74,127,167,0.55)" : "0 8px 28px rgba(74,127,167,0.2)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = btn.primary ? "0 8px 32px rgba(74,127,167,0.35)" : "none";
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right – portrait */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          position: "relative",
          animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both",
        }}>
          {/* Spinning ring */}
          <div style={{
            position: "absolute", width: "470px", height: "470px", borderRadius: "50%",
            background: "conic-gradient(from 0deg, transparent 0%, rgba(74,127,167,0.55) 25%, transparent 50%, rgba(179,207,229,0.3) 75%, transparent 100%)",
            animation: "spinSlow 10s linear infinite",
          }} />
          {/* Blob glow */}
          <div style={{
            position: "absolute", width: "400px", height: "400px",
            background: "linear-gradient(135deg, rgba(26,61,99,0.7), rgba(74,127,167,0.35))",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "blob 9s ease-in-out infinite",
          }} />
          {/* Portrait */}
          <div style={{
            position: "relative", width: "340px", height: "420px",
            borderRadius: "44% 56% 56% 44% / 44% 44% 56% 56%",
            overflow: "hidden",
            animation: "float 7s ease-in-out infinite",
            border: "1px solid rgba(74,127,167,0.4)",
            boxShadow: "0 0 80px rgba(74,127,167,0.28), 0 40px 100px rgba(10,25,49,0.55)",
          }}>
            <img src={PERSONAL.heroImage} alt={PERSONAL.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,25,49,0.5) 0%, transparent 55%)" }} />
          </div>

          {/* Floating tags */}
          {[
            { label: "AI & ML",  style: { left: "calc(50% - 180px)", top: "calc(50% - 100px)" }, delay: "0s" },
            { label: "Python",   style: { left: "calc(50% + 90px)",  top: "calc(50% - 130px)" }, delay: "1s" },
            { label: "Cloud ☁", style: { left: "calc(50% - 160px)", top: "calc(50% + 110px)" }, delay: "2s" },
          ].map(tag => (
            <div key={tag.label} style={{
              position: "absolute", ...tag.style,
              background: "rgba(10,25,49,0.75)", backdropFilter: "blur(16px)",
              border: "1px solid rgba(74,127,167,0.38)", borderRadius: "100px",
              padding: "8px 18px",
              fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#B3CFE5", letterSpacing: "1px",
              animation: `float ${5 + parseInt(tag.delay)}s ease-in-out infinite ${tag.delay}`,
              boxShadow: "0 8px 28px rgba(74,127,167,0.18)", whiteSpace: "nowrap",
            }}>
              {tag.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "44px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
        animation: "fadeIn 1s ease 2s both",
      }}>
        <div style={{
          width: "26px", height: "42px",
          border: "1.5px solid rgba(74,127,167,0.45)", borderRadius: "13px",
          display: "flex", justifyContent: "center", paddingTop: "7px",
        }}>
          <div style={{
            width: "3px", height: "7px", background: "#4A7FA7", borderRadius: "2px",
            animation: "scrollBounce 1.6s ease-in-out infinite",
          }} />
        </div>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "rgba(179,207,229,0.4)", letterSpacing: "3.5px", textTransform: "uppercase" }}>
          Scroll to Explore
        </span>
      </div>
    </section>
  );
}
