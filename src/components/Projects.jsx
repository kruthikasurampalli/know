import "./Projects.css";

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="projects-section">
      <h2>🚀 Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <h3>{project.Name}</h3>
              {(project.Link || project.Github) && (
                <a 
                  href={project.Link || project.Github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View Project"
                >
                  🔗
                </a>
              )}
            </div>
            <p className="project-description">
              {project.Description}
            </p>
            {project.Technologies && (
              <div className="project-technologies">
                {(Array.isArray(project.Technologies) ? project.Technologies : []).map((tech, tidx) => (
                  <span key={tidx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.Demo && (
              <a 
                href={project.Demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-demo"
              >
                View Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
