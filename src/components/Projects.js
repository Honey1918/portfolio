import React from "react";
import "./Projects.css";

// Importing images
import bn1 from "../assets/projects/Booknest_1.png";
import bn2 from "../assets/projects/Booknest_2.png";
import ma1 from "../assets/projects/meal_app.jpeg";
import ma2 from "../assets/projects/meal_app1.png";
import fl1 from "../assets/projects/FLS_1.jpeg";
import fl2 from "../assets/projects/FLS_2.jpeg";
import ch1 from "../assets/projects/connect_1.png";
import ch2 from "../assets/projects/connect_2.png";

const projectsList = [
  {
    title: "BookNest",
    description: "A comprehensive book discovery platform where users can explore, save, and review their favorite books in an interactive interface.",
    techStack: "React Native, MongoDB",
    link: "https://github.com/Honey1918/BookNest",
    images: [bn1, bn2],
  },
  {
    title: "Meal App",
    description: "An intuitive menu and dish exploration application allowing users to discover engaging recipes and manage meal plans effortlessly.",
    techStack: "Flutter, Dart, Firebase",
    link: "https://github.com/Honey1918/second_app",
    images: [ma1, ma2],
  },
  {
    title: "Flight Reservation System",
    description: "A robust console-or-web system for handling flight bookings, managing passenger reservations, and querying schedules efficiently.",
    techStack: "C++, React",
    link: "https://github.com/Priyansh1920/Flight-Resevation-system",
    images: [fl1, fl2],
  },
  {
    title: "ConnectHub",
    description: "A modern social connection platform aimed at bringing people together through optimized networking and seamless communication.",
    techStack: "Flutter, Dart, Firebase",
    link: "https://github.com/Honey1918/ConnectHub",
    images: [ch1, ch2],
  },
];

const Projects = ({ id }) => {
  return (
    <section id={id} className="projects-section">
      <div className="projects-container">
        <h2 className="section-heading">
          My <span className="highlight">Projects</span>
        </h2>
        <div className="projects-grid">
          {projectsList.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-images-stack">
                <img
                  src={proj.images[1]}
                  className="img-back"
                  alt={`${proj.title} second view`}
                />
                <img
                  src={proj.images[0]}
                  className="img-front"
                  alt={`${proj.title} primary view`}
                />
                <div className="tech-stack-overlay">
                  <h4>Tech Stack</h4>
                  <p>{proj.techStack}</p>
                </div>
              </div>
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
