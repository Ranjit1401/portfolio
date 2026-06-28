import { useRef, useEffect } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };
    let raf: number;
    const tick = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.1;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${trail.current.x}px`;
        ringRef.current.style.top  = `${trail.current.y}px`;
      }
      if (ring2Ref.current) {
        ring2Ref.current.style.left = `${trail.current.x}px`;
        ring2Ref.current.style.top  = `${trail.current.y}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const base: React.CSSProperties = {
    position: "fixed", pointerEvents: "none", zIndex: 9990,
    transform: "translate(-50%,-50%)", borderRadius: "50%",
  };

  return (
    <>
      <div ref={dotRef}  style={{ ...base, width: "6px",  height: "6px",  background: "#B3CFE5", zIndex: 9993 }} />
      <div ref={ringRef} style={{ ...base, width: "36px", height: "36px", border: "1px solid rgba(74,127,167,0.6)", animation: "cursorBlink 2s ease-in-out infinite" }} />
      <div ref={ring2Ref} style={{ ...base, width: "60px", height: "60px", background: "radial-gradient(circle, rgba(74,127,167,0.06) 0%, transparent 70%)" }} />
    </>
  );
}
