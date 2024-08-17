import { PiGithubLogoFill } from 'react-icons/pi';
import { HiOutlineSignal } from 'react-icons/hi2';

const ProjectList = ({ projects, filter }) => {
  const filteredProjects = projects
    .filter((project) => filter === 'all' || project.category === filter)
    .reverse();

  return (
    <div>
      {filteredProjects.length === 0 ? (
        <p className="font-merriweather text-body-m md:text-body-l text-center text-primary-floral-white">
          Something will appear soon.
        </p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <div className="w-[245px] h-[155px] md:w-[300px] md:h-[200px] lg:w-[352px] lg:h-[245px] rounded-lg overflow-hidden shadow-md">
                <div
                  className="w-full h-[65%] bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="flex flex-row h-[35%] justify-between items-center p-2 bg-secondary-gunmetal">
                  <div>
                    <h1 className="font-merriweather text-body-xs md:text-body-m text-primary-floral-white">
                      {project.projectName}
                    </h1>
                  </div>
                  <div className="flex space-x-1">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center justify-center rounded-full p-1 border border-transparent bg-primary-flame text-neutral-night hover:bg-primary-floral-white transition duration-150 ease-in">
                          <i className="text-body-m md:text-body-l">
                            <PiGithubLogoFill />
                          </i>
                        </button>
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center justify-center rounded-full p-1 border text-primary-flame border-primary-flame hover:bg-primary-floral-white hover:text-neutral-night hover:border-transparent transition duration-150 ease-in">
                          <i className="text-body-m md:text-body-l">
                            <HiOutlineSignal />
                          </i>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
