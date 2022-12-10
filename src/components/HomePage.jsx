import React from 'react';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Projects/>
            <Contact />
        </div>
    );
};

export default HomePage;