import React from 'react';
import { FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <h2 className=' text-white text-6xl font-bold'>Hi, This is Azharul Raj</h2>
            <p className='text-gray-100 w-6/12 my-6'>I am a frontend web developer. I can provide clean code and pixel perfect design.
                I also make website more & more interactive with web animations.</p>
            <div className="flex gap-5 text-4xl text-gray-300 ">
                <FaFacebook className='hover:text-white' />
                <FaLinkedin className='hover:text-white' />
                <FaGithub className='hover:text-white'/>
            </div>
        </div>
    );
};

export default Hero;