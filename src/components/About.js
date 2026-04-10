import React from "react";
import "./About.css";

const About = ({ id }) => {
  return (
    <section id={id} className="about">

      <div className="about-right">
        <h2><span className="about-bullet"></span>ABOUT ME</h2>
        <h3>
          I am <span className="highlight">Priyansh Kashyap</span>
        </h3>
        <p>
          I am currently working as an SDE-1 at CrossBo AI, where I design and ship end-to-end features across the frontend and backend. My experience spans full stack development, REST API design, CMS integration, cloud infrastructure (AWS, S3), and cross-platform app development.
        </p>

        {/* Skills */}
        <div className="skills">
          <h3><span className="about-bullet"></span>Skills</h3>
          <div className="skill">
            <span className="highlight1">React Native / React.js</span>
            <div className="progress"><div style={{ width: "85%" }}>85%</div></div>
          </div>
          <div className="skill">
            <span className="highlight1">Node.js / REST APIs</span>
            <div className="progress"><div style={{ width: "85%" }}>85%</div></div>
          </div>
          <div className="skill">
            <span className="highlight1">Flutter / Dart</span>
            <div className="progress"><div style={{ width: "75%" }}>75%</div></div>
          </div>
          <div className="skill">
            <span className="highlight1">MongoDB / SQL</span>
            <div className="progress"><div style={{ width: "80%" }}>80%</div></div>
          </div>
          <div className="skill">
            <span className="highlight1">AWS / DevOps</span>
            <div className="progress"><div style={{ width: "70%" }}>70%</div></div>
          </div>
          <div className="skill">
            <span className="highlight1">DSA / C++</span>
            <div className="progress"><div style={{ width: "90%" }}>90%</div></div>
          </div>
        </div>

        <div className="stats-box">
          <div className="stat-item">
            <h3>Top 0.5%</h3>
            <p> JEE Advanced </p>
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

        {/* Experience */}
        <div className="experience">
          <h3><span className="about-bullet"></span>EXPERIENCE</h3>

          {/* CrossBo AI */}
          <div className="exp-card">
            <span className="year">June 2025 – Present</span>
            <h4> <a href="https://www.crossbo.com/" target="_blank" rel="noopener noreferrer">SDE-1 (Full Stack) </a></h4>
            <p>
              Shipped full-stack features across Genie and Luna apps for 3 international hotel chains.
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
      </div>
    </section>
  );
};

export default About;
