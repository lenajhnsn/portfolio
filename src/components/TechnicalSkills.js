import React from "react";
import "./TechnicalSkills.css"; // Import CSS for styling

// Import SVGs as images for use in <img> elements
import javascriptLogo from '../assets/javascript.svg';
import html5Logo from '../assets/html5.svg';
import cssLogo from '../assets/css3.svg';
import vueLogo from '../assets/vuedotjs.svg';
import javaLogo from '../assets/java-plain-wordmark.svg';
import springbootLogo from '../assets/springboot.svg';
import postgresqlLogo from '../assets/postgresql.svg';
import intellijLogo from '../assets/intellijidea.svg';
import gitLogo from '../assets/git.svg';
import githubLogo from '../assets/github.svg';
import gitlabLogo from '../assets/gitlab.svg';
import postmanLogo from '../assets/postman.svg';
import rLogo from '../assets/r.svg';

// Array of skills, organized by category
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML5", logo: html5Logo },
      { name: "CSS", logo: cssLogo },
      { name: "Vue.js", logo: vueLogo },
      // Additional skills can be added here as objects with name and logo
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Spring Boot", logo: springbootLogo },
      { name: "PostgreSQL", logo: postgresqlLogo },
      // Additional skills can be added here
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
      // Additional tools or testing skills can be added here
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "R", logo: rLogo },
      // Additional skills can be added here
    ],
  },
];

// Functional component to render the technical skills
const TechnicalSkills = () => {
  return (
    <div className="technical-skills-container">
      <h2>Technical Skills</h2> {/* Section title for technical skills */}

      {/* Iterate over each skill category */}
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3> {/* Category title (e.g., Frontend, Backend) */}
          <div className="skills-list">
            {/* Iterate over each skill in the current category */}
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <img 
                  src={skill.logo}  // Use the logo as image source
                  alt={skill.name}  // Alt text for accessibility
                  className="skill-logo"  // CSS class for styling the logo
                />
                <span>{skill.name}</span> {/* Display the skill name */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;
