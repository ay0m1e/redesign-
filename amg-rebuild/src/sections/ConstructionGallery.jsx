const galleryImages = [
  {
    id: "hero-01",
    src: "/media/construction/hero-01.jpg",
    alt: "Construction site overview",
  },
  {
    id: "brickwork-01",
    src: "/media/construction/brickwork-01.jpg",
    alt: "Brickwork installation in progress",
  },
  {
    id: "masonry-supports-01",
    src: "/media/construction/masonry-supports-01.jpg",
    alt: "Masonry support system on site",
  },
  {
    id: "structural-works-01",
    src: "/media/construction/structural-works-01.jpg",
    alt: "Structural interface work on site",
  },
  {
    id: "facade-01",
    src: "/media/construction/facade-01.jpg",
    alt: "Facade system installation",
  },
  {
    id: "project-01",
    src: "/media/construction/project-01.jpg",
    alt: "Project construction activity",
  },
  {
    id: "project-02",
    src: "/media/construction/project-02.jpg",
    alt: "Construction project progress",
  },
  {
    id: "project-03",
    src: "/media/construction/project-03.jpg",
    alt: "Active build site view",
  },
];

function ConstructionGallery() {
  return (
    <section className="construction-gallery" aria-label="Active construction work">
      <div className="content-boundary">
        <div className="construction-gallery__grid" role="list">
          {galleryImages.map((image) => (
            <div key={image.id} className="construction-gallery__item" role="listitem">
              <img src={image.src} alt={image.alt} width="600" height="400" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConstructionGallery;
