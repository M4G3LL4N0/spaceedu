import { BookOpen, GraduationCap, Orbit, Rocket, Telescope } from "lucide-react";
import PageShell from "@/components/PageShell";

const paths = [
  {
    title: "Artemis Foundations",
    text: "Understand the mission sequence, system roles, and the bigger reason the lunar campaign matters."
  },
  {
    title: "Spacecraft and Systems",
    text: "Learn how vehicles, stations, habitats, logistics, and mission hardware connect."
  },
  {
    title: "Human Spaceflight",
    text: "Explore crews, mission operations, orbital activity, and the bridge from current spaceflight to deep space."
  },
  {
    title: "Future of Lunar Infrastructure",
    text: "Move beyond a single launch and start seeing the Moon as a long-term human operating environment."
  }
];

const modes = [
  {
    icon: GraduationCap,
    title: "Student Mode",
    text: "Structured educational entry point with simpler language and clear progression."
  },
  {
    icon: Rocket,
    title: "Curiosity Mode",
    text: "Fast, compelling answers that make people want to keep exploring."
  },
  {
    icon: Orbit,
    title: "Systems Mode",
    text: "Understand how missions, vehicles, destinations, and programs fit together."
  },
  {
    icon: Telescope,
    title: "Deep Dive Mode",
    text: "A richer, more technical experience for enthusiasts and advanced learners."
  }
];

export default function LearnPage() {
  return (
    <PageShell>
      <section className="subpage-hero">
        <span className="section-kicker">Learning engine</span>
        <h1 className="subpage-title">SpaceEdu should teach like a product, not a textbook</h1>
        <p className="subpage-text">
          The strongest version of this company helps users move from curiosity
          into structured understanding without losing the emotional pull of the
          missions themselves.
        </p>
      </section>

      <section className="section tight-top">
        <div className="split-grid">
          <div className="content-card glass">
            <div className="card-label">
              <BookOpen size={16} />
              <span>Learning paths</span>
            </div>
            <div className="stack-list">
              {paths.map((path) => (
                <div key={path.title} className="learning-card">
                  <strong>{path.title}</strong>
                  <p>{path.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-card glass">
            <div className="card-label">
              <GraduationCap size={16} />
              <span>Experience modes</span>
            </div>
            <div className="stack-list">
              {modes.map(({ icon: Icon, title, text }) => (
                <div key={title} className="mode-card">
                  <div className="feature-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
