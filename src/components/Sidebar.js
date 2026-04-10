import React from "react";
import "./Sidebar.css";

const Sidebar = ({ open, onClose }) => {
  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <h1 className="logo">
        <span className="highlight">PRIYANSH_KASHYAP</span>
      </h1>
      <nav className="nav">
        <ul>
          <li><a href="#home" onClick={onClose}>Home</a></li>
          <li><a href="#about" onClick={onClose}>About</a></li>
          <li><a href="#services" onClick={onClose}>Services</a></li>
          <li><a href="#projects" onClick={onClose}>Projects</a></li>
          <li><a href="#contact" onClick={onClose}>Contact</a></li>
        </ul>
      </nav>
      <div className="theme-mode">
        <span>☀️ THEME MODE ▼</span>
      </div>
    </div>
  );
};

export default Sidebar;
