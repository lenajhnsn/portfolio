import React from "react";
import "./TechnicalSkills.css"; // Reuse the same CSS

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
    title: "Recursive Rock-Paper-Scissors in JavaScript",
    description:
      "Deep dive into the Rock-Paper-Scissors problem using recursion in JavaScript.",
    url: "https://www.youtube.com/embed/9fTTYMZ0yck",
  },
  {
    title: "Selection Sort Walkthrough",
    description: "Review of the Selection Sort algorithm and a walkthrough of the solution in JavaScript.",
    url: "https://www.youtube.com/embed/yxlg-jfLPpI",
  },
];

// Functional component for Video Walkthroughs
const TechVideos = () => {
  return (
    <div className="videos-section">
      <h2>Coding Solution Tutorials</h2>
      <p>This section showcases a series of videos I created for Hack Reactor students to help them better understand various algorithms and technical problems. Each video provides an in-depth exploration of the solution, including detailed coding walkthroughs, and discussions on time complexity. These resources were designed to support students in learning fundamental concepts and building confidence in their problem-solving abilities.</p>
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
  );
};

export default TechVideos;
