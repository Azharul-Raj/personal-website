import React from 'react';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';

const HomePage = () => {
    return (
        <div className='dark:bg-[#070D1B] '>
            <Hero/>
            this is homepage
            <Contact />
            <Footer/>
        </div>
    );
};

export default HomePage;