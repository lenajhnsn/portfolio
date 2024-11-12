import React from "react";
import "./TechnicalSkills.css"; // Import CSS for styling

// Import SVGs as images for use in <img> elements
import javascriptLogo from "../assets/javascript.svg";
import html5Logo from "../assets/html5.svg";
import cssLogo from "../assets/css3.svg";
import vueLogo from "../assets/vuedotjs.svg";
import javaLogo from "../assets/java-plain-wordmark.svg";
import springbootLogo from "../assets/springboot.svg";
import postgresqlLogo from "../assets/postgresql.svg";
import intellijLogo from "../assets/intellijidea.svg";
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github.svg";
import gitlabLogo from "../assets/gitlab.svg";
import postmanLogo from "../assets/postman.svg";
import rLogo from "../assets/r.svg";

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

// Array of videos with title, description, and embed URL
const videosData = [
  {
    title: "Bubble Sort Walkthrough",
    description: "A step-by-step explanation of the Bubble Sort algorithm.",
    url: "https://www.youtube.com/embed/nuRjXoqDl10",
  },
  {
    title: "Cocktail Shaker Sort Overview",
    description: "An in-depth look at Cocktail Shaker Sort and how it works.",
    url: "https://www.youtube.com/embed/wWIhgRtApPs",
  },
  {
    title: "Rotate Matrix by 90 Degrees in JavaScript",
    description:
      "Understanding matrices and how to rotate a matrix clockwise by 90 degrees in JavaScript.",
    url: "https://www.youtube.com/embed/F7l3Rmu78WM",
  },
  {
    title: "Selection Sort Walkthrough",
    description: "Review of the Selection Sort algorithm and a walkthrough of the solution in Javascript.",
    url: "https://www.youtube.com/embed/yxlg-jfLPpI", 
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
          <h3>{category.category}</h3>{" "}
          {/* Category title (e.g., Frontend, Backend) */}
          <div className="skills-list">
            {/* Iterate over each skill in the current category */}
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <img
                  src={skill.logo} // Use the logo as image source
                  alt={skill.name} // Alt text for accessibility
                  className="skill-logo" // CSS class for styling the logo
                />
                <span>{skill.name}</span> {/* Display the skill name */}
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Video walkthroughs section */}
      <div className="videos-section">
        <h2>Video Walkthroughs</h2>
        <div className="videos-grid">
          {videosData.map((video, index) => (
            <div key={index} className="video-item">
              <iframe
                src={video.url}
                title={video.title}
                className="video-embed"
                allowFullScreen
              ></iframe>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
