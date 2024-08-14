import TitleHeader from './TitleHeader';

const Languages = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] lg:mt-5">
      <TitleHeader title="Languages" />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="w-auto ">
            <p className="font-karla text-body-m text-primary-floral-white">
              Polish
            </p>
          </div>
          <div className="flex-grow border border-primary-floral-white ml-4 mr-4"></div>
          <div className="w-[30%] ">
            <p className=" font-karla text-body-m text-primary-floral-white">
              Native
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-1">
          <div className="w-auto ">
            <p className="font-karla text-body-m text-primary-floral-white">
              English
            </p>
          </div>
          <div className="flex-grow border border-primary-floral-white ml-4 mr-4"></div>
          <div className="w-[30%] ">
            <p className=" font-karla text-body-m text-primary-floral-white">
              B1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
