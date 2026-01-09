import SectionTitle from './SectionTitle';

function ProjectDetailSection({ project, onBack = () => {} }) {
  if (!project) {
    return null;
  }

  const {
    id,
    name,
    type,
    summary,
    image,
    role,
    year,
    stack = [],
    overview,
    challenge,
    solution,
    highlights = [],
    metrics = [],
    deliverables = [],
    links = [],
  } = project;

  return (
    <section className="section project-detail" id={`project-${id}`}>
      <div className="project-detail__header">
        <SectionTitle lead="PROJECT" highlight="DETAILS" />
        <button className="project-detail__back" type="button" onClick={onBack}>
          Back to Projects
        </button>
      </div>
      <div className="project-detail__grid">
        <div className="project-detail__media">
          <img src={image} alt={`${name} preview`} />
        </div>
        <div className="project-detail__content">
          {type ? <span className="project-detail__eyebrow">{type}</span> : null}
          <h3>{name}</h3>
          {summary ? <p>{summary}</p> : null}
          <div className="project-detail__meta">
            <div>
              <span className="meta-label">Role</span>
              <span>{role}</span>
            </div>
            <div>
              <span className="meta-label">Year</span>
              <span>{year}</span>
            </div>
            <div>
              <span className="meta-label">Stack</span>
              <span>{stack.length ? stack.join(', ') : 'Not listed'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="project-detail__body">
        <div className="project-detail__narrative">
          {overview ? (
            <div className="project-detail__block">
              <h4>Overview</h4>
              <p>{overview}</p>
            </div>
          ) : null}
          {challenge ? (
            <div className="project-detail__block">
              <h4>Challenge</h4>
              <p>{challenge}</p>
            </div>
          ) : null}
          {solution ? (
            <div className="project-detail__block">
              <h4>Solution</h4>
              <p>{solution}</p>
            </div>
          ) : null}
        </div>
        <div className="project-detail__side">
          {highlights.length ? (
            <div className="project-detail__panel">
              <h4>Highlights</h4>
              <ul className="project-detail__list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {metrics.length ? (
            <div className="project-detail__panel">
              <h4>Metrics</h4>
              <div className="project-detail__metrics">
                {metrics.map((metric) => (
                  <div
                    className="project-detail__metric"
                    key={`${metric.label}-${metric.value}`}
                  >
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {deliverables.length ? (
            <div className="project-detail__panel">
              <h4>Deliverables</h4>
              <ul className="project-detail__list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {links.length ? (
            <div className="project-detail__panel">
              <h4>Links</h4>
              <div className="project-detail__links">
                {links.map((link) => {
                  const isExternal = link.href?.startsWith('http');
                  return (
                    <a
                      className="project-detail__link"
                      href={link.href}
                      key={link.label}
                      rel={isExternal ? 'noreferrer' : undefined}
                      target={isExternal ? '_blank' : undefined}
                    >
                      {link.label}
                      <span aria-hidden="true">-&gt;</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailSection;
