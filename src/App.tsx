import { useState, useEffect } from "react";
import LoadingScreen  from "./components/LoadingScreen";
import CustomCursor   from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar         from "./components/Navbar";
import FloatingHireMe from "./components/FloatingHireMe";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Experience     from "./components/Experience";
import Resume         from "./components/Resume";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";

const SECTIONS = ["hero", "about", "skills", "projects", "experience", "resume", "contact"];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [active,  setActive ] = useState("hero");

  useEffect(() => {
    if (loading) return;
    const observers = SECTIONS.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar active={active} />
          <FloatingHireMe />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
