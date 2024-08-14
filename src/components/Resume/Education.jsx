import TitleHeader from './TitleHeader';

import { GoDotFill } from 'react-icons/go';

const Education = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] lg:mt-5">
      <TitleHeader title="Education" />
      <div className="flex flex-row font-merriweather text-body-m text-primary-floral-white items-center">
        <div className="flex flex-col items-center">
          <p>2020</p>
          <p>-</p>
          <p>Now</p>
        </div>
        <span className="mx-2">
          <GoDotFill />
        </span>
        <div className="flex flex-col">
          Tadeusz Kościuszko Technical School in Leżajsk
        </div>
      </div>
    </div>
  );
};

export default Education;
