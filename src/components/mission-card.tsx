import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Mission } from "@/lib/space-data";

export function MissionCard({ mission }: { mission: Mission }) {
  return (
    <article className="mission-card glass">
      <span className="mission-status">{mission.status}</span>
      <h3>{mission.name}</h3>
      <div className="meta-row">
        <span>{mission.program}</span>
        <span>{mission.category}</span>
        <span>{mission.destination}</span>
      </div>
      <p>{mission.summary}</p>
      <div className="tag-row">
        {mission.tags.map((tag) => (
          <span className="tag-chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/missions/${mission.slug}`} className="inline-link">
        Explore mission
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
