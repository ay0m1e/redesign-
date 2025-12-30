const serviceLines = [
  "Commercial fit-out",
  "Refurbishment",
  "Structural works",
];

function HeroIntro() {
  return (
    <section className="hero-intro">
      <div className="content-boundary hero-intro__layout">
        <div className="hero-intro__text-panel">
          <div className="hero-intro__divider" aria-hidden="true" />
          <ul className="hero-intro__services" aria-label="Core services">
            {serviceLines.map((service) => (
              <li key={service} className="hero-intro__service">
                {service}
              </li>
            ))}
          </ul>
          <div className="hero-intro__divider" aria-hidden="true" />
        </div>

        <div className="hero-intro__image">
          <img src="/media/placeholders/hero-wide.jpg" alt="AMG London project overview" />
        </div>
      </div>
    </section>
  );
}

export default HeroIntro;
