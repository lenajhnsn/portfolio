import React from 'react';
import './NavBar.css';
import logo from '../assets/header4.png';



const NavBar = () => {
    return (
        <nav className = "navbar">

            {/* Portfolio title on the left side */}
            <a href="/" className="navbar-title">
                <img src={logo} alt="Logo" className="logo" />
            </a> 
            
            {/* Navigation links */}
            <ul className="navbar-links">
                <li><a href = "home">Home</a></li>
                <li><a href = "#timeline">About</a></li>
                <li><a href = "#projects">Projects</a></li>
                <li><a href = "#skills">Skills</a></li>
                <li><a href = "#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;