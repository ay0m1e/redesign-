import HeroIntro from "../sections/HeroIntro.jsx";
import AboutIntro from "../sections/AboutIntro.jsx";
import ServiceStack from "../sections/ServiceStack.jsx";
import ProjectPreview from "../sections/ProjectPreview.jsx";

function Home() {
  return (
    <>
      <HeroIntro />
      <AboutIntro />
      <ServiceStack />
      <ProjectPreview />
      <div className="home-view">
        <section className="contact-section" id="contact">
          <div className="content-boundary">
            <div className="contact-panel">
              <h2 className="contact-title">Let's build together</h2>
              <p className="contact-copy">Share your programme and scope; we will return a clear plan.</p>
              <div className="contact-links">
                <a className="action-primary" href="mailto:hello@amglondon.co.uk">
                  Email the team
                </a>
                <a className="contact-link" href="tel:+442071234567">
                  <span>+44 (0)20 7123 4567</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
