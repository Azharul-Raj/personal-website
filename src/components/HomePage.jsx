import React from 'react';
import Header from './sections/Header';
import Contact from './sections/Contact';
import Footer from './Footer/Footer';
import Hero from './sections/Hero';

const HomePage = () => {
    return (
        <div className='dark:bg-[#070D1B] '>
            <Header/>
            <Hero/>
            <Contact />
            <Footer/>
        </div>
    );
};

export default HomePage;