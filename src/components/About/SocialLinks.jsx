import { PiGithubLogoFill } from 'react-icons/pi';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <div className="flex space-x-2 text-primary-floral-white text-[24px] mt-4 justify-center md:justify-start">
      <a
        href="https://github.com/bezoski"
        target="_blank"
        className="hover:text-primary-flame transition duration-150 ease-in"
      >
        <PiGithubLogoFill />
      </a>
      <a
        href="https://www.linkedin.com/in/rafa%C5%82-buczkowski-1a4495258/"
        target="_blank"
        className="hover:text-primary-flame transition duration-150 ease-in"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://leetcode.com/u/bezoski/"
        target="_blank"
        className="hover:text-primary-flame transition duration-150 ease-in"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default SocialLinks;
