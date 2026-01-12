const projectEntries = [
  {
    id: "wood-wharf",
    title: "Wood Wharf – Canary Wharf (Blocks G1 & G5)",
    location: "London",
    scope: "Installation of approximately 2.4km of Ancon masonry support systems on a major mixed-use development.",
    image: "/media/wood_wharf.jpg",
  },
  {
    id: "southside-wandsworth",
    title: "Southside Shopping Centre – Wandsworth",
    location: "London",
    scope: "Bespoke glazed façade and brickwork installation forming rebuilt North and South entrances for 7Formation Ltd.",
    image: "/media/southside.jpg",
  },
  {
    id: "chase-house",
    title: "305 Chase House – Southgate",
    location: "London",
    scope: "Resin bonded brick slips to façades of two additional storeys on a mixed-use residential and Cat A office scheme.",
    image: "/media/305_chase.jpg",
  },
  {
    id: "verdo-kew",
    title: "Verdo – Kew Bridge (Phase 2)",
    location: "London",
    scope: "Masonry and façade works on a large residential-led development between Chiswick, Gunnersbury, Kew, and Richmond.",
    image: "/media/verdo.jpg",
  },
  {
    id: "napier-plymouth",
    title: "Napier & New Plymouth House – Rainham",
    location: "London",
    scope: "Masonry support systems and façade works for an estate regeneration by Wates Residential and Havering LBC.",
    image: "/media/napier.jpg",
  },
  {
    id: "bayside-worthing",
    title: "Bayside Apartments – Worthing",
    location: "Worthing",
    scope: "Brickwork and façade delivery on a 141-home residential development on the seafront.",
    image: "/media/bayside.jpg",
  },
  {
    id: "cherry-garden",
    title: "Cherry Garden School – Bermondsey",
    location: "London",
    scope: "Ancon masonry supports, ceiling cleats, and associated ironwork on a residential-led redevelopment.",
    image: "/media/cherry_garden.jpg",
  },
  {
    id: "colindale-gardens",
    title: "Colindale Gardens – Blocks A, B & C",
    location: "London",
    scope: "Long-term delivery of masonry support systems and windposts across multiple blocks from 6 to 15 storeys.",
    image: "/media/colindale.jpg",
  },
  {
    id: "oasis-academy",
    title: "Oasis Academy – West Silvertown",
    location: "London",
    scope: "Masonry and façade works on a new five-storey purpose-built academy on a former fire station site.",
    image: "/media/oasis_acad.jpg",
  },
  {
    id: "silk-district",
    title: "Silk District – Whitechapel",
    location: "London",
    scope: "Masonry and façade works on a major mixed-use development forming part of a wider regeneration scheme.",
    image: "/media/silk_district.jpg",
  },
  {
    id: "bessborough-road",
    title: "Bessborough Road – Roehampton",
    location: "London",
    scope: "Brickwork and masonry delivery on new council homes with private gardens and balconies.",
    image: "/media/bessborough.jpg",
  },
  {
    id: "sneinton-market",
    title: "Sneinton Market – Nottingham",
    location: "Nottingham",
    scope: "Masonry works supporting the Creative Quarter regeneration and mixed-use commercial development.",
    image: "/media/sneinton.jpg",
  },
  {
    id: "rushey-green",
    title: "9–19 Rushey Green – Catford",
    location: "London",
    scope: "Masonry and façade works on a six-storey residential redevelopment of an existing office building.",
    image: "/media/9-19_Rushey.jpg",
  },
];

function Projects() {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="content-boundary page-section__inner">
          <h1 className="page-title">Projects</h1>
          <p className="page-lede">
            A selection of projects delivered by AMG London, demonstrating our experience providing structural masonry
            and façade solutions on complex developments across the UK.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-boundary projects-list">
          {projectEntries.map((project, index) => (
            <article
              key={project.id}
              className={`project-feature${index % 2 === 1 ? " project-feature--reverse" : ""}`}
            >
              <div className="project-feature__media">
                <img src={project.image} alt={project.title} width="1600" height="1000" />
              </div>
              <div className="project-feature__content">
                <h2 className="project-feature__title">{project.title}</h2>
                <p className="project-feature__location">{project.location}</p>
                <p className="project-feature__scope">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
