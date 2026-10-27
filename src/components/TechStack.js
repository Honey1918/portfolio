import React from "react";
import "./TechStack.css";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiAmazonwebservices,
  SiFirebase,
  SiCplusplus,
  SiGit,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";

// Edit this list to add or remove cards. `color` tints the icon and hover glow.
const TECH = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "React Native", Icon: TbBrandReactNative, color: "#8ab4ff" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#6cc24a" },
  { name: "NestJS", Icon: SiNestjs, color: "#e0234e" },
  { name: "Flutter", Icon: SiFlutter, color: "#54c5f8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4f8ad9" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Dart", Icon: SiDart, color: "#2bb7f6" },
  { name: "AWS", Icon: SiAmazonwebservices, color: "#ff9900" },
  { name: "SQL", Icon: FaDatabase, color: "#b0b7c3" },
  { name: "Firebase", Icon: SiFirebase, color: "#ffca28" },
  { name: "C++", Icon: SiCplusplus, color: "#5c9ee0" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
];

const COLUMNS = 3;

const TechStack = () => (
  <div className="tech-grid">
    {Array.from({ length: COLUMNS }, (_, col) => (
      <div className="tech-column" key={col}>
        {TECH.filter((_, i) => i % COLUMNS === col).map(({ name, Icon, color }) => (
          <div className="tech-card" key={name} style={{ "--tech-color": color }}>
            <Icon className="tech-icon" aria-hidden="true" />
            <span className="tech-label">{name}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default TechStack;
