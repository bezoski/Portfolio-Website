const ProjectList = ({ projects, filter }) => {
  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <div>
      {filteredProjects.length === 0 ? (
        <p>No projects found for selected filter.</p>
      ) : (
        <ul>
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <h3>{project.projectName}</h3>
              <img src={project.image} alt={project.projectName} />
              <p>{project.description}</p>
              {project.demoLink && <a href={project.demoLink}>Demo</a>}
              {project.githubLink && <a href={project.githubLink}>GitHub</a>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
