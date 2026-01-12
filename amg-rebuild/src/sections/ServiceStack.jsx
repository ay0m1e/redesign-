const serviceEntries = [
  {
    id: "brickwork",
    title: "Brickwork delivery",
    summary: "Structural brick, block, and facing work sequenced for live sites.",
    image: "/media/mansonry.jpg",
  },
  {
    id: "masonry-supports",
    title: "Masonry supports",
    summary: "Lintels, restraints, and carrier systems coordinated with structure.",
    image: "/media/windposts.jpg",
  },
  {
    id: "structural-works",
    title: "Structural works",
    summary: "Builder’s works, temporary works, and steel interfaces managed on programme.",
    image: "/media/rope.jpg",
  },
  {
    id: "facade-packages",
    title: "Façade packages",
    summary: "Brick slips, rainscreen, and façade coordination aligned to consultant details.",
    image: "/media/brick_slips.jpg",
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
