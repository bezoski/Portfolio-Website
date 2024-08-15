const ProjectImage = ({ image, align }) => {
  return (
    <div className={`flex mt-4 md:mt-0 md:w-[40%] justify-center md:${align}`}>
      <div className="flex justify-center items-center w-[80%] md:w-[87%] h-auto bg-secondary-gunmetal rounded-2xl py-6 ">
        <img
          src={image}
          alt="project"
          className="rounded-2xl w-[90%] h-full "
        />
      </div>
    </div>
  );
};

export default ProjectImage;
