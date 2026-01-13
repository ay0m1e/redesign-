function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="content-boundary about-intro__inner">
        <h2 className="about-intro__heading">About AMG London</h2>
        <div className="about-intro__underline" aria-hidden="true" />
        <p className="about-intro__copy">
          AMG London Ltd delivers specialist masonry and façade packages across major UK developments with disciplined control of complex site conditions.
        </p>
        <p className="about-intro__copy">
          Our teams manage structural interfaces, sequencing, and façade coordination with the assurance expected of a Tier-1 contractor.
        </p>
        <div className="about-intro__media" aria-hidden="true">
          <div className="about-intro__tile">
            <img src="/media/project11.jpg" alt="" width="1200" height="900" loading="lazy" decoding="async" />
          </div>
          <div className="about-intro__tile">
            <img src="/media/project6.jpg" alt="" width="1200" height="900" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
