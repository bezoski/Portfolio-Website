const ProjectDescription = ({ title, description, githubLink, demoLink }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
