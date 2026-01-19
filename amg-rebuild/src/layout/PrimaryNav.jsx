import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  { id: "home", label: "Home", path: "/", end: true },
  { id: "services", label: "Services", path: "/services" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "prefixing", label: "Pre-Fixing", path: "/pre-fixing" },
  { id: "about", label: "About", path: "/about" },
  { id: "news", label: "News", path: "/news" },
  { id: "contact", label: "Contact", path: "/contact" },
];

function PrimaryNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = () => {
    setMenuOpen(false);
  };

  const handleToggle = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <header className="site-header">
      <div className="content-boundary site-header__inner">
        <span className="brand-mark" aria-label="AMG London Ltd">
          AMG London Ltd
        </span>
        <button
          type="button"
          className="navigation-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          onClick={handleToggle}
        >
          <span className="navigation-toggle__bar" />
          <span className="navigation-toggle__bar" />
          <span className="navigation-toggle__bar" />
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`primary-nav ${menuOpen ? "is-open" : ""}`}
        >
          <ul className="site-navigation">
            {navigationLinks.map((navigationLink) => (
              <li key={navigationLink.id} className="navigation-item">
                <NavLink
                  to={navigationLink.path}
                  end={navigationLink.end}
                  className={({ isActive }) => `navigation-link${isActive ? " is-active" : ""}`}
                  onClick={handleSelect}
                >
                  {navigationLink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default PrimaryNav;
