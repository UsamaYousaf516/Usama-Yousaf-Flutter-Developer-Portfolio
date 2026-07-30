"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { experienceLog } from "@/lib/experience";
import { getProject } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { withBasePath } from "@/lib/basePath";

export function ExperienceApp() {
  const [openId, setOpenId] = useState<string | null>(experienceLog[experienceLog.length - 1].id);

  return (
    <AppWindow label="EXPERIENCE.APP" title="Experience">
      <motion.div variants={staggerContainer(0.06)} initial="initial" animate="animate" className="space-y-8">
        <motion.div variants={fadeUp} className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
              Build history
            </span>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl" style={{ color: "var(--color-ink)" }}>
              System log
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
              A release-history view of how this build reached its current state — each
              entry expands into role, responsibilities, and what it changed.
            </p>
          </div>
          <a
            href={withBasePath("/usama-yousaf-resume.pdf")}
            className="hidden shrink-0 rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest sm:block"
            style={{ borderColor: "var(--color-accent-blue)", color: "var(--color-accent-blue)" }}
          >
            Download résumé
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-xl border"
          style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        >
          {experienceLog.map((entry, i) => {
            const open = openId === entry.id;
            const relatedProjects = entry.relatedProjectSlugs
              .map((slug) => getProject(slug))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));

            return (
              <div
                key={entry.id}
                className={i > 0 ? "border-t" : ""}
                style={{ borderColor: "var(--color-border)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : entry.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-7"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest"
                      style={{
                        borderColor: entry.current ? "var(--color-accent-olive)" : "var(--color-border)",
                        color: entry.current ? "var(--color-accent-olive)" : "var(--color-muted)",
                      }}
                    >
                      {entry.build}
                    </span>
                    <div>
                      <div className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                        {entry.title}
                      </div>
                      <div className="mt-0.5 text-xs" style={{ color: "var(--color-ink-muted)" }}>
                        {entry.period}
                      </div>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 md:px-7">
                        <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                          {entry.summary}
                        </p>

                        <div className="mt-5 grid gap-5 sm:grid-cols-2">
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                              Responsibilities
                            </h4>
                            <ul className="mt-2 space-y-1.5">
                              {entry.responsibilities.map((r) => (
                                <li key={r} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--color-ink)" }}>
                                  <span style={{ color: "var(--color-accent-blue)" }}>—</span>
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                              Achievements
                            </h4>
                            <ul className="mt-2 space-y-1.5">
                              {entry.achievements.map((a) => (
                                <li key={a} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--color-ink)" }}>
                                  <span style={{ color: "var(--color-accent-olive)" }}>—</span>
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {entry.technologies.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide"
                              style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <p
                          className="mt-5 max-w-2xl border-t pt-4 text-xs italic leading-relaxed"
                          style={{ borderColor: "var(--color-border)", color: "var(--color-accent-clay)" }}
                        >
                          {entry.lessons}
                        </p>

                        {relatedProjects.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {relatedProjects.map((p) => (
                              <Link
                                key={p.slug}
                                href={`/work/${p.slug}`}
                                className="rounded-lg border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition-colors"
                                style={{ borderColor: "var(--color-border)", color: "var(--color-accent-blue)" }}
                              >
                                {p.title} →
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="sm:hidden">
          <a
            href={withBasePath("/usama-yousaf-resume.pdf")}
            className="inline-block rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest"
            style={{ borderColor: "var(--color-accent-blue)", color: "var(--color-accent-blue)" }}
          >
            Download résumé
          </a>
        </motion.div>
      </motion.div>
    </AppWindow>
  );
}
