import React from "react";
import "./About.css";
import TechStack from "./TechStack";

const About = ({ id }) => {
  return (
    <section id={id} className="about">
      <h2 className="section-heading">
        About <span className="highlight">Me</span>
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <h3>
            I am <span className="highlight">Priyansh Kashyap</span>
          </h3>
          <p>
            I am currently working as an SDE-1 (Backend Engineer) at Digantara, where I build and scale backend services and APIs. Previously, I shipped end-to-end features across the frontend and backend at CrossBo AI. My experience spans full stack development, REST API design, CMS integration, cloud infrastructure (AWS, S3), and cross-platform app development.
          </p>

          <div className="stats-box">
            <div className="stat-item">
              <h3>1.5 yr+</h3>
              <p> Experience </p>
            </div>
            <div className="stat-item">
              <h3>800+</h3>
              <p > <a className="stat-item-link " href="https://leetcode.com/u/Honey_19/" target="_blank" rel="noopener noreferrer">Problems Solved (DSA)</a></p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p > <a className="stat-item-link " href="https://github.com/Honey1918" target="_blank" rel="noopener noreferrer">Completed Projects</a></p>
            </div>
          </div>
        </div>

        <TechStack />
      </div>

      {/* Experience */}
      <div className="experience">
        <h3 className="about-subheading"><span className="about-bullet"></span>EXPERIENCE</h3>

        {/* Digantara */}
        <div className="exp-card">
          <span className="year">Sep 2026 – Present</span>
          <h4> <a href="https://www.digantara.co.in/" target="_blank" rel="noopener noreferrer">SDE-1 (Backend Engineer) – Digantara</a></h4>
          <p>
            Backend engineer building and maintaining scalable services and APIs.
          </p>
        </div>

        {/* CrossBo AI */}
        <div className="exp-card">
          <span className="year">June 2025 – Aug 2026</span>
          <h4> <a href="https://www.crossbo.com/" target="_blank" rel="noopener noreferrer">SDE-1 (Full Stack) – CrossBo AI</a></h4>
          <p>
            Shipped full-stack features across Genie and Luna apps for 10+ international hotel chains.
            Diagnosed critical production incidents, architected scalable REST APIs, and slashed
            asset load time by ~30% using CDN caching.
          </p>
        </div>

        {/* Novus Hi-Tech */}
        <div className="exp-card">
          <span className="year">June 2024 – Dec 2024</span>
          <h4> <a href="https://novushitech.com/" target="_blank" rel="noopener noreferrer">SDE Intern (Full Stack) – Novus Hi-Tech</a></h4>
          <p>
            Engineered a cross-platform mobile app using <b>React Native, Node.js, and MongoDB</b>.
            Boosted performance by 30% via rendering optimizations, and implemented interactive
            features including live video streaming and real-time tracking.
          </p>
        </div>

        {/* GirlScript */}
        <div className="exp-card">
          <span className="year">May 2023 – July 2023</span>
          <h4>GirlScript Summer of Code – Coordinator</h4>
          <p>
            Worked as an open-source contributor and coordinator in various App development projects,
            managing deliverables and collaborating with open-source developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
