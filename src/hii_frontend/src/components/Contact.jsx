// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-custom-dark scroll-smooth">
      {/* Left Side: Contact Information */}
      <div className="md:w-1/2 p-6 text-center md:text-left bg-custom-dark">
        <h1 className="text-4xl font-bold text-white">Contact <span className="text-blue-600">Me</span></h1>
        <h3 className="text-lg font-semibold text-white">Let's Work Together</h3>
        <p className="mt-4 text-xl text-white">
          Email: <a href="mailto:cksangwan2003@gmail.com" className="text-blue-600 hover:underline">cksangwan2003@gmail.com</a>
        </p>
        <p className="mt-2 text-xl text-white">Phone: +91-9813167873</p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start mt-4 space-x-4 ">
          <a href="https://www.instagram.com/chiku_sangwan03?igsh=MTdyNHFtb2c0MXBweg==" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className="h-8 w-8 hover:opacity-75 transition duration-300 transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/chiragsangwan03/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="h-8 w-8 hover:opacity-75 transition duration-300 transform hover:scale-110" />
          </a>
          <a href="https://github.com/Chirag1003" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="h-8 w-8 hover:opacity-75 transition duration-300 transform hover:scale-110" />
          </a>
        </div>
      </div>

  
      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-xl text-white">Username</label>
            <input type="text" id="username" name="username" className="w-full mt-1 p-2 border border-gray-300 rounded-md transition duration-300 transform hover:scale-110" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md transition duration-300 transform hover:scale-110" />
          </div>
          <div>
            <label htmlFor="message" className="block text-xl text-white">Message</label>
            <textarea id="message" name="message" rows="3" className="w-full mt-1 p-2 border border-gray-300 rounded-md transition duration-300 transform hover:scale-110"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Contact;