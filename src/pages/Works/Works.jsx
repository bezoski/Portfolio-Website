import PageNumber from '../../components/General/PageNumber';
import ProjectImage from '../../components/Works/ProjectImage';
import ProjectDescription from '../../components/Works/ProjectDescription';
import Projects from '../../assets/Data/projects';

const Works = () => {
  const lastProject = Projects[Projects.length - 1];
  const secondLastProject = Projects[Projects.length - 2];

  return (
    <div className="relative flex flex-col h-full md:mx-16 lg:mx-[10%] border border-red-300">
      <div className="flex flex-row justify-between border">
        <div>
          <h1 className="font-karla text-display-xs md:text-display-m lg:text-display-xl text-primary-flame mt-1 text-left">
            My recent projects
          </h1>
          <p className="font-merriweather text-body-xs md:text-body-s lg:text-body-m text-primary-floral-white text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div>
          <button className="w-[74px] h-[24px] md:w-[80px] md:h-[32px] lg:w-[110px] lg:h-[50px] mt-2 font-merriweather lg:font-karla text-body-s md:text-body-m lg:text-display-xs text-primary-floral-white bg-primary-flame rounded hover:bg-transparent hover:border hover:border-primary-flame hover:text-primary-flame">
            More
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between">
          <ProjectImage image={lastProject.image} />
          <ProjectDescription
            title={lastProject.projectName}
            description={lastProject.description}
            githubLink={lastProject.githubLink}
            demoLink={lastProject.demoLink}
          />
        </div>
        <div className="flex justify-between">
          <ProjectDescription
            title={secondLastProject.projectName}
            description={secondLastProject.description}
            githubLink={secondLastProject.githubLink}
            demoLink={secondLastProject.demoLink}
          />
          <ProjectImage image={secondLastProject.image} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start ">
        <PageNumber number="4" />
      </div>
    </div>
  );
};

export default Works;
