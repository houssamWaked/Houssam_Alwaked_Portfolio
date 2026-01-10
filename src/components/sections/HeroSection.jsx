import { heroStats } from '../../data/siteData';

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-right">
        <h1 className="hero-title">
          <span>SOFTWARE</span>
          <span className="muted">ENGINEER</span>
        </h1>
        <p className="hero-summary">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>

        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
