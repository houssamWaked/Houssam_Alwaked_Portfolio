import SectionTitle from './SectionTitle';
import { experiences } from '../../data/siteData';

function ExperienceSection() {
  return (
    <section className="section experience" id="experience">
      <SectionTitle lead="1 YEARS OF" highlight="EXPERIENCE" />
      <div className="experience-list">
        {experiences.map((item) => {
          const {
            company,
            title,
            summary,
            dates,
            location,
            highlights = [],
            stack = [],
          } = item;

          return (
            <article className="experience-card" key={company}>
              <div className="experience-card__header">
                <div className="experience-card__title">
                  <h3>{company}</h3>
                  {title ? (
                    <span className="experience-card__role">{title}</span>
                  ) : null}
                </div>
                <div className="experience-card__meta">
                  <span>{dates}</span>
                  {location ? <span>{location}</span> : null}
                </div>
              </div>
              {summary ? (
                <p className="experience-card__summary">{summary}</p>
              ) : null}
              <div className="experience-card__details">
                {highlights.length ? (
                  <div className="experience-card__section">
                    <h4>Highlights</h4>
                    <ul className="experience-card__list">
                      {highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {stack.length ? (
                  <div className="experience-card__section">
                    <h4>Stack</h4>
                    <div className="experience-card__tags">
                      {stack.map((tool) => (
                        <span className="experience-card__tag" key={tool}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceSection;
