function News() {
  const newsEntries = [
    {
      id: "wood-wharf",
      date: "March 2025",
      dateTime: "2025-03",
      title: "Completion of Masonry Support Works at Wood Wharf, Canary Wharf",
      summary:
        "AMG London has completed the installation of masonry support systems across Blocks G1 and G5 at the Wood Wharf development, delivering approximately 2.4km of Ancon support systems as part of this major mixed-use scheme.",
      image: "/media/wood_wharf.jpg",
      imageAlt: "Wood Wharf masonry support works on site",
      link: "https://www.linkedin.com/",
    },
    {
      id: "southside",
      date: "February 2025",
      dateTime: "2025-02",
      title: "Bespoke Façade Installation at Southside Shopping Centre",
      summary:
        "AMG London successfully delivered a bespoke glazed façade and brickwork installation forming the new North and South entrances at Southside Shopping Centre, Wandsworth.",
      image: "/media/southside.jpg",
      imageAlt: "Southside Shopping Centre façade works",
      link: "https://www.linkedin.com/",
    },
    {
      id: "colindale",
      date: "January 2025",
      dateTime: "2025-01",
      title: "Ongoing Works at Colindale Gardens",
      summary:
        "Continued delivery of masonry support systems and windposts across multiple residential blocks at Colindale Gardens, one of AMG London’s largest and longest-running contracts.",
      image: "/media/colindale.jpg",
      imageAlt: "Colindale Gardens residential blocks in progress",
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="content-boundary page-section__inner">
          <h1 className="page-title">News</h1>
          <p className="page-lede">
            Company updates, project milestones, and key announcements from AMG London, highlighting our ongoing work
            across complex masonry and façade projects.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-boundary news-listing">
          <ol className="news-list">
            {newsEntries.map((item) => (
              <li key={item.id} className="news-item">
                <div className="news-media" aria-hidden="true">
                  <img src={item.image} alt={item.imageAlt} width="1200" height="900" loading="lazy" decoding="async" />
                </div>
                <div className="news-body">
                  <time className="news-date" dateTime={item.dateTime}>
                    {item.date}
                  </time>
                  <h2 className="news-title">{item.title}</h2>
                  <p className="news-summary">{item.summary}</p>
                </div>
                <div className="news-actions">
                  <a className="news-cta" href={item.link} rel="noreferrer">
                    Read more
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

export default News;
