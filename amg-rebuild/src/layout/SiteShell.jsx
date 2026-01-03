import PrimaryNav from "./PrimaryNav.jsx";

function SiteShell({ children, onNavigate, activePage }) {
  return (
    <div className="site-shell">
      <PrimaryNav onNavigate={onNavigate} activePage={activePage} />

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="content-boundary">
          <p className="footer-note">AMG London Ltd | Construction Contractor</p>
        </div>
      </footer>
    </div>
  );
}

export default SiteShell;
