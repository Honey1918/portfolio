import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const backgroundRef = useRef(null);
  const navRef = useRef(null);

  // Publish the fixed navbar's height as --nav-h so content and anchor
  // scrolling can clear it, even if the navbar's height changes (e.g. wrapping).
  useLayoutEffect(() => {
    const nav = navRef.current;
    const update = () =>
      document.documentElement.style.setProperty("--nav-h", `${nav.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  // Track mouse for the background gradient. Written straight to CSS variables
  // so moving the mouse doesn't re-render the whole app.
  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = backgroundRef.current;
      if (!el) return;
      el.style.setProperty("--mx", `${(e.clientX / window.innerWidth) * 100}%`);
      el.style.setProperty("--my", `${(e.clientY / window.innerHeight) * 100}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Layer */}
      <div className="background-layer" ref={backgroundRef} />
      <ParticlesBackground />
      <header className="navbar" ref={navRef}>
        <h1 className="logo">PRIYANSH <span className="highlight">KASHYAP</span></h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/* Main Content */}
      <div className="main-content">
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Services id="services" />
        <Contact id="contact" />
      </div>
    </>
  );
}

export default App;
