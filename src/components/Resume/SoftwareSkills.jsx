import softwareSkills from '../../assets/Data/softwareSkills';
import TitleHeader from './TitleHeader';
import ListElement from './ListElement';

const SoftwareSkills = () => {
  return (
    <div className="w-full md:w-[90%] border">
      <TitleHeader title="Software Skills" />
      {softwareSkills.map((software) => (
        <div key={software.id}>
          <ListElement icon={software.icon} text={software.softwareName} />
        </div>
      ))}
    </div>
  );
};

export default SoftwareSkills;
