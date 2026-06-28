import { useState } from "react";
import { Github, Linkedin, Mail, Instagram, ArrowRight } from "lucide-react";
import { PERSONAL } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const socials = [
    { icon: <Github size={19} />,    label: "GitHub",    sub: PERSONAL.github.replace("https://",""),  href: PERSONAL.github    },
    { icon: <Linkedin size={19} />,  label: "LinkedIn",  sub: "linkedin.com/in/ranjit",               href: PERSONAL.linkedin  },
    { icon: <Mail size={19} />,      label: "Email",     sub: PERSONAL.email,                         href: `mailto:${PERSONAL.email}` },
    { icon: <Instagram size={19} />, label: "Instagram", sub: "@ranjit.dev",                          href: PERSONAL.instagram },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "15px 20px",
    background: "rgba(26,61,99,0.38)",
    border: "1px solid rgba(74,127,167,0.2)",
    borderRadius: "16px", color: "#F6FAFD",
    fontFamily: "'Inter', sans-serif", fontSize: "14px",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease, background 0.3s ease",
  };

  return (
    <section id="contact" style={{
      background: "linear-gradient(140deg, #0A1931 0%, #1A3D63 100%)",
      padding: "140px 48px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: "-200px", right: "-200px",
        width: "600px", height: "600px",
        background: "radial-gradient(ellipse, rgba(74,127,167,0.12) 0%, transparent 70%)",
        animation: "blob 12s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", top: "-100px", left: "-100px",
        width: "400px", height: "400px",
        background: "radial-gradient(ellipse, rgba(26,61,99,0.4) 0%, transparent 70%)",
        animation: "blob 16s ease-in-out infinite 5s",
      }} />

      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref as React.Ref<HTMLDivElement>} style={{
          textAlign: "center", marginBottom: "80px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "4px", color: "#4A7FA7", textTransform: "uppercase" }}>
            Get In Touch
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "#F6FAFD", marginTop: "14px", lineHeight: 1.08 }}>
            {"Let's Build Something"}<br />
            <span className="text-shimmer">Amazing.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "72px", alignItems: "start" }}>
          {/* Left — socials */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "rgba(179,207,229,0.6)", lineHeight: 1.85, marginBottom: "48px" }}>
              Always open to discussing new projects, creative ideas, or opportunities to be part of something impactful.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "16px 20px", borderRadius: "20px",
                    background: "rgba(26,61,99,0.28)", border: "1px solid rgba(74,127,167,0.18)",
                    textDecoration: "none",
                    transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(74,127,167,0.18)";
                    el.style.borderColor = "rgba(74,127,167,0.4)";
                    el.style.transform = "translateX(10px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(26,61,99,0.28)";
                    el.style.borderColor = "rgba(74,127,167,0.18)";
                    el.style.transform = "";
                  }}
                >
                  <span style={{ color: "#4A7FA7", flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#F6FAFD", fontWeight: 500 }}>{s.label}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(179,207,229,0.4)", marginTop: "2px" }}>{s.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} style={{
            display: "flex", flexDirection: "column", gap: "20px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}>
            {(["name", "email", "subject"] as const).map(field => (
              <div key={field}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#4A7FA7", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Your full name" : field === "email" ? "your@email.com" : "What is this about?"}
                  value={form[field]}
                  onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "rgba(74,127,167,0.6)"; e.target.style.background = "rgba(26,61,99,0.55)"; }}
                  onBlur={e  => { e.target.style.borderColor = "rgba(74,127,167,0.2)";  e.target.style.background = "rgba(26,61,99,0.38)"; }}
                />
              </div>
            ))}

            <div>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#4A7FA7", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                Message
              </label>
              <textarea rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => { e.target.style.borderColor = "rgba(74,127,167,0.6)"; e.target.style.background = "rgba(26,61,99,0.55)"; }}
                onBlur={e  => { e.target.style.borderColor = "rgba(74,127,167,0.2)";  e.target.style.background = "rgba(26,61,99,0.38)"; }}
              />
            </div>

            <button type="submit" style={{
              padding: "17px 40px", borderRadius: "100px",
              background: sent ? "rgba(74,127,167,0.4)" : "linear-gradient(135deg, #4A7FA7, #1A3D63)",
              border: "none", color: "#F6FAFD",
              fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.5px",
              boxShadow: "0 16px 48px rgba(74,127,167,0.28)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              transition: "all 0.4s ease",
            }}
              onMouseEnter={e => {
                if (!sent) {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 64px rgba(74,127,167,0.5)";
                }
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(74,127,167,0.28)";
              }}
            >
              {sent ? "Message Sent ✓" : <><ArrowRight size={15} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
