import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Typewriter from 'react-ts-typewriter';

const Hero = () => {
    return (
        <div className='flex flex-col mx-5 mt-10 lg:mt-0 justify-center items-center space-y-4 lg:h-[80vh]'>
            <h1><Typewriter
                text={'HELLO WORLD'}
                loop={true}
                delay={1000}
            /></h1>
            <h2 className=' text-white text-6xl font-bold'>Hi, This is Azharul Raj</h2>
            
            <p className='text-gray-100 lg:w-6/12'>I am a frontend web developer. I can provide clean code and pixel perfect design.
                I also make website more & more interactive with web animations.</p>
            <div className="flex gap-5 text-4xl text-gray-300 ">
                <a href="https://www.facebook.com/profile.php?id=100009026880126" target="_blank"><FaFacebook className='hover:text-white' /></a>
                <a href="https://www.linkedin.com/in/azharulraj/" target="_blank"><FaLinkedin className='hover:text-white' /></a>
                <a href="https://github.com/Azharul-Raj" target="_blank"><FaGithub className='hover:text-white'/></a>
            </div>
            <div className="">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <a href='/Resume of Azharul Raj -F.pdf'>Download Resume</a>
  </span>
</button>
            </div>
        </div>
    );
};

export default Hero;