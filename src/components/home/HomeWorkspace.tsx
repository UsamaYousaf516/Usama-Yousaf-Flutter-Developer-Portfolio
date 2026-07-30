"use client";

import { AppGrid } from "./AppGrid";
import { IntroPanel } from "./IntroPanel";
import { StatusModule } from "./StatusModule";
import { WorkPreview } from "./WorkPreview";

export function HomeWorkspace() {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-4 pb-28 pt-[4.75rem] md:px-8 md:pb-20 md:pt-24">
      <div className="grid gap-3 md:grid-cols-5">
        <div className="md:col-span-3">
          <IntroPanel />
        </div>
        <div className="md:col-span-2">
          <StatusModule />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
          Applications
        </h2>
        <div className="mt-4">
          <AppGrid />
        </div>
      </div>

      <div className="mt-10">
        <WorkPreview />
      </div>
    </div>
  );
}
