import { useState } from "react";

const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "prefixing", label: "Pre-Fixing" },
  { id: "construction", label: "Construction" },
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

function PrimaryNav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                <a className="navigation-link" href="#">
                  {navigationLink.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default PrimaryNav;
