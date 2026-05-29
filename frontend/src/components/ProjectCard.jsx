function ProjectCard({ project, index }) {
  return (
    <article className="card project-card" data-index={index}>
      <div className="project-card__image" aria-hidden="true">
        <img
          src={project.image || '/projects/placeholder.png'}
          alt={`${project.title} preview`}
          className="project-card__thumb"
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-card__problem">
          <strong>Problem solved:</strong> {project.problemSolved}
        </p>
        <div className="project-card__tech">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-card__links">
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.linkedinLink} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard