import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LuLayoutGrid } from 'react-icons/lu';
import { AppContext } from '../context/AppContext';
import { ImCross } from "react-icons/im";

const Navbar = ({ textColor = "text-black", logo }) => {
  const { auth, setauth } = useContext(AppContext);
  const navigate = useNavigate();

  // State for mobile side menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu on and off
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex items-center justify-between py-2 md:pt-6 md:pb-5 relative">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-18 cursor-pointer" onClick={() => navigate('/')} />

      {/* Navigation Links - Hidden on small screens */}
      <nav className="hidden md:flex">
        <ul className={`flex gap-5 ${textColor}`}>
          <NavLink to="/solution" className="cursor-pointer">Solution</NavLink>
          <NavLink to="/price" className="cursor-pointer">Pricing</NavLink>
          <li className="cursor-pointer">Blog</li>
          <NavLink to="/aboutUs" className="cursor-pointer">About</NavLink>
        </ul>
      </nav>

      {/* Action Buttons */}
      {auth ? (
        <div className="flex items-center gap-8 mr-0 lg:mr-15">
          {/* Logout Link - Only on large screens */}
          <button onClick={() => setauth(false)} className={`hidden lg:block ${textColor} cursor-pointer`}>
            <p>Logout</p>
          </button>

          {/* Get Started Button */}
          <NavLink to="/price" className="bg-[#CA3FD6] sm:block text-white text-[10px] sm:text-sm rounded-[5px] px-4 py-1 sm:px-6 sm:py-2 cursor-pointer">
            Upgrade
          </NavLink>

          {/* Mobile Menu Icon - Only visible on small/medium screens */}
          <LuLayoutGrid className={`block md:hidden cursor-pointer ${textColor} text-2xl sm:text-4xl`} onClick={toggleMenu} />
        </div>
      ) : (
        <div className="flex items-center gap-8 mr-0 lg:mr-15">
          {/* Login Link - Only on large screens */}
          <NavLink to="/login" className={`hidden lg:block ${textColor} cursor-pointer`}>
            <p>Login</p>
          </NavLink>

          {/* Get Started Button */}
          <NavLink to="/login" className="bg-[#CA3FD6] sm:block text-white text-[10px] sm:text-sm rounded-[5px] px-4 py-1 sm:px-6 sm:py-2 cursor-pointer">
            Get Started
          </NavLink>

          {/* Mobile Menu Icon - Only visible on small/medium screens */}
          <LuLayoutGrid className={`block md:hidden cursor-pointer ${textColor} text-2xl sm:text-4xl`} onClick={toggleMenu} />
        </div>
      )}

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[99]">
          <div className="absolute right-0 top-0 w-[40%] xs:w-[30%] h-full bg-[#F7F8F9] shadow-2xl py-4 space-y-4">
            <div className='text-right'>
              <button className="text-lg text-[#2F1444] p-2" onClick={toggleMenu}> <ImCross /></button>
            </div>
            <ul className="flex flex-col xs:space-y-4 text-lg">
              <NavLink to="/solution" className="w-1/2 mx-auto text-xs sm:text-sm cursor-pointer text-center text-black hover:bg-[#CA3FD6] hover:text-white hover:font-semibold py-3" onClick={toggleMenu}> <span className='w-0.5 bg-blue-500'></span> Solution</NavLink>
              <NavLink to="/price" className="w-1/2 mx-auto text-xs sm:text-sm cursor-pointer text-center text-black hover:bg-[#CA3FD6] hover:text-white hover:font-semibold py-3" onClick={toggleMenu}>Pricing</NavLink>
              <li className="w-1/2 mx-auto text-xs sm:text-sm cursor-pointer text-center text-black hover:bg-[#CA3FD6] hover:text-white hover:font-semibold py-3">Blog</li>
              <NavLink to="/aboutUs" className="w-1/2 mx-auto text-xs sm:text-sm cursor-pointer text-center text-black hover:bg-[#CA3FD6] hover:text-white hover:font-semibold py-3" onClick={toggleMenu}>About</NavLink>
              {auth && (
                <button onClick={() => setauth(false)} className="w-1/2 mx-auto text-xs sm:text-sm cursor-pointer text-black border-[2px] py-2 text-center border-[#CA3FD6] hover:bg-[#31A6F4] hover:text-white hover:border-[#31A6F4] hover:font-semibold">Logout</button>
              )}
              {!auth && (
                <NavLink to="/login" className="w-1/2 mx-auto text-xs sm:text-sm cursor-pointer text-black border-[2px] py-2 text-center border-[#CA3FD6] hover:bg-[#31A6F4] hover:text-white hover:border-[#31A6F4] hover:font-semibold" onClick={toggleMenu}>Login</NavLink>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
