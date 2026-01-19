import { Link } from "react-router-dom";

function MasonryReinforcementAccessories() {
  return (
    <main className="page-shell service-detail">
      <section className="service-hero">
        <div className="content-boundary service-hero__inner">
          <div className="service-hero__copy">
            <h1 className="service-hero__title">Masonry Reinforcement &amp; Accessories</h1>
            <div className="service-hero__authority">
              <p className="service-hero__intro">
                AMG London delivers specialist masonry reinforcement and accessory systems that support structural
                performance, architectural detailing, and façade continuity on complex developments. Our scope includes
                the installation of engineered accessories and prefabricated systems integrated within masonry and
                façade packages.
              </p>
            </div>
          </div>
          <figure className="service-hero__media">
            <img
              src="/media/services/masonry-accessories.jpg"
              alt="Masonry reinforcement and accessory installation"
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
            Masonry reinforcement and accessories play an important role in enhancing the performance, durability, and
            visual continuity of masonry façades. AMG London installs a range of specialist systems designed to
            integrate seamlessly with structural masonry and façade construction.
          </p>
          <p className="service-section__copy">
            This includes lightweight and prefabricated components used to achieve architectural detail, reduce load,
            and support consistent finishes across complex building envelopes.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-section__inner--wide">
          <h2 className="service-section__title">Scope of Works</h2>
          <div className="service-scope">
            <article className="service-scope__block">
              <h3 className="service-scope__title">Brick Slip Soffit Panels</h3>
              <ul className="service-section__list">
                <li>Installation of prefabricated brick slip soffit panel systems</li>
                <li>Architectural treatment to horizontal and overhead façade elements</li>
                <li>Lightweight solutions providing the appearance of traditional brickwork</li>
                <li>Integration with masonry, façade, and structural systems</li>
              </ul>
            </article>
            <article className="service-scope__block">
              <h3 className="service-scope__title">Masonry Reinforcement &amp; Accessories</h3>
              <ul className="service-section__list">
                <li>Installation of masonry reinforcement components</li>
                <li>Integration of accessories within masonry packages</li>
                <li>Coordination of specialist elements with primary masonry and façade works</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">Technical &amp; Delivery Focus</h2>
          <p className="service-section__copy">
            Our approach is technically led and coordinated with the wider façade and masonry package. We work closely
            with design teams and site management to ensure accessories and reinforcement systems are correctly
            specified, positioned, and installed.
          </p>
          <p className="service-section__copy">
            Careful coordination ensures compatibility with adjacent materials, accurate setting out, and a finished
            appearance aligned with architectural intent.
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
            <li>Façade-led architectural designs</li>
            <li>Developments requiring lightweight masonry solutions</li>
          </ul>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-related">
          <h2 className="service-section__title">Related Work</h2>
          <p className="service-section__copy">
            Masonry reinforcement and accessory systems form part of a number of AMG London projects. Selected examples
            can be viewed on the Projects page.
          </p>
          <Link className="service-related__link" to="/projects">
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MasonryReinforcementAccessories;
