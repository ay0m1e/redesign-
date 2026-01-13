import { useState } from "react";
import SiteShell from "./layout/SiteShell.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import PreFixing from "./pages/PreFixing.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";

const pageMap = {
  home: Home,
  services: Services,
  projects: Projects,
  prefixing: PreFixing,
  construction: Projects,
  about: About,
  news: News,
  contact: Contact,
};

function App() {
  const [activePage, setActivePage] = useState("home");
  const ActivePageComponent = pageMap[activePage] || Home;
  const navigationPage = activePage === "construction" ? "projects" : activePage;

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SiteShell onNavigate={handleNavigate} activePage={navigationPage}>
      <ActivePageComponent onNavigate={handleNavigate} />
    </SiteShell>
  );
}

export default App;
