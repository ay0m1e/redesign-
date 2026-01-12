const galleryImages = [
  {
    id: "project-2",
    src: "/media/project2.jpg",
    alt: "Construction activity on site",
  },
  {
    id: "project-4",
    src: "/media/project4.jpg",
    alt: "Active construction work",
  },
  {
    id: "project-5",
    src: "/media/project5.jpg",
    alt: "Site delivery in progress",
  },
  {
    id: "project-6",
    src: "/media/project6.jpg",
    alt: "Live site works",
  },
  {
    id: "project-7",
    src: "/media/project7.jpg",
    alt: "Construction progress on site",
  },
  {
    id: "project-8",
    src: "/media/project8.jpg",
    alt: "On-site delivery",
  },
  {
    id: "project-9",
    src: "/media/project9.jpg",
    alt: "Working construction site",
  },
  {
    id: "project-10",
    src: "/media/project10.jpg",
    alt: "Active build view",
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
