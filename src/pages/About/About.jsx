import PageNumber from '../../components/General/PageNumber';

const About = () => {
  return (
    <div className="relative flex flex-col h-full lg:mx-[15%] md:mx-16 border border-red-300">
      About
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="2" />
      </div>
    </div>
  );
};

export default About;
