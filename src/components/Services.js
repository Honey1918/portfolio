import React from "react";
import "./Services.css";

const services = [
  {
    title: "App Development",
    description:
      "Building performant cross‑platform apps with clean architecture, complex UI/UX, and scalable backends.",
    icon: (
      <svg className="icon phone" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Flutter Developer",
    description:
      "Creating pixel‑perfect, Zoom-like Flutter apps with smooth animations, secure auth, and responsive layouts.",
    icon: (
      <svg className="icon flutter" viewBox="0 0 256 256" fill="none">
        <path d="M38 164 L128 74 L164 110 L74 200 Z" fill="currentColor" />
        <path d="M164 110 L218 164 L182 200 L128 146 Z" fill="currentColor" opacity="0.8" />
      </svg>
    ),
  },
  {
    title: "Backend Developer",
    description:
      "Designing scalable REST APIs, databases, CMS integrations, and cloud infrastructure on AWS/S3.",
    icon: (
      <svg className="icon server" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="15" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="6" r="1" fill="currentColor" />
        <circle cx="7" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "React Native Developer",
    description:
      "Building high‑quality iOS/Android apps with rendering optimizations, live streaming, and production-grade workflows.",
    icon: (
      <svg className="icon rn" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="3" fill="currentColor" />
        <ellipse cx="18" cy="18" rx="15" ry="6" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="18" cy="18" rx="15" ry="6" transform="rotate(60 18 18)" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="18" cy="18" rx="15" ry="6" transform="rotate(-60 18 18)" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const Services = ({ id }) => {
  return (
    <section id={id} className="services-section">
      <div className="services-wrapper">
        <h2 className="section-heading">
          MY <span className="highlight">SERVICES</span>
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="icon-wrap">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="shine" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


