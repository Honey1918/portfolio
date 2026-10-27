import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const buildOptions = () => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 110, density: { enable: true, area: 900 } },
      color: { value: ["#ffffff", "#ffffff", cssVar("--accent"), cssVar("--accent-2")] },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.8 },
        animation: { enable: !reduceMotion, speed: 0.5, sync: false },
      },
      size: { value: { min: 0.5, max: 1.8 } },
      move: {
        enable: !reduceMotion,
        speed: 0.15,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: { onHover: { enable: !reduceMotion, mode: "repulse" } },
      modes: { repulse: { distance: 90, duration: 0.4 } },
    },
  };
};

// Starfield behind the whole page; accent-colored stars come from theme.css.
const ParticlesBackground = () => {
  const options = useMemo(buildOptions, []);

  return <Particles id="starfield" init={loadSlim} options={options} />;
};

export default ParticlesBackground;
