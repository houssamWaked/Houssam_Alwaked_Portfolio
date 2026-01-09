import { useState } from 'react';
import './App.css';
import NavigationCard from './components/ui/NavigationCard';
import ProfileCard from './components/ui/ProfileCard';
import { navItems } from './data/navigation';
import { projects } from './data/siteData';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ToolsPage from './pages/ToolsPage';

const pages = {
  home: HomePage,
  projects: ProjectsPage,
  experience: ExperiencePage,
  tools: ToolsPage,
  contact: ContactPage,
};

function App() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? 'home');
  const [activeProjectId, setActiveProjectId] = useState(null);
  const activeProject = projects.find((project) => project.id === activeProjectId);
  const ActivePage = activeProject ? ProjectDetailPage : pages[activeSection] ?? HomePage;

  const handleNavigate = (nextSection) => {
    setActiveSection(nextSection);
    setActiveProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectSelect = (projectId) => {
    setActiveProjectId(projectId);
    setActiveSection('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectBack = () => {
    setActiveProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <aside className="fixed-profile">
        <ProfileCard />
      </aside>

      <div className="page-scale">
        <header className="top-nav">
          <NavigationCard
            items={navItems}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
        </header>

        <main className="page-main">
          <ActivePage
            onSelectProject={handleProjectSelect}
            project={activeProject}
            onBack={handleProjectBack}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
