"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { experiments, type ExperimentStatus } from "@/lib/playground";
import { getProject } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { MotionComparisonDemo } from "./MotionComparisonDemo";

const statusColor: Record<ExperimentStatus, string> = {
  released: "var(--color-accent-olive)",
  prototype: "var(--color-accent-blue)",
  concept: "var(--color-muted)",
};

export function PlaygroundApp() {
  const [openId, setOpenId] = useState<string | null>(experiments[0].id);

  return (
    <AppWindow label="PLAYGROUND.APP" title="Playground">
      <motion.div variants={staggerContainer(0.06)} initial="initial" animate="animate" className="space-y-8">
        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            Numbered research
          </span>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl" style={{ color: "var(--color-ink)" }}>
            Playground
          </h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
            Small, curated studies — each with a real objective and result, not just a
            demo for its own sake.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-xl border"
          style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        >
          {experiments.map((exp, i) => {
            const open = openId === exp.id;
            const project = exp.relatedProjectSlug ? getProject(exp.relatedProjectSlug) : undefined;

            return (
              <div key={exp.id} className={i > 0 ? "border-t" : ""} style={{ borderColor: "var(--color-border)" }}>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : exp.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-7"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] tracking-widest" style={{ color: "var(--color-muted)" }}>
                      {exp.code}
                    </span>
                    <div>
                      <div className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                        {exp.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest"
                      style={{ borderColor: "var(--color-border)", color: statusColor[exp.status] }}
                    >
                      {exp.status}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </div>
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
                        <div className="grid gap-5 sm:grid-cols-3">
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                              Objective
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-ink)" }}>
                              {exp.objective}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                              What was tested
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-ink)" }}>
                              {exp.tested}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-olive)" }}>
                              Result
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-ink)" }}>
                              {exp.result}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-1.5">
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide"
                              style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
                            >
                              {t}
                            </span>
                          ))}
                          {project && (
                            <Link
                              href={`/work/${project.slug}`}
                              className="ml-auto rounded-lg border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide"
                              style={{ borderColor: "var(--color-border)", color: "var(--color-accent-blue)" }}
                            >
                              {project.title} →
                            </Link>
                          )}
                        </div>

                        {exp.hasLivePreview && (
                          <div className="mt-5">
                            <h4 className="mb-2 font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                              Interactive preview
                            </h4>
                            <MotionComparisonDemo />
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
      </motion.div>
    </AppWindow>
  );
}
