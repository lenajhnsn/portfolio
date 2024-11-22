import React from "react";
import { motion } from 'framer-motion'; // Import framer-motion for animations
import './Home.css';
import HomeVideo from '../assets/Lena Portfolio Homepage Video.mp4'; // Import homepage video 
import HomeVideo2 from '../assets/Portfolio Introduction.mp4';

// Home component
const Home = ()=> {
    return (
        <div className = "home-container">
             {/* Video background */}
             <video className="background-video" src={HomeVideo2} autoPlay muted />
            
            {/* {/* Animated welcome message
            <motion.div 
            className="My path to software engineering"
            initial={{ opacity: 0, y: -50} } // Start with 0 opacity and position offset
            animate={{ opacity: 1, y: 0} } // Animate to full opacity and size
            transition={{ duration: 1, delay: 1} } // Animation lasts 1 second, starts after 1 second
            >
                <p>Explore my work and skills below!</p>
            </motion.div> */}
        </div> 
    );
};

export default Home;