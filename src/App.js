import React from 'react';
import Timeline from './components/Timeline';
import Home from './components/Home';
import './components/Timeline.css';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';



const App = () => {
    return (
        <div>
            <NavBar />
            <section id = "home"><Home /></section>
            <section id = "projects"><Projects /></section>
            <section id = "skills"><TechnicalSkills /></section>
            <section id = "timeline"><Timeline /></section>
            <section id = "contact"><Contact /></section>
        </div>
    );
};

export default App;
