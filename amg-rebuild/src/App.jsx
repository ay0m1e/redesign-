import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteShell from "./layout/SiteShell.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import PreFixing from "./pages/PreFixing.jsx";
import StructuralBrickworkMasonry from "./pages/StructuralBrickworkMasonry.jsx";
import MasonrySupportSystemsWindposts from "./pages/MasonrySupportSystemsWindposts.jsx";
import MasonryReinforcementAccessories from "./pages/MasonryReinforcementAccessories.jsx";
import OnSiteInstallationDelivery from "./pages/OnSiteInstallationDelivery.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/structural-brickwork-masonry"
            element={<StructuralBrickworkMasonry />}
          />
          <Route
            path="/services/masonry-support-systems-windposts"
            element={<MasonrySupportSystemsWindposts />}
          />
          <Route path="/pre-fixing" element={<PreFixing />} />
          <Route
            path="/services/masonry-reinforcement-accessories"
            element={<MasonryReinforcementAccessories />}
          />
          <Route
            path="/services/on-site-installation-delivery"
            element={<OnSiteInstallationDelivery />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  );
}

export default App;
