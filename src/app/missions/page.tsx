import { Orbit, Rocket, Search } from "lucide-react";
import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import MissionDirectoryClient from "@/components/missions/MissionDirectoryClient";
import { missions } from "@/data/missions";

export default function MissionsPage() {
  return (
    <PageShell>
      <section className="subpage-hero">
        <span className="section-kicker">Mission directory</span>
        <h1 className="subpage-title">Explore the missions shaping the next era of space</h1>
        <p className="subpage-text">
          SpaceEdu organizes missions as living educational experiences — not
          just headlines, but structured pathways into programs, systems,
          destinations, and why they matter.
        </p>
      </section>

      <section className="section tight-top">
        <div className="directory-toolbar glass">
          <div className="toolbar-chip">
            <Rocket size={16} />
            <span>Flagship focus: Artemis + lunar systems</span>
          </div>
          <div className="toolbar-chip">
            <Orbit size={16} />
            <span>Built for discovery and understanding</span>
          </div>
          <div className="toolbar-chip">
            <Search size={16} />
            <span>Search + filtering now live</span>
          </div>
        </div>

        <SectionHeading
          kicker="Product layer"
          title="Searchable mission intelligence"
          text="This directory is now structured like a real product surface with reusable mission cards, status filtering, and a cleaner path into dynamic mission pages."
        />

        <MissionDirectoryClient missions={missions} />
      </section>
    </PageShell>
  );
}
