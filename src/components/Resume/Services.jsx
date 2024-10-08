import TitleHeader from './TitleHeader';

const Services = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] md:mt-0">
      <TitleHeader title="What can I do?" />
      <div className="font-merriweather text-body-m text-primary-floral-white flex flex-wrap items-center">
        <p className="flex items-center flex-wrap">
          Web Development&bull;UI/UX Design&bull;Game Design&bull;Game
          Development
        </p>
      </div>
    </div>
  );
};

export default Services;
