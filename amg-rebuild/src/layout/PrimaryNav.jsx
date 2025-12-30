const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function PrimaryNav() {
  return (
    <header className="site-header">
      <div className="content-boundary site-header__inner">
        <span className="brand-mark" aria-label="AMG London Ltd">
          AMG London Ltd
        </span>
        <nav aria-label="Primary">
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
