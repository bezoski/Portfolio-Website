import PageNumber from '../../components/General/PageNumber';
import SoftwareSkills from '../../components/Resume/SoftwareSkills';
import Languages from '../../components/Resume/Languages';
import Services from '../../components/Resume/Services';
import ToolsApplication from '../../components/Resume/ToolsApplication';
import Education from '../../components/Resume/Education';
import Qualifications from '../../components/Resume/Qualifications';
import Events from '../../components/Resume/Events';
import Hobbies from '../../components/Resume/Hobbies';

const Resume = () => {
  return (
    <div className="relative flex flex-col h-full  lg:mx-[13%] md:mx-16">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start ">
        <div className="flex flex-col w-2/3 md:w-1/3 md:items-start">
          <SoftwareSkills />
          <Languages />
        </div>
        <div className="flex flex-col w-2/3 md:w-1/3 md:items-center">
          <Services />
          <ToolsApplication />
          <Education />
        </div>
        <div className="flex flex-col w-2/3 md:w-1/3 md:items-end mb-14 md:mb-12">
          <Qualifications />
          <Events />
          <Hobbies />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start">
        <PageNumber number="3" />
      </div>
    </div>
  );
};

export default Resume;
