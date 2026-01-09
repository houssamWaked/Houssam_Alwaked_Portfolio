import SectionTitle from './SectionTitle';
import { projects } from '../../data/siteData';

function ProjectsSection({ onSelectProject }) {
  const isInteractive = typeof onSelectProject === 'function';
  const CardTag = isInteractive ? 'button' : 'article';

  return (
    <section className="section" id="projects">
      <SectionTitle lead="RECENT" highlight="PROJECTS" />
      <div className="projects-list">
        {projects.map((project) => (
          <CardTag
            className={`project-card${isInteractive ? ' project-card--link' : ''}`}
            key={project.id}
            type={isInteractive ? 'button' : undefined}
            onClick={isInteractive ? () => onSelectProject(project.id) : undefined}
          >
            <div className={`project-thumb project-thumb--${project.tone}`}>
              <img src={project.image} alt={`${project.name} preview`} />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </div>
            <span className="card-arrow card-arrow--small">-&gt;</span>
          </CardTag>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
