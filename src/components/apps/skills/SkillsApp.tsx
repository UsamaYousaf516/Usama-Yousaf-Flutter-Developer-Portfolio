"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { skillCategories, coreStack } from "@/lib/skills";
import { getProject } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";

const firstSkill = skillCategories[0].skills[0];

export function SkillsApp() {
  const [selected, setSelected] = useState(firstSkill);

  const relatedProjects = selected.relatedProjectSlugs
    .map((slug) => getProject(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <AppWindow label="SKILLS.APP" title="Skills">
      <motion.div variants={staggerContainer(0.06)} initial="initial" animate="animate" className="space-y-8">
        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            Practical capability
          </span>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl" style={{ color: "var(--color-ink)" }}>
            Grouped by what it builds, not a percentage
          </h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
            Select a skill to see where it was actually used, rather than an arbitrary score.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-xl border p-5"
          style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-olive)" }}>
            Core stack
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {coreStack.map((item) => (
              <span
                key={item}
                className="rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)", background: "var(--color-bg)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <motion.div variants={fadeUp} className="space-y-7">
            {skillCategories.map((category) => (
              <div key={category.id}>
                <h2 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                  {category.name}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const active = selected.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setSelected(skill)}
                        aria-pressed={active}
                        className="rounded-full border px-3 py-1.5 text-xs transition-colors"
                        style={{
                          borderColor: active ? "var(--color-accent-blue)" : "var(--color-border)",
                          color: active ? "var(--color-accent-blue)" : "var(--color-ink)",
                          background: active ? "var(--color-surface)" : "transparent",
                        }}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
              >
                <h3 className="font-serif text-2xl" style={{ color: "var(--color-ink)" }}>
                  {selected.name}
                </h3>

                <div className="mt-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                    Practical experience
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-ink)" }}>
                    {selected.practicalNote}
                  </p>
                </div>

                <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-blue)" }}>
                    Technical example
                  </h4>
                  <p className="mt-2 font-mono text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                    {selected.technicalExample}
                  </p>
                </div>

                {relatedProjects.length > 0 ? (
                  <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                      Used in
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {relatedProjects.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/work/${p.slug}`}
                          className="rounded-lg border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide"
                          style={{ borderColor: "var(--color-border)", color: "var(--color-accent-blue)" }}
                        >
                          {p.title} →
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="mt-4 border-t pt-4 text-xs" style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}>
                    Cross-cutting — applied across this portfolio itself rather than one project.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </AppWindow>
  );
}
