const ProjectImage = ({ image }) => {
  return (
    <div className="flex justify-center items-center md:w-1/2 py-2 px-2 bg-secondary-gunmetal rounded-2xl">
      <img
        src={image}
        alt="project"
        className="rounded-2xl w-[268px] h-[130px] md:w-[380px] md:h-[180px] lg:w-[430px] lg:h-[230px]"
      />
    </div>
  );
};

export default ProjectImage;
