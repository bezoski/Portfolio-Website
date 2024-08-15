import softwareSkills from '../../assets/Data/softwareSkills';
import TitleHeader from './TitleHeader';
import ListElementPrimary from './ListElementPrimary';

const SoftwareSkills = () => {
  return (
    <div className="w-full md:w-[90%]">
      <TitleHeader title="Software Skills" />
      {softwareSkills.map((software) => (
        <div key={software.id}>
          <ListElementPrimary
            icon={software.icon}
            text={software.softwareName}
          />
        </div>
      ))}
    </div>
  );
};

export default SoftwareSkills;
