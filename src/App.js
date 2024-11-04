import React from 'react';
import Timeline from './components/Timeline';
import './components/Timeline.css';
import NavBar from './components/NavBar';



const App = () => {
    return (
        <div>
            <NavBar />
            <section id = "home"><Home /></section>
            <section id = "timeline"><Timeline /></section>
            <section id = "projects"><Projects /></section>
            <section id = "skills"><TechnicalSkills /></section>
            <section id = "contact"><Contact /></section>
        </div>
    );
};

export default App;
