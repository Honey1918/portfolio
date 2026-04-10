import React from "react";
import "./Home.css";
import profileImage from "../assets/Priyansh.png";
import { ReactTyped } from 'react-typed';  // Preferred

const Home = ({ id }) => {
  return (
    <section id={id} className="home">
      <div className="home-left">
        <p className="status">
          <svg width="10" height="10" viewBox="0 0 10 10" className="status-dot">
            <circle cx="5" cy="5" r="5" fill="#f59e0b" />
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
              " SDE-1 @ CrossBo AI",
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
        <button className="hire-me">Hire Me</button>
      </div>

      <div className="home-right">
        <img src={profileImage} alt="Priyansh Kashyap" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
