import React from 'react';
import './Contact.css'; // Import CSS for styling

// Contact component
const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <p>I’d love to connect! Reach out to me via email or LinkedIn.</p>
            
            <div className="contact-links">
                {/* Email link */}
                <a href="mailto:lena.johnson000@gmail.com" target="_blank" rel="noopener noreferrer"> {/* blank = opens link in new tab & roopener = protects against malicious attacks & noreferrer = prevents browser from sending URL header*/} 
                    <i className="fas fa-envelope"></i> {/* FontAwesome email icon */}
                    <span>Email</span>
                </a>

                {/* LinkedIn link */}
                <a href="https://www.linkedin.com/in/lenajhnsn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> {/* FontAwesome LinkedIn icon */}
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
