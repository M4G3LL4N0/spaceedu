import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Mission } from "@/data/missions";
import MissionStatusBadge from "./MissionStatusBadge";

type MissionCardProps = {
  mission: Mission;
};

export default function MissionCard({ mission }: MissionCardProps) {
  return (
    <article className="directory-card glass">
      <div className="directory-top">
        <MissionStatusBadge statusType={mission.statusType} status={mission.status} />
        <span className="directory-category">{mission.category}</span>
      </div>

      <h2>{mission.name}</h2>
      <p>{mission.summary}</p>

      <div className="tag-row">
        {mission.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="directory-meta">
        <div>
          <span className="meta-label">Program</span>
          <strong>{mission.program}</strong>
        </div>
        <div>
          <span className="meta-label">Destination</span>
          <strong>{mission.destination}</strong>
        </div>
      </div>

      <Link href={`/missions/${mission.slug}`} className="inline-link">
        Open mission page
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
