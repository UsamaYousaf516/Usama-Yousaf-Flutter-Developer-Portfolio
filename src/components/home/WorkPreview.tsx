"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects, type ProjectStatus } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useSettings } from "@/context/SettingsContext";

const statusColor: Record<ProjectStatus, string> = {
  released: "var(--color-accent-olive)",
  "in-progress": "var(--color-accent-clay)",
  prototype: "var(--color-accent-blue)",
  archived: "var(--color-muted)",
};

export function WorkPreview() {
  const projects = getFeaturedProjects().slice(0, 3);
  const { playTone } = useSettings();

  return (
    <motion.div variants={staggerContainer(0.08, 0.1)} initial="initial" animate="animate">
      <div className="flex items-baseline justify-between">
        <h2 className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
          Selected Work
        </h2>
        <Link
          href="/work"
          className="font-mono text-[11px] uppercase tracking-widest underline-offset-4 hover:underline"
          style={{ color: "var(--color-accent-blue)" }}
        >
          View all
        </Link>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div key={project.slug} variants={fadeUp}>
            <Link
              href={`/work/${project.slug}`}
              onClick={() => playTone("nav")}
              data-cursor="VIEW"
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              <div
                className="relative flex h-[110px] items-center justify-center border-b"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-bg)",
                  backgroundImage:
                    project.images.length === 0
                      ? "repeating-linear-gradient(135deg, var(--color-grid) 0px, var(--color-grid) 1px, transparent 1px, transparent 10px)"
                      : undefined,
                }}
              >
                {project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt=""
                    width={1920}
                    height={640}
                    className="h-full w-full object-cover"
                    aria-hidden
                  />
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: "var(--color-muted)" }}>
                    Project screenshot
                  </span>
                )}
                <span
                  className="absolute left-2.5 top-2.5 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide"
                  style={{
                    borderColor: "var(--color-border)",
                    color: statusColor[project.status],
                    background: "color-mix(in srgb, var(--color-surface) 85%, transparent)",
                  }}
                >
                  {project.status.replace("-", " ")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--color-muted)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-medium" style={{ color: "var(--color-ink)" }}>
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  {project.shortDescription}
                </p>
                <div className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[10px] uppercase tracking-widest transition-transform duration-150 group-hover:translate-x-1" style={{ color: "var(--color-accent-blue)" }}>
                  View system
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M6 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
