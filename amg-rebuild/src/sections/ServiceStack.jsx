const serviceEntries = [
  {
    id: "brickwork",
    title: "Brickwork delivery",
    summary: "Structural brick, block, and facing work sequenced for live sites.",
    image: "/media/construction/brickwork-01.jpg",
  },
  {
    id: "masonry-supports",
    title: "Masonry supports",
    summary: "Lintels, restraints, and carrier systems coordinated with structure.",
    image: "/media/construction/masonry-supports-01.jpg",
  },
  {
    id: "structural-works",
    title: "Structural works",
    summary: "Builder’s works, temporary works, and steel interfaces managed on programme.",
    image: "/media/construction/structural-works-01.jpg",
  },
  {
    id: "facade-packages",
    title: "Façade packages",
    summary: "Brick slips, rainscreen, and façade coordination aligned to consultant details.",
    image: "/media/construction/facade-01.jpg",
  },
];

function ServiceStack() {
  return (
    <section className="service-stack">
      <div className="content-boundary">
        <header className="service-stack__header">
          <h2 className="service-stack__heading">OUR CAPABILITIES</h2>
          <p className="service-stack__lede">
            Integrated brickwork, façade, and structural delivery for London projects.
          </p>
          <div className="service-stack__underline" aria-hidden="true" />
        </header>

        <div className="service-stack__list">
          {serviceEntries.map((service) => (
            <article key={service.id} className="service-stack__item">
              <div className="service-stack__media" aria-hidden="true">
                <img
                  src={service.image}
                  alt={`${service.title} site image`}
                  width="1200"
                  height="800"
                />
              </div>
              <div className="service-stack__content">
                <h3 className="service-stack__title">{service.title}</h3>
                <p className="service-stack__summary">{service.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceStack;
