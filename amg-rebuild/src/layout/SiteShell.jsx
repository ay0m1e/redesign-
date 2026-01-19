import PrimaryNav from "./PrimaryNav.jsx";

function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <PrimaryNav />

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
