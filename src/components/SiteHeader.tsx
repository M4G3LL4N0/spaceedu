import Link from "next/link";
import { Globe2 } from "lucide-react";

const links = [
  { href: "/missions", label: "Missions" },
  { href: "/learn", label: "Learn" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <Globe2 size={18} />
          <span>SpaceEdu</span>
        </Link>

        <nav className="nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/missions/artemis-ii" className="nav-cta">
          Explore Artemis II
        </Link>
      </div>
    </header>
  );
}
