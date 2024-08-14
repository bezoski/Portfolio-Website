import TitleHeader from './TitleHeader';
import { GoDotFill } from 'react-icons/go';

const Qualifications = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] md:mt-0 border">
      <TitleHeader title="Professional qualifications" />
      <div className="flex font-merriweather text-body-m text-primary-floral-white">
        <div className="w-[60px] flex-shrink-0">
          <p>INF.03</p>
        </div>
        <span className="mx-2">
          <GoDotFill />
        </span>
        <div className="flex flex-col">
          <p>
            Creating and administering websites, internet applications and
            databases
          </p>
        </div>
      </div>
      <div className="flex font-merriweather text-body-m text-primary-floral-white mt-1">
        <div className="w-[60px] flex-shrink-0">
          <p>XXX.XX</p>
        </div>
        <span className="mx-2">
          <GoDotFill />
        </span>
        <div className="flex flex-col">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
