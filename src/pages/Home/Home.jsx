import { Link } from 'react-router-dom';
import TypingAnimation from '../../components/Home/TypingAnimation';
import Button from '../../components/Home/Button';
import PageNumber from '../../components/General/PageNumber';

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center md:items-start h-full lg:mx-[10%] md:mx-16">
      <h1 className="font-karla text-display-m md:text-display-l lg:text-display-xl text-primary-floral-white uppercase text-center md:text-left">
        Hello, I&apos;m Rafał
      </h1>
      <TypingAnimation />
      <div className="font-karla text-body-m lg:text-display-xs text-primary-floral-white flex justify-between mt-4 ">
        <Link to="/about">
          <Button text="About" margin="mr-2" />
        </Link>
        <Link to="/works">
          <Button text="Works" margin="ml-2" />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="1" />
      </div>
    </div>
  );
};

export default Home;
