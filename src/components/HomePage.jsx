import React from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Galary from './sections/Galary';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About/>
            <Projects/>
            <Contact />
            <Galary/>
        </div>
    );
};

export default HomePage;