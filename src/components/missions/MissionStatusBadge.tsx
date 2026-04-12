import { Mission } from "@/data/missions";

export default function MissionStatusBadge({
  statusType,
  status,
}: Pick<Mission, "statusType" | "status">) {
  return (
    <span className={`status-badge status-${statusType}`}>
      <span className="status-badge-dot" />
      {status}
    </span>
  );
}
