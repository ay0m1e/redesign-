import { Link } from "react-router-dom";

function StructuralBrickworkMasonry() {
  return (
    <main className="page-shell service-detail">
      <section className="service-hero">
        <div className="content-boundary service-hero__inner">
          <div className="service-hero__copy">
            <h1 className="service-hero__title">Structural Brickwork &amp; Masonry</h1>
            <div className="service-hero__authority">
              <p className="service-hero__intro">
                AMG London delivers structural brickwork and masonry packages on complex commercial, residential, and
                mixed-use developments across London and the surrounding areas. Our work combines technical accuracy,
                buildability, and skilled workmanship to meet both structural performance requirements and
                architectural intent.
              </p>
            </div>
          </div>
          <figure className="service-hero__media">
            <img
              src="/media/services/structural-brickwork.jpg"
              alt="Structural brickwork installation"
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
            Structural brickwork and masonry play a critical role in the building envelope and load-bearing structure.
            AMG London undertakes masonry packages where precision, coordination, and detailing are essential to
            long-term performance and visual quality.
          </p>
          <p className="service-section__copy">
            Our teams deliver brickwork, blockwork, and stonework in accordance with project specifications, drawings,
            and relevant standards, ensuring consistency in setting out, tolerances, and finishes.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-section__inner--wide">
          <h2 className="service-section__title">Scope of Works</h2>
          <div className="service-scope">
            <article className="service-scope__block">
              <h3 className="service-scope__title">Brickwork</h3>
              <ul className="service-section__list">
                <li>Structural brickwork on commercial and residential developments</li>
                <li>Brickwork to façades, cores, and envelope elements</li>
                <li>Restoration and integration with existing masonry on refurbishment and heritage projects</li>
              </ul>
            </article>
            <article className="service-scope__block">
              <h3 className="service-scope__title">Blockwork</h3>
              <ul className="service-section__list">
                <li>Structural blockwork to load-bearing walls and partitions</li>
                <li>Reinforced masonry systems</li>
                <li>Retaining and supporting elements coordinated with the primary structure</li>
              </ul>
            </article>
            <article className="service-scope__block">
              <h3 className="service-scope__title">Stonework</h3>
              <ul className="service-section__list">
                <li>Natural stone installation to façades and architectural features</li>
                <li>Stone restoration on heritage and sensitive schemes</li>
                <li>Integration of stonework with brick and masonry systems</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">Technical &amp; Delivery Focus</h2>
          <p className="service-section__copy">
            Our approach is technically led and coordinated from the outset. We work closely with engineers, designers,
            and site teams to ensure masonry integrates correctly with the primary structure and adjacent façade
            systems.
          </p>
          <p className="service-section__copy">
            This includes careful sequencing, interface management, and quality control, allowing work to be delivered
            safely, efficiently, and in line with programme requirements.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">Typical Applications</h2>
          <ul className="service-section__list service-application-list">
            <li>Residential developments</li>
            <li>Commercial buildings</li>
            <li>Mixed-use schemes</li>
            <li>High-rise and mid-rise structures</li>
            <li>Heritage and refurbishment projects</li>
          </ul>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-related">
          <h2 className="service-section__title">Related Work</h2>
          <p className="service-section__copy">
            Structural brickwork and masonry form a key part of many AMG London projects. Selected examples can be
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

export default StructuralBrickworkMasonry;
