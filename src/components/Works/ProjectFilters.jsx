const ProjectFilters = ({ setFilter, currentFilter }) => {
  let activeStyles = 'bg-primary-flame text-neutral-night';
  let hoverStyles = 'hover:bg-primary-flame hover:text-neutral-night';

  return (
    <div className="flex flex-row justify-center space-x-3 text-center font-merriweather text-body-s md:text-body-m text-primary-floral-white">
      <button
        className={`border rounded-2xl w-[65px] h-[24px] md:w-[100px] md:h-[30px] border-primary-flame transition duration-150 ease-in outline-none ${hoverStyles} ${
          currentFilter === 'all' ? activeStyles : null
        }`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`border rounded-2xl w-[65px] h-[24px] md:w-[100px] md:h-[30px] border-primary-flame transition duration-150 ease-in outline-none ${hoverStyles} ${
          currentFilter === 'web' ? activeStyles : null
        }`}
        onClick={() => setFilter('web')}
      >
        Webs
      </button>
      <button
        className={`border rounded-2xl w-[65px] h-[24px] md:w-[100px] md:h-[30px] border-primary-flame transition duration-150 ease-in outline-none ${hoverStyles} ${
          currentFilter === 'game' ? activeStyles : null
        }`}
        onClick={() => setFilter('game')}
      >
        Games
      </button>
      <button
        className={`border rounded-2xl w-[65px] h-[24px] md:w-[100px] md:h-[30px] border-primary-flame transition duration-150 ease-in outline-none ${hoverStyles} ${
          currentFilter === 'ui/ux' ? activeStyles : null
        }`}
        onClick={() => setFilter('ui/ux')}
      >
        UI/UX
      </button>
    </div>
  );
};

export default ProjectFilters;
