import { Activity, Bell, Compass, Layers3, Sparkles, Radar, Database } from "lucide-react";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import { getMissionCounts, getFeaturedMissions } from "@/data/missions";

const cards = [
  {
    title: "Mission Watchlist",
    value: "5 tracked",
    text: "Artemis II, Gateway, ISS operations, lunar surface systems, Mars pathway",
  },
  {
    title: "Discovery Layer",
    value: "Adaptive",
    text: "Recommend related systems, missions, and learning pathways",
  },
  {
    title: "Education Modes",
    value: "4 levels",
    text: "Beginner, student, enthusiast, technical",
  },
  {
    title: "Future Alerts",
    value: "Coming next",
    text: "Important milestones, learning reminders, and watch prompts",
  },
];

export default function DashboardPage() {
  const counts = getMissionCounts();
  const featured = getFeaturedMissions();

  return (
    <PageShell>
      <section className="subpage-hero">
        <span className="section-kicker">Product dashboard</span>
        <h1 className="subpage-title">This is where the product starts feeling alive</h1>
        <p className="subpage-text">
          The dashboard should evolve into a personalized command center for
          missions, alerts, learning progress, and related discoveries.
        </p>
      </section>

      <section className="section tight-top">
        <div className="stats-strip">
          <div className="stats-strip-card glass">
            <span className="meta-label">Total missions</span>
            <strong>{counts.total}</strong>
          </div>
          <div className="stats-strip-card glass">
            <span className="meta-label">Live missions</span>
            <strong>{counts.live}</strong>
          </div>
          <div className="stats-strip-card glass">
            <span className="meta-label">Featured missions</span>
            <strong>{counts.featured}</strong>
          </div>
          <div className="stats-strip-card glass">
            <span className="meta-label">Future layers</span>
            <strong>{counts.future}</strong>
          </div>
        </div>

        <div className="dashboard-grid">
          {cards.map((card) => (
            <div key={card.title} className="dashboard-card glass">
              <span className="meta-label">{card.title}</span>
              <h2>{card.value}</h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="split-grid top-gap">
          <div className="content-card glass">
            <div className="card-label">
              <Compass size={16} />
              <span>User flow concept</span>
            </div>
            <div className="stack-list">
              <div className="stack-item">Follow a flagship mission</div>
              <div className="stack-item">Understand related systems</div>
              <div className="stack-item">Get recommendations for adjacent discoveries</div>
              <div className="stack-item">Save missions and return through alerts</div>
            </div>
          </div>

          <div className="content-card glass">
            <div className="card-label">
              <Layers3 size={16} />
              <span>Future product layers</span>
            </div>
            <div className="stack-list">
              <div className="mode-card">
                <div className="feature-icon">
                  <Activity size={18} />
                </div>
                <div>
                  <strong>Live mission states</strong>
                  <p>Status changes, milestones, and event-aware updates.</p>
                </div>
              </div>

              <div className="mode-card">
                <div className="feature-icon">
                  <Bell size={18} />
                </div>
                <div>
                  <strong>Mission alerts</strong>
                  <p>Saved watchlists and personalized return loops.</p>
                </div>
              </div>

              <div className="mode-card">
                <div className="feature-icon">
                  <Sparkles size={18} />
                </div>
                <div>
                  <strong>Adaptive discovery</strong>
                  <p>Smarter recommendations as the user explores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="split-grid top-gap">
          <div className="content-card glass">
            <SectionHeading
              kicker="Featured mission surfaces"
              title="Return-driving product zones"
              text="These are the mission surfaces most likely to anchor user habit, curiosity, and revisitation."
            />
            <div className="mini-stacked-grid">
              {featured.map((mission) => (
                <div key={mission.slug} className="mini-surface-card">
                  <div className="mini-surface-top">
                    <span className="meta-label">{mission.program}</span>
                    <strong>{mission.name}</strong>
                  </div>
                  <p>{mission.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-card glass">
            <div className="card-label">
              <Database size={16} />
              <span>Platform architecture</span>
            </div>
            <div className="stack-list">
              <div className="stack-item">Mission directory + dynamic route layer</div>
              <div className="stack-item">Mission API + reusable data model</div>
              <div className="stack-item">Search/filter directory client</div>
              <div className="stack-item">Recommendation graph foundations</div>
              <div className="stack-item">Future Supabase + auth + saved state layer</div>
            </div>
          </div>
        </div>

        <div className="top-gap content-card glass api-preview-card">
          <div className="card-label">
            <Radar size={16} />
            <span>Internal product API preview</span>
          </div>
          <div className="code-preview">
            <code>GET /api/missions</code>
            <code>GET /api/missions/artemis-ii</code>
            <code>GET /api/missions/gateway</code>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
