import { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PageShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="page-shell">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
