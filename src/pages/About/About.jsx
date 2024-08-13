import PageNumber from '../../components/General/PageNumber';

const About = () => {
  return (
    <div className="relative flex flex-col justify-center items-center md:items-start h-full lg:ml-[15%] md:ml-16">
      About
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="2" />
      </div>
    </div>
  );
};

export default About;
