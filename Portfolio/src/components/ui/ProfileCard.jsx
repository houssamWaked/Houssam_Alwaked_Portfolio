import './styles/ProfileCard.css';

const socials = [
  { label: 'Linkedin', text: 'LI', link: '' },
  { label: 'Instagram', text: 'Ig', link: '' },
];

function ProfileCard() {
  return (
    <article className="profile-card">
      <div className="profile-card__image">
        <img src="/icons/profile.png" alt="Portrait of Houssam Alwaked" />
      </div>

      <h3 className="profile-card__name">Houssam Alwaked</h3>

      <div className="profile-card__badge">
        <span className="profile-card__badge-icon"></span>
      </div>

      <p className="profile-card__description">
        A Software Engineer who has developed countless innovative solutions.
      </p>

      <div className="profile-card__socials">
        {socials.map((social) => (
          <button
            className="profile-card__social"
            type="button"
            key={social.label}
            aria-label={social.label}
          >
            <a href={social.link}>{social.text}</a>
          </button>
        ))}
      </div>
    </article>
  );
}

export default ProfileCard;
