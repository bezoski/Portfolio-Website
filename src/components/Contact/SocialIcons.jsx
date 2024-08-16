import { PiGithubLogoFill } from 'react-icons/pi';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialIcons = () => {
  let hoverStyles = 'hover:bg-primary-flame hover:text-neutral-night';
  let iconStyles = `w-[36px] h-[36px] flex justify-center items-center bg-secondary-gunmetal rounded-full ${hoverStyles}`;
  return (
    <div className="flex space-x-2 text-primary-floral-white text-[24px]">
      <a
        href="https://github.com/bezoski"
        target="_blank"
        className={iconStyles}
      >
        <PiGithubLogoFill />
      </a>
      <a
        href="https://www.linkedin.com/in/rafa%C5%82-buczkowski-1a4495258/"
        target="_blank"
        className={iconStyles}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://leetcode.com/u/bezoski/"
        target="_blank"
        className={iconStyles}
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default SocialIcons;
