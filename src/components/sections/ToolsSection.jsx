import SectionTitle from './SectionTitle';
import {
  SiCplusplus,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';
import { tools } from '../../data/siteData';

const toolIcons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  cplusplus: SiCplusplus,
  java: SiOpenjdk,
  react: SiReact,
  nextjs: SiNextdotjs,
  html5: SiHtml5,
  css: SiCss3,
  reactnative: SiReact,
  expo: SiExpo,
  javafx: SiOpenjdk,
  nodejs: SiNodedotjs,
  express: SiExpress,
  springboot: SiSpringboot,
  mysql: SiMysql,
  supabase: SiSupabase,
  figma: SiFigma,
  framer: SiFramer,
  git: SiGit,
};

function ToolsSection() {
  return (
    <section className="section tools" id="tools">
      <SectionTitle lead="PREMIUM" highlight="SKILLS" />
      <div className="tools-grid">
        {tools.map((tool) => {
          const Icon = toolIcons[tool.icon];

          return (
            <article className="tool-card" key={tool.name}>
              <div className="tool-logo" aria-hidden="true">
                {Icon ? <Icon /> : null}
              </div>
              <div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ToolsSection;
