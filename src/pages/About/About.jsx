import { Link } from 'react-router-dom';

import PageNumber from '../../components/General/PageNumber';
import Subtitle from '../../components/About/Subtitle';
import Title from '../../components/About/Title';
import SocialLinks from '../../components/About/SocialLinks';
import Description from '../../components/About/Description';
import Button from '../../components/About/Button';

import avatar from '../../assets/Images/avatar.png';

const About = () => {
  return (
    <div className="relative flex flex-col min-h-full mx-4 md:mx-16 lg:mx-[13%]">
      <div className="flex flex-col justify-center items-center md:flex-row mt-4">
        <div className="md:w-[60%] flex flex-col justify-center md:justify-start">
          <Subtitle />
          <Title />
          <SocialLinks />
          <Description />
          <div className="mt-6 md:mt-12 flex justify-center md:justify-start">
            <Link to="/resume">
              <Button text="Resume" fill={true} />
            </Link>
            <Link to="/works">
              <Button text="My works" fill={false} />
            </Link>
          </div>
        </div>
        <div className="md:w-[40%] flex justify-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-[190px] h-[190px] md:w-[296px] md:h-[296px] lg:w-[400px] lg:h-[400px] mt-6 mb-9 md:mb-0 rounded-full border border-secondary-battleship-gray select-none"
            draggable="false"
            onMouseDown={(event) => event.preventDefault()}
            onContextMenu={(event) => event.preventDefault()}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="2" />
      </div>
    </div>
  );
};

export default About;
