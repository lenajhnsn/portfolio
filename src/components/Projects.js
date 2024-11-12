import React from 'react';
import './Projects.css'; // Import CSS for styling

// Placeholder image and video sources for now
const MemoArchiveImage = '/path/to/memo-archive-homepage.png';
const VideoPlaceholder = 'https://www.example.com/video-placeholder';

const Projects = () => {
    return (
        <div className="projects-container">
            {/* Full-width section for project title and image */}
            <div className="project-header">
                <h2>MemoArchive</h2>
                <img src={MemoArchiveImage} alt="MemoArchive Homepage" className="project-image" />
            </div>

            {/* Two-column row for front-end and back-end tech stacks */}
            <div className="tech-stack-row">
                <div className="tech-column">
                    <h3>Front-End</h3>
                    <ul>
                        <li>Vue.js</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div className="tech-column">
                    <h3>Back-End</h3>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>APIs</li>
                    </ul>
                </div>
            </div>

            {/* Final row for video walkthroughs */}
            <div className="video-row">
                <div className="video-column">
                    <h3>Front-End Walkthrough</h3>
                    <iframe 
                        src={VideoPlaceholder} 
                        title="Front-End Walkthrough"
                        className="video-placeholder"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-column">
                    <h3>Back-End Walkthrough</h3>
                    <iframe 
                        src={VideoPlaceholder} 
                        title="Back-End Walkthrough"
                        className="video-placeholder"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Projects;
