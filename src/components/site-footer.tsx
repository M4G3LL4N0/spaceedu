import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">SpaceEdu</div>
          <p className="footer-copy">
            Interactive mission tracking, discovery, and education for the new
            space era.
          </p>
        </div>

        <div>
          <div className="footer-heading">Explore</div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/missions">Missions</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>

        <div>
          <div className="footer-heading">Flagship</div>
          <div className="footer-links">
            <Link href="/missions/artemis-ii">Artemis II</Link>
            <Link href="/missions">Mission Hub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
