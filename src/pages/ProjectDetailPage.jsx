import PageContent from '../layouts/PageContent';
import ProjectDetailSection from '../components/sections/ProjectDetailSection';

function ProjectDetailPage({ project, onBack }) {
  return (
    <PageContent>
      <ProjectDetailSection project={project} onBack={onBack} />
    </PageContent>
  );
}

export default ProjectDetailPage;
