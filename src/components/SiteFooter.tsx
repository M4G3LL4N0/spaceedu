import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">SpaceEdu</div>
          <p className="footer-copy">
            A premium interactive layer for understanding missions, systems,
            and the future of space exploration.
          </p>
        </div>

        <div>
          <div className="footer-heading">Explore</div>
          <div className="footer-links">
            <Link href="/missions">Missions</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div>
          <div className="footer-heading">Flagship</div>
          <div className="footer-links">
            <Link href="/missions/artemis-ii">Artemis II</Link>
            <Link href="/missions">Mission Directory</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
