import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-gray-950  text-white py-10 px-6" id="contact">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-8">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
        <span className="text-indigo-400 hover:text-cyan-100">P</span>roductZo
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-lg">
          {["Home", "AddProduct", "Contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300"
              >
                {section}
              </a>
            )
          )}
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-8 mt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook size={36} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={36} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors duration-300"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 transition-colors duration-300"
          >
            <FaInstagram size={36} />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          &copy; 2024 ProductZo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
