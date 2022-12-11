import React from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About/>
            <Projects/>
            <Contact />
        </div>
    );
};

export default HomePage;