"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { projects, type ProjectTag } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useSettings } from "@/context/SettingsContext";

const allTags: ProjectTag[] = [
  "Mobile",
  "Flutter Web",
  "Firebase",
  "Supabase",
  "Real-Time",
  "Games",
  "UI Systems",
  "Experiments",
  "Client Work",
];

export function WorkApp() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "All">("All");
  const { playTone } = useSettings();

  const featured = projects.filter((p) => p.isFeatured);
  const filtered = useMemo(
    () => (activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag))),
    [activeTag],
  );

  return (
    <AppWindow label="WORK.APP" title="Selected Work">
      <div className="space-y-14">
        <section>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            Featured Case Studies
          </span>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="initial"
            animate="animate"
            className="mt-4 grid gap-3 md:grid-cols-2"
          >
            {featured.map((project, i) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <Link
                  href={`/work/${project.slug}`}
                  onClick={() => playTone("nav")}
                  data-cursor="VIEW"
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
                >
                  {project.images.length > 0 && (
                    <div
                      className="flex items-center justify-center border-b p-4"
                      style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
                    >
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} — interface screenshots`}
                        width={1920}
                        height={640}
                        className="h-auto max-h-40 w-full object-contain"
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--color-muted)" }}>
                        {String(i + 1).padStart(2, "0")} — {project.year}
                      </span>
                      <span
                        className="rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest"
                        style={{ borderColor: "var(--color-border)", color: "var(--color-accent-olive)" }}
                      >
                        {project.status.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-2xl" style={{ color: "var(--color-ink)" }}>
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                      {project.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide"
                          style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      className="mt-6 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest transition-transform duration-150 group-hover:translate-x-1"
                      style={{ color: "var(--color-accent-blue)" }}
                    >
                      Open case study
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 5h8M6 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
              Project Archive
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["All", ...allTags] as const).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className="rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition-colors"
                style={{
                  borderColor: activeTag === tag ? "var(--color-accent-blue)" : "var(--color-border)",
                  color: activeTag === tag ? "var(--color-accent-blue)" : "var(--color-ink-muted)",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-8 text-sm" style={{ color: "var(--color-ink-muted)" }}>
              No projects match this filter. Try exploring another category.
            </p>
          ) : (
            <div className="mt-4 divide-y" style={{ borderColor: "var(--color-border)" }}>
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="flex items-center justify-between gap-4 py-4 transition-colors hover:opacity-70"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    {project.images.length > 0 && (
                      <div
                        className="hidden h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border sm:flex"
                        style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
                      >
                        <Image
                          src={project.images[0]}
                          alt=""
                          width={1920}
                          height={640}
                          className="h-full w-full object-cover"
                          aria-hidden
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                        {project.title}
                      </div>
                      <div className="mt-0.5 truncate text-xs" style={{ color: "var(--color-ink-muted)" }}>
                        {project.year} — {project.tags.join(", ")}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-blue)" }}>
                    View →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </AppWindow>
  );
}
