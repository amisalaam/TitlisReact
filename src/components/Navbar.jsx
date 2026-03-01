import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/titlisLogo.png';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClasses = () => {
    return 'block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-titlisRed md:p-0';
  };

  return (
    <nav className="bg-white w-full z-20 absolute md:relative top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            className="h-[5rem] lg:h-[6rem] p-4"
            alt="Titlis Logo"
          />
        </Link>

        {/* Mobile Button */}
        <div className="flex md:order-2 items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex p-2 w-10 justify-center text-xl rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          >
            <BsFillGrid3X3GapFill className="text-black" />
          </button>
        </div>

        {/* Menu */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 text-lg ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            
            <li>
              <Link to="/" className={getLinkClasses()}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/packages" className={getLinkClasses()}>
                Packages
              </Link>
            </li>

            <li>
              <Link to="/news" className={getLinkClasses()}>
                Feeds
              </Link>
            </li>

            <li>
              <Link to="/about" className={getLinkClasses()}>
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className={getLinkClasses()}>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;