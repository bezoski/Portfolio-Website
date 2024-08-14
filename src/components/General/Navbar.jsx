import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../assets/Images/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/works', label: 'Works' },
  { path: '/contact', label: 'Contact' },
];

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
    <nav className="py-8 px-16 bg-neutral-night">
      <div className="mx-auto flex justify-between items-center select-none">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            draggable="false"
            onMouseDown={(event) => event.preventDefault()}
            onContextMenu={(event) => event.preventDefault()}
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex text-primary-floral-white space-x-8 font-merriweather text-body-m">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path} className={navLinkActive}>
                {label}
              </NavLink>
            </li>
          ))}
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
            <div className="flex justify-between items-center py-8 px-16">
              <Link to="/">
                <img src={Logo} alt="Logo" onClick={toggleMenu} />
              </Link>
              <button
                onClick={toggleMenu}
                className="text-white text-3xl focus:outline-none"
              >
                <IoMdClose />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className=" flex flex-col justify-center items-center space-y-5 font-merriweather text-primary-floral-white text-body-l mt-10">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={navLinkActive}
                    onClick={toggleMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
