import { PiGithubLogoFill } from 'react-icons/pi';
import { HiOutlineSignal } from 'react-icons/hi2';

const ProjectDescription = ({ title, description, githubLink, demoLink }) => {
  return (
    <div className="flex flex-col mt-4 md:mt-0 md:w-1/2 items-center md:items-start">
      <h1 className="font-karla text-display-s text-primary-flame">{title}</h1>
      <p className="font-merriweather text-body-xs md:text-body-s lg:text-body-m mt-2 w-[80%] md:w-full text-center md:text-left text-primary-floral-white">
        {description}
      </p>
      <div className="flex space-x-3 mt-6">
        {githubLink && (
          <button className="w-[124px] md:w-[150px] h-[35px] flex items-center justify-center rounded px-3 space-x-1 bg-primary-flame font-merriweather lg:font-karla text-body-m lg:text-display-xs text-neutral-night hover:bg-primary-floral-white ">
            <PiGithubLogoFill />
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </button>
        )}
        {demoLink && (
          <button className="w-[124px] md:w-[150px] h-[35px] flex items-center justify-center rounded px-3 space-x-1 border border-primary-flame font-merriweather lg:font-karla text-body-m lg:text-display-xs text-primary-flame hover:bg-primary-floral-white hover:text-neutral-night hover:border-none">
            <HiOutlineSignal />
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
