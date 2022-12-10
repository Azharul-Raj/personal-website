import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/sections/Header';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
};

export default Main;