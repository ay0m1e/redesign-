import { Link } from "react-router-dom";

const capabilityEntries = [
  {
    id: "structural-masonry",
    title: "Structural brickwork & masonry",
    copy:
      "We deliver high-quality structural brickwork and masonry packages across a wide range of building types. Our work meets both structural performance requirements and architectural standards, with careful attention to detailing, tolerances, and buildability.",
    image: "/media/mansonry.jpg",
    path: "/services/structural-brickwork-masonry",
    cta: "View service detail",
  },
  {
    id: "support-systems",
    title: "Masonry support systems & windposts",
    copy:
      "AMG London installs masonry support systems and windposts on projects where façade stability and load transfer are critical. We work closely with engineers and manufacturers to ensure systems are correctly specified, coordinated, and installed in line with design intent.",
    image: "/media/windposts.jpg",
    path: "/services/masonry-support-systems-windposts",
    cta: "View service detail",
  },
  {
    id: "prefixing",
    title: "Pre-fixing & façade systems",
    copy:
      "We provide pre-fixing and prefabricated façade solutions to support efficient installation and programme certainty. Early coordination allows systems to be integrated accurately with the primary structure, reducing risk and improving on-site productivity.",
    image: "/media/brick_slips.jpg",
    path: "/pre-fixing",
    cta: "View service detail",
  },
  {
    id: "reinforcement",
    title: "Masonry reinforcement & accessories",
    copy:
      "Our scope includes the installation of masonry reinforcement and associated components to enhance structural performance and long-term durability. These systems are coordinated carefully with the wider masonry package to ensure consistency and compliance.",
    image: "/media/brick_slip.jpg",
    path: "/services/masonry-reinforcement-accessories",
    cta: "View service detail",
  },
  {
    id: "installation",
    title: "On-site installation & delivery",
    copy:
      "All AMG services are delivered through experienced site teams with a strong focus on safety, sequencing, and coordination. We take responsibility for on-site installation, ensuring work is delivered reliably, to programme, and to the required quality standards.",
    image: "/media/rope.jpg",
    path: "/services/on-site-installation-delivery",
    cta: "View service detail",
  },
];

function Services() {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="content-boundary page-section__inner">
          <h1 className="page-title">Services</h1>
          <p className="page-lede">
            AMG London delivers specialist structural masonry and façade solutions on complex commercial, residential,
            and restoration developments. Our services focus on technically demanding packages where coordination,
            precision, and reliable delivery are critical to project success.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-boundary page-section__inner">
          <h2 className="page-heading">Core Capabilities</h2>
          <div className="services-capabilities">
            {capabilityEntries.map((capability, index) => (
              <article
                key={capability.id}
                className={`capability-row${index % 2 === 1 ? " capability-row--reverse" : ""}`}
              >
                <div className="capability-media">
                  <img src={capability.image} alt={capability.title} width="1400" height="900" />
                </div>
                <div className="capability-content">
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-copy">{capability.copy}</p>
                  {capability.path && (
                    <Link className="service-stack__cta" to={capability.path}>
                      {capability.cta}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
