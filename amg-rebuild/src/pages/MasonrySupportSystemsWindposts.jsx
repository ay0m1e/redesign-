import { Link } from "react-router-dom";

function MasonrySupportSystemsWindposts() {
  return (
    <main className="page-shell service-detail">
      <section className="service-hero">
        <div className="content-boundary service-hero__inner">
          <div className="service-hero__copy">
            <h1 className="service-hero__title">Masonry Support Systems &amp; Windposts</h1>
            <div className="service-hero__authority">
              <p className="service-hero__intro">
                AMG London delivers masonry support systems and windposts on complex developments across London and the
                surrounding areas. We specialise in the installation and coordination of engineered support solutions
                that ensure the stability, safety, and long-term performance of masonry façades.
              </p>
            </div>
          </div>
          <figure className="service-hero__media">
            <img
              src="/media/services/masonry-support.jpg"
              alt="Masonry support systems installation"
              width="1600"
              height="900"
            />
          </figure>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">What the Service Involves</h2>
          <p className="service-section__copy">
            Masonry support systems and windposts are essential components in modern construction, providing structural
            support to masonry panels while accommodating movement, tolerances, and interface requirements.
          </p>
          <p className="service-section__copy">
            AMG London installs masonry support brackets, channels, lintels, and windposts in accordance with
            structural design requirements, ensuring accurate setting out, compliance, and integration with the primary
            structure.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-section__inner--wide">
          <h2 className="service-section__title">Scope of Works</h2>
          <div className="service-scope">
            <article className="service-scope__block">
              <h3 className="service-scope__title">Masonry Support Systems</h3>
              <ul className="service-section__list">
                <li>Installation of masonry support brackets and shelf angles</li>
                <li>Load-bearing support for brick and stone façades</li>
                <li>Coordination with concrete and steel frames</li>
                <li>Allowance for movement joints and thermal expansion</li>
              </ul>
            </article>
            <article className="service-scope__block">
              <h3 className="service-scope__title">Windposts &amp; Restraint Systems</h3>
              <ul className="service-section__list">
                <li>Installation of vertical and horizontal windposts</li>
                <li>Lateral restraint to masonry panels</li>
                <li>Integration with masonry support and façade systems</li>
                <li>Coordination with structural engineers and design teams</li>
              </ul>
            </article>
            <article className="service-scope__block">
              <h3 className="service-scope__title">Associated Components</h3>
              <ul className="service-section__list">
                <li>Lintels to openings within masonry façades</li>
                <li>Brick ties and restraint fixings</li>
                <li>Coordination of accessories within the masonry package</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">Technical &amp; Delivery Focus</h2>
          <p className="service-section__copy">
            Our approach is technically led and coordinated from early stages of the project. We work closely with
            engineers, manufacturers, and site teams to ensure masonry support systems and windposts are correctly
            specified, positioned, and installed.
          </p>
          <p className="service-section__copy">
            Careful sequencing and interface management allow systems to be integrated efficiently, reducing risk on
            site and supporting safe, reliable installation in line with programme requirements.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">Typical Applications</h2>
          <ul className="service-section__list service-application-list">
            <li>High-rise and mid-rise residential developments</li>
            <li>Commercial buildings</li>
            <li>Mixed-use schemes</li>
            <li>Complex façade packages</li>
            <li>Developments requiring engineered masonry solutions</li>
          </ul>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-related">
          <h2 className="service-section__title">Related Work</h2>
          <p className="service-section__copy">
            Masonry support systems and windposts form a core part of many AMG London projects. Selected examples can be
            viewed on the Projects page.
          </p>
          <Link className="service-related__link" to="/projects">
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MasonrySupportSystemsWindposts;
