import React from "react";
import "./TechnicalSkills.css"; // Import CSS for styling

// Import SVGs as images for use in <img> elements
import javascriptLogo from "../assets/jslogo.png";
import html5Logo from "../assets/htmllogo.png";
import cssLogo from "../assets/csslogo.png";
import sqlLogo from "../assets/sqllogo.png";
import vueLogo from "../assets/vuelogo.png";
import javaLogo from "../assets/javalogo.png";
import springbootLogo from "../assets/springlogo.png";
import postgresqlLogo from "../assets/postgresqllogo.png";
import intellijLogo from "../assets/intellijlogo.png";
import gitLogo from "../assets/gitlogo.png";
import githubLogo from "../assets/githublogo.png";
import gitlabLogo from "../assets/gitlablogo.png";
import postmanLogo from "../assets/postman.png";
import rLogo from "../assets/rlogo.png";
import spssLogo from "../assets/spsslogo.png";

// Array of skills, organized by category
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML5", logo: html5Logo },
      { name: "CSS", logo: cssLogo },
      { name: "Vue.js", logo: vueLogo },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "Spring Boot", logo: springbootLogo },
      { name: "PostgreSQL", logo: postgresqlLogo },
    ],
  },
  {
    category: "Tools & Testing",
    skills: [
      { name: "IntelliJ", logo: intellijLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "GitLab", logo: gitlabLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "R", logo: rLogo },
      { name: "SPSS", logo: spssLogo },
    ],
  },
];

// Functional component for Technical Skills
const TechnicalSkills = () => {
  return (
    <div className="technical-skills-container">
      <h2>Technical Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;
