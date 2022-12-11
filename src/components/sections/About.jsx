import React from "react";
import my_img from "../../assets/azharul_raj .jpg";

const About = () => {
  return (
    <>
      <div id="about" className="text-center mt-10">
        <h3 className="text-4xl font-bold text-white">ABOUT</h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative flex py-5 items-center w-9/12 lg:w-[20%]">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center">
          <div className="">
            <img className="px-10 rounded-full" src={my_img} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <div className="flex items-center text-white">
              <h4 className="font-bold text-2xl">Name : </h4>
              <p className="text-2xl ml-5"> Azharul Islam Raj</p>
            </div>
            <div className="flex text-white">
              <h4 className="font-bold text-2xl">About:</h4>
              <p className="text-xl ml-5">
                This is Azharul Raj.I'm a highly motivated and progress-focused
                web developer. I have completed my diploma in the department of
                Electronics. I love to do coding. I found myself very
                enthusiastic while I was working on any project.I'm always ready
                to learn new things, love to solve new problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
