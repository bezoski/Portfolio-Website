import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../assets/Images/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkActive = ({ isActive }) =>
    `hover:text-primary-flame ${
      isActive ? 'text-primary-flame' : 'text-primary-floral-white'
    }`;

  return (
    <nav className="p-8">
      <div className="mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" />

        {/* Navigation Links */}
        <ul className="hidden md:flex text-primary-floral-white space-x-8 font-merriweather text-body-m">
          <li>
            <NavLink to="/" className={navLinkActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={navLinkActive}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/works" className={navLinkActive}>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkActive}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-primary-floral-white text-body-xl"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </button>

        {/* Mobile Fullscreen Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-neutral-night z-50">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-8">
              <img src={Logo} alt="Logo" />
              <button
                onClick={toggleMenu}
                className="text-white text-3xl focus:outline-none"
              >
                <IoMdClose />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className=" flex flex-col justify-center items-center space-y-5 font-merriweather text-primary-floral-white text-body-l mt-10">
              <li>
                <NavLink to="/" className={navLinkActive} onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkActive}
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={navLinkActive}
                  onClick={toggleMenu}
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/works"
                  className={navLinkActive}
                  onClick={toggleMenu}
                >
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={navLinkActive}
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
