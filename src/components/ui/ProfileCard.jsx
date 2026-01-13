import './styles/ProfileCard.css';

const socials = [
  {
    label: 'LinkedIn',
    text: 'LI',
    link: 'https://www.linkedin.com/in/houssam-alwaked-b6382b356/',
  },
  {
    label: 'Instagram',
    text: 'Ig',
    link: 'https://www.instagram.com/houssamalwaked/',
  },
];

function ProfileCard() {
  return (
    <article className="profile-card">
      <div className="profile-card__image">
        <img src="icons/profile.png" alt="Portrait of Houssam Alwaked" />
      </div>

      <h3 className="profile-card__name">Houssam Alwaked</h3>

      <div className="profile-card__badge" aria-hidden="true">
        <span className="profile-card__badge-icon" />
      </div>

      <p className="profile-card__description">
        Software engineering student building real products and startups.
      </p>

      <div className="profile-card__socials">
        {socials.map((social) => (
          <a
            key={social.label}
            className="profile-card__social"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.text}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProfileCard;
