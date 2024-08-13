import PageNumber from '../../components/General/PageNumber';
import Subtitle from '../../components/About/Subtitle';
import Title from '../../components/About/Title';
import SocialLinks from '../../components/About/SocialLinks';
import Description from '../../components/About/Description';
import Button from '../../components/About/Button';

const About = () => {
  return (
    <div className="relative flex flex-col h-full md:mx-16 lg:mx-[10%] border border-red-300">
      <div className="flex flex-col justify-center items-center md:flex-row mt-20">
        <div className="md:w-[50%] flex flex-col justify-center md:justify-start">
          <Subtitle />
          <Title />
          <SocialLinks />
          <Description />
          <div>
            <Button
              text="Resume"
              color="neutral-night"
              background="primary-flame"
            />
            <Button text="My works" color="primary-flame" background="" />
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center md:justify-end">
          photo
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="2" />
      </div>
    </div>
  );
};

export default About;
