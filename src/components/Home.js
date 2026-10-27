import React from "react";
import "./Home.css";
import profileImage from "../assets/Priyansh.png";
import resume from "../assets/Priyansh_SDE1.pdf";
import { ReactTyped } from 'react-typed';  // Preferred

const Home = ({ id }) => {
  return (
    <section id={id} className="home">
      <div className="home-left">
        <p className="status">
          <svg width="10" height="10" viewBox="0 0 10 10" className="status-dot">
            <circle cx="5" cy="5" r="5" />
          </svg>
          Available for work
        </p>
        <h1>
          <span className="highlight3"> MY NAME IS</span><br /> <span className="highlight2">PRIYANSH</span>
        </h1>
        <h2>
          I'm a{"  "}
          <ReactTyped
            className="highlight"
            strings={[
              " SDE-1 Backend Engineer @ Digantara",
              " Full Stack Developer",
              " React Native & Flutter Expert",
              " Cloud & Backend Engineer",
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </h2>
        <p>
          “Architecting scalable full-stack applications and creating user-centric experiences.”
        </p>
        <div className="home-actions">
          <a href="#contact" className="hire-me">Hire Me</a>
          <a
            href={resume}
            download="Priyansh_Kashyap_Resume.pdf"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="home-right">
        <img src={profileImage} alt="Priyansh Kashyap" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
