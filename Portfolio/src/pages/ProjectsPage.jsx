import ProjectsSection from '../components/sections/ProjectsSection';
import PageWithContact from '../layouts/PageWithContact';

function ProjectsPage({ onSelectProject }) {
  return (
    <PageWithContact>
      <ProjectsSection onSelectProject={onSelectProject} />
    </PageWithContact>
  );
}

export default ProjectsPage;
