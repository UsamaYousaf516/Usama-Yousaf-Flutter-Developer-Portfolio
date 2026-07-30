"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { labItems, type LabStatus } from "@/lib/lab";
import { getProject } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";

const statusMeta: Record<LabStatus, { label: string; color: string }> = {
  concept: { label: "Concept", color: "var(--color-muted)" },
  "in-progress": { label: "In progress", color: "var(--color-accent-clay)" },
  prototype: { label: "Prototype", color: "var(--color-accent-blue)" },
  released: { label: "Released", color: "var(--color-accent-olive)" },
  archived: { label: "Archived", color: "var(--color-muted)" },
};

const statuses: (LabStatus | "All")[] = ["All", "concept", "in-progress", "prototype", "released", "archived"];

export function LabApp() {
  const [filter, setFilter] = useState<LabStatus | "All">("All");

  const filtered = useMemo(
    () => (filter === "All" ? labItems : labItems.filter((item) => item.status === filter)),
    [filter],
  );

  return (
    <AppWindow label="LAB.APP" title="Lab">
      <motion.div variants={staggerContainer(0.06)} initial="initial" animate="animate" className="space-y-8">
        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            Future-facing work
          </span>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl" style={{ color: "var(--color-ink)" }}>
            Lab
          </h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
            What&rsquo;s next, honestly labeled — concepts, in-progress builds, and
            prototypes, not finished products.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className="rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition-colors"
              style={{
                borderColor: filter === s ? "var(--color-accent-blue)" : "var(--color-border)",
                color: filter === s ? "var(--color-accent-blue)" : "var(--color-ink-muted)",
              }}
            >
              {s === "All" ? "All" : statusMeta[s].label}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
            No experiments match this filter. Try exploring another category.
          </p>
        ) : (
          <motion.div variants={staggerContainer(0.06)} initial="initial" animate="animate" className="grid gap-3 md:grid-cols-2">
            {filtered.map((item) => {
              const project = item.relatedProjectSlug ? getProject(item.relatedProjectSlug) : undefined;
              const meta = statusMeta[item.status];
              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="flex h-full flex-col justify-between rounded-xl border p-5"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                        {item.category}
                      </span>
                      <span
                        className="shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest"
                        style={{ borderColor: "var(--color-border)", color: meta.color }}
                      >
                        {meta.label}
                      </span>
                    </div>
                    <h3 className="mt-3 text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                      {item.description}
                    </p>
                  </div>
                  {project && (
                    <Link
                      href={`/work/${project.slug}`}
                      className="mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "var(--color-accent-blue)" }}
                    >
                      {project.title} →
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </AppWindow>
  );
}
