"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useSettings } from "@/context/SettingsContext";

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
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border p-5"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              <div>
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--color-muted)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-medium" style={{ color: "var(--color-ink)" }}>
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  {project.shortDescription}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest transition-transform duration-150 group-hover:translate-x-1" style={{ color: "var(--color-accent-blue)" }}>
                View system
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M6 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
