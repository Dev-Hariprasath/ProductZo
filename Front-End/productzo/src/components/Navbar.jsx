import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950 text-white ">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src="../src/assets/img/logo.png" 
            alt="logo"
            className="rounded-full w-12 h-12 shadow-lg bg-cover border-2 border-indigo-500"
          />
          <h2 className="text-2xl font-bold">
            <span className="text-indigo-500 hover:text-cyan-100">P</span>roductZo
          </h2>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-zinc-200 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <button onClick={toggleDropdown} className="hover:text-zinc-200 transition duration-200">
              Categories
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                <button 
                  onClick={() => handleScroll('electronics')} 
                  className="block px-4 py-2 text-white hover:bg-indigo-500/90 w-full text-left"
                >
                  Electronics
                </button>
                <button 
                  onClick={() => handleScroll('home-appliances')} 
                  className="block px-4 py-2 text-white hover:bg-indigo-500/90 w-full text-left"
                >
                  Home Appliances
                </button>
                <button 
                  onClick={() => handleScroll('grocery')} 
                  className="block px-4 py-2 text-white hover:bg-indigo-500/90 w-full text-left"
                >
                  Grocery
                </button>
                <button 
                  onClick={() => handleScroll('furniture')} 
                  className="block px-4 py-2 text-white hover:bg-indigo-500/90 w-full text-left"
                >
                  Furniture
                </button>
              </div>
            )}
          </li>
          <li>
            <Link to="/products/addProduct" className="text-white hover:text-zinc-200 transition duration-200">
              Add Product
            </Link>
          </li>
          <li>
            <button onClick={() => handleScroll('contact')} className="text-white  hover:text-zinc-200 transition duration-200">
              Contact
            </button>
          </li>
        
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl cursor-pointer bg-cyan-400 rounded p-2 text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-8">
          <ul className="space-y-6 text-lg">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:bg-indigo-500/90 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products/addProduct" onClick={() => setMenuOpen(false)} className="hover:bg-indigo-500/90 transition duration-200">
                Add Product
              </Link>
            </li>
            <li>
              <button onClick={() => handleScroll('contact')} className="hover:bg-indigo-500/90 transition duration-200">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
