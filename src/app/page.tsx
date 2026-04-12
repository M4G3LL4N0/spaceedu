import Link from "next/link";
import {
  ArrowRight,
  Radar,
  GraduationCap,
  Orbit,
  BookOpen,
  Telescope,
  PlayCircle,
  Rocket,
  Globe2,
  Activity,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import MissionCard from "@/components/missions/MissionCard";
import { getFeaturedMissions, getMissionCounts, missions } from "@/data/missions";

const featureCards = [
  {
    icon: Radar,
    title: "Mission Tracking",
    text: "Follow major missions with clear timelines, key milestones, and what happens next.",
  },
  {
    icon: GraduationCap,
    title: "Adaptive Education",
    text: "Turn space curiosity into guided learning paths for beginners, students, and enthusiasts.",
  },
  {
    icon: Orbit,
    title: "System Understanding",
    text: "Go beyond isolated missions and understand how spacecraft, destinations, and programs connect.",
  },
  {
    icon: BookOpen,
    title: "Companion Explanations",
    text: "Build an intelligent layer that explains events in plain language without flattening the wonder.",
  },
];

const pathways = [
  {
    title: "Follow Artemis",
    text: "Start with the missions drawing the most attention and build understanding from there.",
  },
  {
    title: "Understand Systems",
    text: "Learn how spacecraft, stations, surface systems, and future pathways connect.",
  },
  {
    title: "Return Daily",
    text: "Use dashboards, alerts, and adaptive discovery to make exploration habit-forming.",
  },
];

export default function HomePage() {
  const featuredMissions = getFeaturedMissions();
  const counts = getMissionCounts();

  return (
    <PageShell>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <Rocket size={16} />
            <span>Space mission discovery + education companion</span>
          </div>

          <h1>
            Follow every mission.
            <br />
            Learn the future of space.
          </h1>

          <p className="hero-text">
            SpaceEdu transforms space activity into a premium interactive
            product — mission tracking, educational context, adaptive
            discovery, and beautifully structured pathways into Artemis,
            lunar infrastructure, orbital operations, and beyond.
          </p>

          <div className="hero-actions">
            <Link href="/missions" className="btn btn-primary">
              Explore Missions
              <ArrowRight size={18} />
            </Link>
            <Link href="/learn" className="btn btn-secondary">
              Start Learning
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-kicker">Product</span>
              <strong>Interactive space education platform</strong>
            </div>
            <div className="stat-card">
              <span className="stat-kicker">Wedge</span>
              <strong>Artemis + Moon + human spaceflight</strong>
            </div>
            <div className="stat-card">
              <span className="stat-kicker">Expansion</span>
              <strong>Dashboard + discovery + learning graph</strong>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel glass">
            <div className="panel-topline">
              <span className="live-dot" />
              <span>Flagship interface concept</span>
            </div>

            <h2>Mission Companion</h2>
            <p>
              A layered product surface that combines mission status,
              contextual explainers, related discoveries, and structured
              pathways into deeper understanding.
            </p>

            <div className="panel-grid">
              <div className="mini-card">
                <Telescope size={18} />
                <span>Mission pages</span>
              </div>
              <div className="mini-card">
                <PlayCircle size={18} />
                <span>Watch mode</span>
              </div>
              <div className="mini-card">
                <Orbit size={18} />
                <span>System maps</span>
              </div>
              <div className="mini-card">
                <Globe2 size={18} />
                <span>Learning pathways</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="stats-strip">
          <div className="stats-strip-card glass">
            <span className="meta-label">Tracked missions</span>
            <strong>{counts.total}</strong>
          </div>
          <div className="stats-strip-card glass">
            <span className="meta-label">Live now</span>
            <strong>{counts.live}</strong>
          </div>
          <div className="stats-strip-card glass">
            <span className="meta-label">Featured</span>
            <strong>{counts.featured}</strong>
          </div>
          <div className="stats-strip-card glass">
            <span className="meta-label">Future pathways</span>
            <strong>{counts.future}</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="Launch surface"
          title="Start with the missions that naturally pull people in"
          text="SpaceEdu launches with emotionally resonant, structurally rich mission categories that support both curiosity and product depth."
        />

        <div className="directory-grid">
          {featuredMissions.map((mission) => (
            <MissionCard key={mission.slug} mission={mission} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="Core product"
          title="Built like a real product, not a static educational page"
        />

        <div className="feature-grid">
          {featureCards.map(({ icon: Icon, title, text }) => (
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

      <section className="section vision-section">
        <div className="vision-copy">
          <span className="section-kicker">Why this gets big</span>
          <h2>SpaceEdu can become the interface layer between space activity and public understanding</h2>
          <p>
            This should evolve from a premium mission site into an adaptive
            education and discovery engine that helps users understand missions,
            systems, and the broader future of human exploration.
          </p>

          <ul className="pillar-list">
            <li>Track missions in a premium, structured format</li>
            <li>Explain systems in layers, from beginner to enthusiast</li>
            <li>Guide users into related discoveries automatically</li>
            <li>Expand toward school, museum, and dashboard products</li>
            <li>Build a long-term mission intelligence graph underneath</li>
          </ul>
        </div>

        <div className="vision-panel glass">
          <span className="section-kicker">Build path</span>

          <div className="phase-item">
            <strong>Phase 1</strong>
            <p>Premium website, mission hubs, flagship pages, and clean product narrative.</p>
          </div>

          <div className="phase-item">
            <strong>Phase 2</strong>
            <p>Alerts, saved mission watchlists, discovery personalization, and user accounts.</p>
          </div>

          <div className="phase-item">
            <strong>Phase 3</strong>
            <p>Education products, APIs, embeddable widgets, and institutional licensing.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="Product pathways"
          title="The habit loop is discovery, understanding, and return"
          text="The strongest version of SpaceEdu keeps users moving through a loop of mission following, educational depth, and personalized re-engagement."
        />

        <div className="split-grid">
          {pathways.map((pathway) => (
            <div key={pathway.title} className="content-card glass">
              <div className="card-label">
                <Activity size={16} />
                <span>{pathway.title}</span>
              </div>
              <p>{pathway.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="Expansion layer"
          title="This grows from mission pages into a full education + intelligence platform"
          text="The current site is now structured to support dynamic routing, APIs, search, filtering, and a future saved-state data layer."
        />

        <div className="directory-grid">
          {missions.slice(0, 4).map((mission) => (
            <div key={mission.slug} className="content-card glass">
              <div className="card-label">
                <Orbit size={16} />
                <span>{mission.program}</span>
              </div>
              <h2>{mission.name}</h2>
              <p>{mission.whyItMatters}</p>
              <Link href={`/missions/${mission.slug}`} className="inline-link">
                Open pathway
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-card glass">
          <span className="section-kicker">Next move</span>
          <h2>Build the best public-facing interface for the new space era</h2>
          <p>
            SpaceEdu should feel like the premium front door for understanding
            where human exploration is going next.
          </p>
          <div className="hero-actions">
            <Link href="/missions" className="btn btn-primary">
              Open Mission Directory
            </Link>
            <Link href="/dashboard" className="btn btn-secondary">
              Open Product Dashboard
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
