const galleryImages = [
  {
    id: "project-2",
    src: "/media/project2.jpg",
    alt: "Construction activity on site",
    span: 18,
  },
  {
    id: "project-4",
    src: "/media/project4.jpg",
    alt: "Active construction work",
    span: 24,
  },
  {
    id: "project-5",
    src: "/media/project5.jpg",
    alt: "Site delivery in progress",
    span: 20,
  },
  {
    id: "project-6",
    src: "/media/project6.jpg",
    alt: "Live site works",
    span: 26,
  },
  {
    id: "project-7",
    src: "/media/project7.jpg",
    alt: "Construction progress on site",
    span: 18,
  },
  {
    id: "project-8",
    src: "/media/project8.jpg",
    alt: "On-site delivery",
    span: 22,
  },
  {
    id: "project-9",
    src: "/media/project9.jpg",
    alt: "Working construction site",
    span: 20,
  },
  {
    id: "project-10",
    src: "/media/project10.jpg",
    alt: "Active build view",
    span: 18,
  },
];

function ConstructionGallery() {
  return (
    <section className="construction-gallery" aria-label="Active construction work">
      <div className="content-boundary">
        <div className="construction-gallery__grid" role="list">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="construction-gallery__item"
              role="listitem"
              style={{ "--row-span": image.span }}
            >
              <img src={image.src} alt={image.alt} width="600" height="400" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConstructionGallery;
