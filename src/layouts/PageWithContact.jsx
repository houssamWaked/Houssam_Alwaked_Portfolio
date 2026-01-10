import ContactSection from '../components/sections/ContactSection';
import PageContent from './PageContent';

function PageWithContact({ children }) {
  return (
    <PageContent>
      {children}
      <ContactSection />
    </PageContent>
  );
}

export default PageWithContact;
