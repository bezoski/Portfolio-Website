import { Link } from 'react-router-dom';
import TypingAnimation from '../../components/Home/TypingAnimation';
import PageNumber from '../../components/General/PageNumber';

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center md:items-start h-full lg:mx-[15%] md:mx-16">
      <p className="font-karla text-display-m md:text-display-l lg:text-display-xl text-primary-floral-white uppercase text-center md:text-left">
        Hello, I&apos;m Rafał
      </p>
      <TypingAnimation />
      <div className="font-karla text-body-m lg:text-display-xs text-primary-floral-white flex justify-between mt-4 ">
        <button className="border border-primary-floral-white rounded py-1 lg:py-[10px] px-2 lg:px-5 hover:bg-primary-floral-white hover:text-neutral-night mr-2">
          <Link to="/about">About</Link>
        </button>
        <button className="border border-primary-floral-white rounded py-1 lg:py-[10px] px-2 lg:px-5 hover:bg-primary-floral-white hover:text-neutral-night ml-2">
          <Link to="/works">Works</Link>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="1" />
      </div>
    </div>
  );
};

export default Home;
