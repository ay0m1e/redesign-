function Home() {
  return (
    <div className="home-view">
      <section className="hero-panel">
        <div className="content-boundary">
          <div className="hero-surface">
            <span className="hero-kicker">Construction contractor</span>
            <h1 className="hero-title">AMG London Ltd</h1>
            <p className="hero-copy">
              Building and refurbishing commercial spaces across London with dependable delivery.
            </p>
            <div className="cta-row">
              <a className="action-primary" href="#contact">
                Discuss a project
              </a>
              <a className="action-ghost" href="#projects">
                View recent work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-panel" id="services">
        <div className="content-boundary">
          <div className="pillars-grid">
            <article className="pillar-card">
              <h2 className="pillar-title">Commercial fit-out</h2>
              <p className="pillar-copy">Offices and retail spaces delivered to spec with tight programme control.</p>
            </article>
            <article className="pillar-card">
              <h2 className="pillar-title">Refurbishment</h2>
              <p className="pillar-copy">Live environment upgrades with clean sequencing and considerate teams.</p>
            </article>
            <article className="pillar-card">
              <h2 className="pillar-title">Structural works</h2>
              <p className="pillar-copy">Steel, concrete, and builder's works coordinated with consultants.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="projects-panel" id="projects">
        <div className="content-boundary">
          <div className="project-grid">
            <article className="project-card">
              <p className="project-meta">Office refresh | City of London</p>
              <h3 className="project-title">Fleet Street workspace</h3>
              <p className="project-copy">Cat B fit-out with acoustic partitions and bespoke joinery.</p>
            </article>
            <article className="project-card">
              <p className="project-meta">Retail upgrade | Shoreditch</p>
              <h3 className="project-title">Redchurch Street store</h3>
              <p className="project-copy">Fast-track refresh featuring new shopfront and lighting.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="content-boundary">
          <div className="contact-panel">
            <h2 className="contact-title">Let's build together</h2>
            <p className="contact-copy">Share your programme and scope; we will return a clear plan.</p>
            <div className="contact-links">
              <a className="action-primary" href="mailto:hello@amglondon.co.uk">
                Email the team
              </a>
              <a className="contact-link" href="tel:+442071234567">
                <span>+44 (0)20 7123 4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
