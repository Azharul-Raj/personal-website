import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const Contact = () => {
    const form = useRef();
  // email submitting function
  const handleSubmit = (e) => {
    e.preventDefault()
      emailjs.sendForm("service_599u9bh", "template_f9bhyuv", form.current, "T7zrR1nZfMNDx0qUq")
      .then((result) => {
          console.log(result.text);
    }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div>
      <div className="text-center">
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-600">
          CONTACT ME
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative flex py-5 items-center w-[20%]">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Content</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* form part */}
        <div className="mx-4 lg:mx-10">
        <form ref={form} onSubmit={handleSubmit} action="#" className="space-y-4">
          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email" name="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@mail.com" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 mt-0 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
        </div>
        {/* contact info */}
        <div className="ml-4 mt-8 sm:mt-5">
          <div className="flex">
            <div className="p-4 border rounded-full border-gray-50 hover:border-green-500">
              <FaEnvelope className=" dark:text-gray-300" />
            </div>
            <div className="dark:text-white ml-4 lg:ml-8">
              <h3 className="text-xl font-bold">Email</h3>
              <p>azharulislam.raj51@gmail.com</p>
            </div>
          </div>
          <div className="flex my-10">
            <div className="p-4 border rounded-full border-gray-50 hover:border-green-500">
              <FaMapMarkerAlt className=" dark:text-gray-300" />
            </div>
            <div className="dark:text-white ml-4 lg:ml-8">
              <h3 className="text-xl font-bold">Location</h3>
              <p>Rangpur, Bangladesh</p>
            </div>
          </div>
          <div className="flex my-10">
            <div className="p-4 border rounded-full border-gray-50 hover:border-green-500">
              <FaPhoneAlt className=" dark:text-gray-300" />
            </div>
            <div className="dark:text-white ml-4 lg:ml-8">
              <h3 className="text-xl font-bold">Phone</h3>
              <p>+880-177-350-1139</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
