import React from 'react';
import './Projects.css'; // Import CSS for styling
import MemoArchiveVideo from "../assets/memoarchivevid.mp4"; // Import a valid video file

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className='project-title'>My Project</h2>
            {/* Four-column row for description, video, and tech stack */}
            <div className="project-main-row">
                {/* Description column */}
                <div className="project-description">
                    <h3>About Memo Archive</h3>
                    <p>
                        Memo Archive is a web app designed to help users organize and preserve their memories. 
                        It provides a simple, intuitive interface to add, edit, and view memories, complete with photos and detailed descriptions. 
                    </p>
                </div>

                {/* Video column (spans two columns) */}
                <div className="project-video">
                    <video className="project-image" src={MemoArchiveVideo} autoPlay muted loop />
                </div>

                {/* Tech stack column */}
                <div className="project-tech-stack">
                    <h3>Tech Stack</h3>
                    <ul>
                        <li>Vue.js</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>APIs</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;
