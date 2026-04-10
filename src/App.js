import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Track mouse for gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Layer */}
      <div
        className="background-layer"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgb(3, 15, 20), rgb(16, 12, 35), rgb(31, 33, 33)
          )`,
        }}
      />
      <header className="navbar">
        <h1 className="logo">PRIYANSH <span className="highlight">KASHYAP</span></h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/* Main Content */}
      <div className="main-content">
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
      </div>
    </>
  );
}

export default App;
