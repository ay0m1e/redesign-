import { Link } from "react-router-dom";

function OnSiteInstallationDelivery() {
  return (
    <main className="page-shell service-detail">
      <section className="service-hero">
        <div className="content-boundary service-hero__inner">
          <div className="service-hero__copy">
            <h1 className="service-hero__title">On-Site Installation &amp; Delivery</h1>
            <div className="service-hero__authority">
              <p className="service-hero__intro">
                AMG London provides safe, controlled, and efficient on-site installation and delivery of masonry and
                façade systems across complex construction environments. Our teams operate within live sites and
                challenging conditions, using appropriate access methods to ensure works are delivered accurately,
                safely, and in line with programme requirements.
              </p>
            </div>
          </div>
          <figure className="service-hero__media">
            <img
              src="/media/services/on-site-installation.jpg"
              alt="On-site masonry installation"
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
            On-site installation and delivery are critical to the successful execution of masonry and façade packages.
            AMG London manages site-based operations where access, sequencing, and coordination are essential to
            maintaining quality and progress.
          </p>
          <p className="service-section__copy">
            Where required, specialist access methods, including rope access, are used to support installation,
            inspection, and remedial works in difficult-to-reach locations.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-section__inner--wide">
          <h2 className="service-section__title">Scope of Works</h2>
          <div className="service-scope">
            <article className="service-scope__block">
              <h3 className="service-scope__title">Installation &amp; Execution</h3>
              <ul className="service-section__list">
                <li>On-site installation of masonry, façade, and support systems</li>
                <li>Installation of prefabricated and specialist masonry components</li>
                <li>Integration of systems within live construction environments</li>
              </ul>
            </article>
            <article className="service-scope__block">
              <h3 className="service-scope__title">Access &amp; Site Conditions</h3>
              <ul className="service-section__list">
                <li>Use of specialist access methods where traditional access is impractical</li>
                <li>Safe working at height in accordance with site and industry standards</li>
                <li>Minimal disruption to adjacent trades and site operations</li>
              </ul>
            </article>
            <article className="service-scope__block">
              <h3 className="service-scope__title">Inspection &amp; Remedial Works</h3>
              <ul className="service-section__list">
                <li>On-site inspections of installed masonry and façade elements</li>
                <li>Localised repairs and adjustments during construction phases</li>
                <li>Support works to ensure quality and compliance prior to handover</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">Technical &amp; Delivery Focus</h2>
          <p className="service-section__copy">
            Our delivery teams operate with a strong focus on safety, coordination, and quality control. We work closely
            with main contractors, site management, and design teams to ensure works are sequenced correctly and
            delivered in line with approved methodologies.
          </p>
          <p className="service-section__copy">
            This approach allows AMG London to maintain high standards of workmanship while supporting efficient site
            progress and reducing risk during installation.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner">
          <h2 className="service-section__title">Typical Applications</h2>
          <ul className="service-section__list service-application-list">
            <li>Live construction sites</li>
            <li>High-rise and mid-rise developments</li>
            <li>Complex façade packages</li>
            <li>Developments with restricted access conditions</li>
            <li>Projects requiring specialist installation sequencing</li>
          </ul>
        </div>
      </section>

      <section className="service-section">
        <div className="content-boundary service-section__inner service-related">
          <h2 className="service-section__title">Related Work</h2>
          <p className="service-section__copy">
            On-site installation and delivery form a core part of every AMG London project. Selected examples can be
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

export default OnSiteInstallationDelivery;
