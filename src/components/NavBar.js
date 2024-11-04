import exp from 'constants';
import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className = "navbar">
            <ul>
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