const serviceEntries = [
  {
    id: "brickwork",
    title: "Brickwork packages",
    summary: "Facing brick, blockwork, and detail coursing delivered to programme.",
    image: "/media/placeholders/service-generic.jpg",
  },
  {
    id: "masonry-supports",
    title: "Masonry supports",
    summary: "Lintels, restraint systems, and masonry supports coordinated with structure.",
    image: "/media/placeholders/service-generic.jpg",
  },
  {
    id: "structural-works",
    title: "Structural works",
    summary: "Steel coordination, temporary works, and masonry alterations for live sites.",
    image: "/media/placeholders/service-generic.jpg",
  },
];

function ServiceStack() {
  return (
    <section className="service-stack">
      <div className="content-boundary">
        <header className="service-stack__header">
          <h2 className="service-stack__heading">Services</h2>
          <div className="service-stack__underline" aria-hidden="true" />
        </header>

        <div className="service-stack__list">
          {serviceEntries.map((service) => (
            <article key={service.id} className="service-stack__item">
              <div className="service-stack__media" aria-hidden="true">
                <img src={service.image} alt="" />
              </div>
              <div className="service-stack__content">
                <h3 className="service-stack__title">{service.title}</h3>
                <p className="service-stack__summary">{service.summary}</p>
                <button type="button" className="service-stack__cta">
                  READ MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceStack;
