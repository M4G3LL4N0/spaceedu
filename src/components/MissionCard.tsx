import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Mission } from "@/lib/missions";

type Props = {
  mission: Mission;
};

export default function MissionCard({ mission }: Props) {
  return (
    <article className="mission-card glass">
      <span className="mission-status">{mission.category}</span>
      <h3>{mission.name}</h3>
      <p>{mission.description}</p>

      <div className="mission-meta">
        <div>
          <span className="mission-meta-label">Destination</span>
          <strong>{mission.destination}</strong>
        </div>
        <div>
          <span className="mission-meta-label">Current Product Phase</span>
          <strong>{mission.phase}</strong>
        </div>
      </div>

      <Link href={`/missions/${mission.slug}`} className="inline-link">
        Explore mission
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
