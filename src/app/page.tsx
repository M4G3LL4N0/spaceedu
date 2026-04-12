import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Orbit,
  Telescope,
  GraduationCap,
  Radar,
  BookOpen,
  Globe2,
  PlayCircle,
} from "lucide-react";

const featuredMissions = [
  {
    name: "Artemis II",
    status: "Featured lunar mission",
    blurb:
      "Follow crew milestones, mission phases, trajectory context, and why this flight matters for the next era of human lunar exploration.",
  },
  {
    name: "Gateway",
    status: "Lunar infrastructure",
    blurb:
      "Explore the station architecture around the Moon and how it connects sustained exploration, science, and future missions.",
  },
  {
    name: "ISS + Crewed Flight",
    status: "Live orbital activity",
    blurb:
      "Track what is happening in low Earth orbit and understand how ongoing crew operations connect to the future beyond Earth.",
  },
];

const features = [
  {
    icon: Radar,
    title: "Mission Tracking",
    text: "Clean mission pages with timelines, milestones, vehicle context, and what happens next.",
  },
  {
    icon: GraduationCap,
    title: "Adaptive Education",
    text: "A smarter learning layer that helps people discover what they did not know to search for.",
  },
  {
    icon: Orbit,
    title: "Interactive Exploration",
    text: "Premium visual storytelling around trajectories, programs, spacecraft, destinations, and mission history.",
  },
  {
    icon: BookOpen,
    title: "Explainers by Level",
    text: "Understand space missions in beginner, student, enthusiast, and technical modes.",
  },
];

const pillars = [
  "Artemis and lunar exploration",
  "Mission timelines and milestone tracking",
  "Spacecraft, crews, and hardware explainers",
  "Personalized discovery across related missions",
  "Future expansion into alerts, dashboards, and education tools",
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />

      <header className="site-header">
        <Link href="/" className="brand">
          <Globe2 size={18} />
          <span>SpaceEdu</span>
        </Link>

        <nav className="nav">
          <a href="#missions">Missions</a>
          <a href="#features">Features</a>
          <a href="#vision">Vision</a>
        </nav>

        <a href="#launch" className="nav-cta">
          Build the Future
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <Rocket size={16} />
            <span>Interactive mission intelligence for the new space era</span>
          </div>

          <h1>
            Follow every mission.
            <br />
            Understand every moment.
          </h1>

          <p className="hero-text">
            SpaceEdu turns space exploration into a premium interactive learning
            experience — starting with Artemis, lunar missions, crewed
            spaceflight, and the systems shaping humanity’s return to deep
            space.
          </p>

          <div className="hero-actions">
            <a href="#missions" className="btn btn-primary">
              Explore Missions
              <ArrowRight size={18} />
            </a>
            <a href="#vision" className="btn btn-secondary">
              See the Vision
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-kicker">Category</span>
              <strong>Space education platform</strong>
            </div>
            <div className="stat-card">
              <span className="stat-kicker">Wedge</span>
              <strong>Artemis + lunar mission discovery</strong>
            </div>
            <div className="stat-card">
              <span className="stat-kicker">Model</span>
              <strong>Consumer + education + premium tools</strong>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel glass">
            <div className="panel-topline">
              <span className="live-dot" />
              <span>Flagship Experience</span>
            </div>

            <h2>Mission Companion Interface</h2>
            <p>
              A layered mission page that combines live mission context,
              explainers, spacecraft intelligence, and recommended discoveries.
            </p>

            <div className="panel-grid">
              <div className="mini-card">
                <Telescope size={18} />
                <span>Mission timelines</span>
              </div>
              <div className="mini-card">
                <PlayCircle size={18} />
                <span>Watch mode</span>
              </div>
              <div className="mini-card">
                <Orbit size={18} />
                <span>Program maps</span>
              </div>
              <div className="mini-card">
                <BookOpen size={18} />
                <span>Learning layers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="missions" className="section">
        <div className="section-heading">
          <span className="section-kicker">Launch wedge</span>
          <h2>Start with the missions people are already emotionally drawn to</h2>
          <p>
            SpaceEdu launches with a focused wedge: Artemis, lunar
            infrastructure, and the broader crewed-spaceflight narrative.
          </p>
        </div>

        <div className="mission-grid">
          {featuredMissions.map((mission) => (
            <article key={mission.name} className="mission-card glass">
              <span className="mission-status">{mission.status}</span>
              <h3>{mission.name}</h3>
              <p>{mission.blurb}</p>
              <a href="#launch" className="inline-link">
                View concept
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <span className="section-kicker">Core product</span>
          <h2>Built like a premium interface, not a static information page</h2>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="feature-card glass">
              <div className="feature-icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="vision" className="section vision-section">
        <div className="vision-copy">
          <span className="section-kicker">Why this wins</span>
          <h2>SpaceEdu is the interface layer between space activity and public understanding</h2>
          <p>
            The world does not need another generic content site. It needs a
            product that makes missions trackable, understandable, visually
            compelling, and personalized to curiosity.
          </p>

          <ul className="pillar-list">
            {pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </div>

        <div className="vision-panel glass">
          <span className="section-kicker">Phase roadmap</span>
          <div className="phase-item">
            <strong>Phase 1</strong>
            <p>Premium landing experience + mission hub + concept pages.</p>
          </div>
          <div className="phase-item">
            <strong>Phase 2</strong>
            <p>Accounts, saved watchlists, mission alerts, adaptive discovery.</p>
          </div>
          <div className="phase-item">
            <strong>Phase 3</strong>
            <p>Education tools, API access, embeddable widgets, institutional products.</p>
          </div>
        </div>
      </section>

      <section id="launch" className="section cta-section">
        <div className="cta-card glass">
          <span className="section-kicker">Blitzscale launch surface</span>
          <h2>Space exploration is getting more active. The public interface should too.</h2>
          <p>
            SpaceEdu is positioned to become the premium front door for live
            mission discovery, understanding, and education.
          </p>
          <div className="hero-actions">
            <a href="https://github.com" className="btn btn-primary">
              Push to GitHub
            </a>
            <a href="https://vercel.com" className="btn btn-secondary">
              Deploy on Vercel
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
