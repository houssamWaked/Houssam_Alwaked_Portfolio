import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ToolsSection from '../components/sections/ToolsSection';
import PageWithContact from '../layouts/PageWithContact';

function HomePage({ onSelectProject }) {
  return (
    <PageWithContact>
      <HeroSection />
      <ProjectsSection onSelectProject={onSelectProject} />
      <ExperienceSection />
      <ToolsSection />
    </PageWithContact>
  );
}

export default HomePage;
