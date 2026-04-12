import Link from "next/link";
import { Globe2, Rocket } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <Globe2 size={18} />
        <span>SpaceEdu</span>
      </Link>

      <nav className="nav">
        <Link href="/missions">Missions</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>

      <Link href="/missions/artemis-ii" className="nav-cta">
        <Rocket size={16} />
        <span>Track Artemis II</span>
      </Link>
    </header>
  );
}
