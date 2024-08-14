import PageNumber from '../../components/General/PageNumber';
import SoftwareSkills from '../../components/Resume/SoftwareSkills';
import Languages from '../../components/Resume/Languages';

const Resume = () => {
  return (
    <div className="relative flex flex-col h-full md:mx-16 lg:mx-[10%] border border-red-300">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:w-1/3">
          <SoftwareSkills />
          <Languages />
        </div>
        <div className="flex flex-col md:w-1/3">col 2</div>
        <div className="flex flex-col md:w-1/3">col 3</div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="3" />
      </div>
    </div>
  );
};

export default Resume;
