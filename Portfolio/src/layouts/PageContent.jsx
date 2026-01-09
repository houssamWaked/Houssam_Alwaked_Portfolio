import ProfileCard from '../components/ui/ProfileCard';

function PageContent({ children }) {
  return (
    <div className="content">
      <div className="inline-profile">
        <ProfileCard />
      </div>
      {children}
    </div>
  );
}

export default PageContent;
