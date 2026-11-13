type ProductHonestyNoteProps = {
  status: "demo" | "live";
};

export function ProductHonestyNote({ status }: ProductHonestyNoteProps) {
  return (
    <aside
      className="mx-auto mb-8 max-w-5xl rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-xs leading-6 text-slate-300"
      aria-label="Product status"
    >
      {status === "demo"
        ? "SpaceEdu is an independent educational prototype, not an official space agency product. Mission details can change; consult agency sources for current status."
        : "SpaceEdu is an independent educational product, not an official space agency source. Consult agency sources for current mission status."}
    </aside>
  );
}
