"use client";

import { useMemo, useState } from "react";
import type { Mission } from "@/data/missions";
import MissionCard from "./MissionCard";

type MissionDirectoryClientProps = {
  missions: Mission[];
};

const statusOptions = [
  { value: "all", label: "All statuses" },
  { value: "live", label: "Live" },
  { value: "featured", label: "Featured" },
  { value: "development", label: "Development" },
  { value: "future", label: "Future" },
] as const;

export default function MissionDirectoryClient({
  missions,
}: MissionDirectoryClientProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMissions = useMemo(() => {
    const q = query.trim().toLowerCase();

    return missions.filter((mission) => {
      const matchesQuery =
        q.length === 0 ||
        mission.name.toLowerCase().includes(q) ||
        mission.summary.toLowerCase().includes(q) ||
        mission.program.toLowerCase().includes(q) ||
        mission.destination.toLowerCase().includes(q) ||
        mission.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesStatus =
        statusFilter === "all" || mission.statusType === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [missions, query, statusFilter]);

  return (
    <div className="directory-client">
      <div className="directory-controls glass">
        <div className="control-group">
          <label htmlFor="mission-search" className="control-label">
            Search missions
          </label>
          <input
            id="mission-search"
            className="control-input"
            type="text"
            placeholder="Search Artemis, moon, ISS, Mars..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="control-group control-group-small">
          <label htmlFor="mission-status" className="control-label">
            Filter by status
          </label>
          <select
            id="mission-status"
            className="control-input"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-row">
        <span className="results-count">
          {filteredMissions.length} mission{filteredMissions.length === 1 ? "" : "s"} found
        </span>
      </div>

      <div className="directory-grid">
        {filteredMissions.map((mission) => (
          <MissionCard key={mission.slug} mission={mission} />
        ))}
      </div>
    </div>
  );
}
