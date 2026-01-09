import SectionTitle from './SectionTitle';
import { tools } from '../../data/siteData';

function ToolsSection() {
  return (
    <section className="section tools" id="tools">
      <SectionTitle lead="PREMIUM" highlight="SKILLS" />
      <div className="tools-grid">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <div className="tool-icon">{tool.icon}</div>
            <div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;
