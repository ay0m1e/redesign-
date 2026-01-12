const projectEntries = [
  {
    id: "wood-wharf",
    title: "Wood Wharf – Canary Wharf",
    location: "London",
    image: "/media/wood_wharf.jpg",
  },
  {
    id: "southside",
    title: "Southside Shopping Centre",
    location: "Wandsworth",
    image: "/media/southside.jpg",
  },
  {
    id: "verdo",
    title: "Verdo – Kew Bridge",
    location: "London",
    image: "/media/verdo.jpg",
  },
];

function ProjectPreview() {
  return (
    <section className="project-preview">
      <div className="content-boundary project-preview__inner">
        <header className="project-preview__header">
          <h2 className="project-preview__heading">SELECTED PROJECTS</h2>
          <p className="project-preview__lede">
            Built assets across London’s commercial, hospitality, and education sectors.
          </p>
        </header>

        <div className="project-preview__grid">
          {projectEntries.map((project) => (
              <article key={project.id} className="project-preview__card">
                <div className="project-preview__media" aria-hidden="true">
                  <img
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    width="1200"
                    height="800"
                  />
                </div>
              <div className="project-preview__content">
                <h3 className="project-preview__title">{project.title}</h3>
                <p className="project-preview__location">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectPreview;
