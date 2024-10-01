import TitleHeader from './TitleHeader';
import ListElementSecondary from './ListElementSecondary';

const Events = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] lg:mt-5">
      <TitleHeader title="Events" />
      <ListElementSecondary
        title="2024"
        description="HackYeah Kraków"
        width={40}
      />
      {/* <ListElementSecondary
        title="2024"
        description="NASA Space Apps Challenge Stalowa Wola"
        width={40}
      /> */}
    </div>
  );
};

export default Events;
