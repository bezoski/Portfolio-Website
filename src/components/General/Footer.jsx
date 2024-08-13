import Logo from '../../assets/Images/logo.svg';

import { PiGithubLogoFill } from 'react-icons/pi';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="py-2 px-16">
      <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center ">
        <div className="flex space-x-2 text-primary-floral-white text-[24px]">
          <a
            href="https://github.com/bezoski"
            target="_blank"
            className="hover:text-primary-flame"
          >
            <PiGithubLogoFill />
          </a>
          <a
            href="https://www.linkedin.com/in/rafa%C5%82-buczkowski-1a4495258/"
            target="_blank"
            className="hover:text-primary-flame"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/bezoski/"
            target="_blank"
            className="hover:text-primary-flame"
          >
            <SiLeetcode />
          </a>
        </div>
        <div className="flex md:space-x-12">
          <p className="text-secondary-battleship-gray font-merriweather text-body-s">
            Made by bezoski 2024
          </p>
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:flex w-[32px] h-[20px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
