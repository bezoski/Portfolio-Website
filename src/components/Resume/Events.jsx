import TitleHeader from './TitleHeader';
import { GoDotFill } from 'react-icons/go';

const Events = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] lg:mt-5">
      <TitleHeader title="Events" />
      <div className="flex font-merriweather text-body-m text-primary-floral-white">
        <div className="w-[40px] flex-shrink-0">
          <p>2024</p>
        </div>
        <span className="mx-2">
          <GoDotFill />
        </span>
        <div className="flex flex-col">
          <p>HackYeah Kraków</p>
        </div>
      </div>
      <div className="flex font-merriweather text-body-m text-primary-floral-white mt-1">
        <div className="w-[40px] flex-shrink-0">
          <p>2024</p>
        </div>
        <span className="mx-2">
          <GoDotFill />
        </span>
        <div className="flex flex-col">
          <p>NASA Space Apps Challenge Stalowa Wola</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
