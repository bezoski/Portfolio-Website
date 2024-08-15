import hobbiesInterest from '../../assets/Data/hobbiesInterest';
import TitleHeader from './TitleHeader';
import ListElementPrimary from './ListElementPrimary';

const Hobbies = () => {
  return (
    <div className="w-full md:w-[90%] mt-[15px] lg:mt-5">
      <TitleHeader title="Hobbies & interest" />
      {hobbiesInterest.map((hobby) => (
        <div key={hobby.id}>
          <ListElementPrimary icon={hobby.icon} text={hobby.hobbiesName} />
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
