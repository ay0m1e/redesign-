import HeroIntro from "../sections/HeroIntro.jsx";
import ConstructionGallery from "../sections/ConstructionGallery.jsx";
import AboutIntro from "../sections/AboutIntro.jsx";
import ServiceStack from "../sections/ServiceStack.jsx";
import ProjectPreview from "../sections/ProjectPreview.jsx";

function Home({ onNavigate }) {
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate("contact");
    }
  };

  return (
    <>
      <HeroIntro />
      <ConstructionGallery />
      <AboutIntro />
      <ServiceStack />
      <ProjectPreview />
      <div className="home-view">
        <section className="home-contact" id="contact">
          <div className="content-boundary">
            <div className="home-contact__inner">
              <h2 className="home-contact__title">Get in Touch</h2>
              <p className="home-contact__copy">
                For project enquiries, tender discussions, or general questions, contact AMG London using the details
                below or visit our Contact page.
              </p>
              <div className="home-contact__details">
                <a className="home-contact__link" href="tel:+442085919253">
                  +44 020 8591 9253
                </a>
                <a className="home-contact__link" href="mailto:amg.london.ltd@gmail.com">
                  amg.london.ltd@gmail.com
                </a>
              </div>
              <button className="home-contact__cta" type="button" onClick={handleContactClick}>
                Contact AMG London
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
