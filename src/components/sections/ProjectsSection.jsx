import SectionTitle from './SectionTitle';
import { projects } from '../../data/siteData';

function ProjectsSection({ onSelectProject }) {
  const isInteractive = typeof onSelectProject === 'function';
  const CardTag = isInteractive ? 'button' : 'article';

  return (
    <section className="section" id="projects">
      <SectionTitle lead="RECENT" highlight="PROJECTS" />
      <div className="projects-list">
        {projects.map((project) => {
          const progressValue = Math.min(
            Math.max(Number(project.progress?.value ?? 0), 0),
            100
          );
          const progressLabel = project.progress?.label ?? 'In progress';

          return (
            <CardTag
              className={`project-card${isInteractive ? ' project-card--link' : ''}`}
              key={project.id}
              type={isInteractive ? 'button' : undefined}
              onClick={
                isInteractive ? () => onSelectProject(project.id) : undefined
              }
            >
              <div className={`project-thumb project-thumb--${project.tone}`}>
                <img src={project.image} alt={`${project.name} preview`} />
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.type}</p>
                <div className="project-progress">
                  <div className="project-progress__header">
                    <span className="project-progress__label">
                      Status: {progressLabel}
                    </span>
                    <span className="project-progress__value">
                      {progressValue}%
                    </span>
                  </div>
                  <div
                    className="project-progress__bar"
                    role="progressbar"
                    aria-label={`${project.name} completion`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progressValue}
                  >
                    <span
                      className="project-progress__fill"
                      style={{ width: `${progressValue}%` }}
                    />
                  </div>
                </div>
              </div>
              <span className="card-arrow card-arrow--small">-&gt;</span>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
