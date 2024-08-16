import React, { useState, useRef, useEffect } from 'react';
import PageNumber from '../../components/General/PageNumber';
import ProjectImage from '../../components/Works/ProjectImage';
import ProjectDescription from '../../components/Works/ProjectDescription';
import Projects from '../../assets/Data/projects';
import WorksAll from '../Works/WorksAll';

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const lastProject = Projects[Projects.length - 1];
  const secondLastProject = Projects[Projects.length - 2];

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      showModal();
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      showModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <div className="relative flex flex-col h-full md:mx-16 lg:mx-[13%]">
      <div className="flex flex-row justify-center md:justify-between">
        <div className="w-[70%]">
          <h1 className="font-karla text-display-xs md:text-display-m lg:text-display-xl text-primary-flame mt-1 text-left">
            My recent projects
          </h1>
          <p className="font-merriweather text-body-xs md:text-body-s lg:text-body-m text-primary-floral-white text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="w-[30%] flex justify-end">
          <button
            className="w-[74px] h-[24px] md:w-[80px] md:h-[32px] lg:w-[110px] lg:h-[50px] mt-2 font-merriweather lg:font-karla text-body-s md:text-body-m lg:text-display-xs text-primary-floral-white bg-primary-flame rounded hover:bg-primary-floral-white hover:text-neutral-night"
            onClick={showModal}
          >
            More
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between order">
          <ProjectImage image={lastProject.image} align="justify-start" />
          <ProjectDescription
            title={lastProject.projectName}
            description={lastProject.description}
            githubLink={lastProject.githubLink}
            demoLink={lastProject.demoLink}
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between mt-6 mb-14 md:mb-12">
          <ProjectDescription
            title={secondLastProject.projectName}
            description={secondLastProject.description}
            githubLink={secondLastProject.githubLink}
            demoLink={secondLastProject.demoLink}
          />
          <ProjectImage image={secondLastProject.image} align="justify-end" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center md:justify-start">
        <PageNumber number="4" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-45 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="relative bg-neutral-night p-4 rounded-lg w-[90%] h-[90%] overflow-auto"
          >
            <WorksAll onClose={showModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
