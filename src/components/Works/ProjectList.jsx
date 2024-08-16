import { PiGithubLogoFill } from 'react-icons/pi';
import { HiOutlineSignal } from 'react-icons/hi2';

const ProjectList = ({ projects, filter }) => {
  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

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
                  className="w-full h-[70%]  bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="flex flex-row h-[30%] justify-between items-center p-2 bg-secondary-gunmetal">
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
                        <button className="w-[80px] h-[30px] flex items-center justify-center rounded px-3 bg-primary-flame  text-neutral-night hover:bg-primary-floral-white ">
                          <i className="text-body-m">
                            <PiGithubLogoFill />
                          </i>
                          <p className="font-merriweather text-body-s">
                            Github
                          </p>
                        </button>
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-[80px] h-[30px] flex items-center justify-center rounded px-3 border border-primary-flame text-primary-flame hover:bg-primary-floral-white hover:text-neutral-night hover:border-none">
                          <i className="text-body-m">
                            <HiOutlineSignal />
                          </i>
                          <p className="font-merriweather text-body-s">Demo</p>
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
