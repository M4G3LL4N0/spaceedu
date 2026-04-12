import { Globe2, GraduationCap, Orbit, Rocket } from "lucide-react";
import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="subpage-hero">
        <span className="section-kicker">About SpaceEdu</span>
        <h1 className="subpage-title">A premium interface for understanding the future of space</h1>
        <p className="subpage-text">
          SpaceEdu exists to turn fragmented mission information into a unified,
          compelling, adaptive product experience for curious people,
          students, educators, and future builders.
        </p>
      </section>

      <section className="section tight-top">
        <div className="split-grid">
          <div className="content-card glass">
            <div className="card-label">
              <Rocket size={16} />
              <span>What SpaceEdu is</span>
            </div>
            <p>
              SpaceEdu is not just a tracker. It is a discovery and education
              layer for missions, systems, and the broader architecture of the
              new space era.
            </p>
          </div>

          <div className="content-card glass">
            <div className="card-label">
              <Orbit size={16} />
              <span>What it becomes</span>
            </div>
            <p>
              Over time, the platform can expand into dashboards, alerts,
              school tools, embeddable widgets, and a structured mission
              intelligence graph.
            </p>
          </div>

          <div className="content-card glass">
            <div className="card-label">
              <GraduationCap size={16} />
              <span>Who it serves</span>
            </div>
            <p>
              Curious beginners, students, space enthusiasts, educators,
              families, creators, museums, and eventually institutional partners.
            </p>
          </div>

          <div className="content-card glass">
            <div className="card-label">
              <Globe2 size={16} />
              <span>Why now</span>
            </div>
            <p>
              Space activity is increasing, public curiosity is high, and the
              interface layer for truly understanding missions is still wide open.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
