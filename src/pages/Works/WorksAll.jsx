import { useState } from 'react';
import HeaderAll from '../../components/Works/HeaderAll';
import ProjectFilters from '../../components/Works/ProjectFilters';
import ProjectList from '../../components/Works/ProjectList';
import Projects from '../../assets/Data/projects';
import { IoMdClose } from 'react-icons/io';

const WorksAll = ({ onClose }) => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="relative flex flex-col h-full bg-neutral-night">
      <button
        onClick={onClose}
        className="absolute top-1 right-1 md:top-4 md:right-4 text-primary-floral-white text-2xl p-3 bg-primary-flame rounded-full z-20"
      >
        <IoMdClose />
      </button>
      <div className="sticky top-0 bg-neutral-night z-10 p-4 shadow-lg">
        <HeaderAll />
        <ProjectFilters setFilter={setFilter} currentFilter={filter} />
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 flex justify-center">
        <ProjectList projects={Projects} filter={filter} />
      </div>
    </div>
  );
};

export default WorksAll;
