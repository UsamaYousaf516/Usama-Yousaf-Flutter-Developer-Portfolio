"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppWindow } from "@/components/desktop/AppWindow";
import type { Project } from "@/lib/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={fadeUp} className="border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
      <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
        {index} / {title}
      </span>
      <div className="mt-4">{children}</div>
    </motion.section>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <AppWindow label="WORK.APP" title={project.title} backHref="/work">
      <motion.div variants={staggerContainer(0.06)} initial="initial" animate="animate" className="space-y-8">
        {/* 10.1 Opening */}
        <motion.div variants={fadeUp}>
          <Link
            href="/work"
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: "var(--color-accent-blue)" }}
          >
            ← All work
          </Link>
          <h1 className="mt-4 font-serif text-3xl md:text-5xl" style={{ color: "var(--color-ink)" }}>
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink-muted)" }}>
            {project.shortDescription}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Role", project.role],
              ["Duration", project.duration],
              ["Platforms", project.platforms.join(", ")],
              ["Status", project.status.replace("-", " ")],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--color-muted)" }}>
                  {label}
                </dt>
                <dd className="mt-1 text-xs leading-snug" style={{ color: "var(--color-ink)" }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {project.images.length > 0 && (
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-xl border p-6 md:p-8"
            style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
          >
            <Image
              src={project.images[0]}
              alt={`${project.title} — interface screenshots`}
              width={1920}
              height={640}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </motion.div>
        )}

        <Section index="02" title="Challenge">
          <p className="max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--color-ink-muted)" }}>
            {project.challenge}
          </p>
        </Section>

        <Section index="03" title="Responsibilities">
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.responsibilities.map((r) => (
              <li
                key={r}
                className="flex items-start gap-2.5 rounded-lg border px-4 py-3 text-sm"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-accent-blue)" }} />
                {r}
              </li>
            ))}
          </ul>
        </Section>

        <Section index="04" title="Key Features">
          <div className="grid gap-3 md:grid-cols-3">
            {project.features.map((f) => (
              <div
                key={f.name}
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
              >
                <h4 className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                  {f.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  {f.benefit}
                </p>
                <p className="mt-3 border-t pt-3 font-mono text-[10px] leading-relaxed" style={{ borderColor: "var(--color-border)", color: "var(--color-accent-blue)" }}>
                  {f.technicalNote}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section index="05" title="Engineering Notes">
          <ul className="space-y-2.5">
            {project.engineeringDecisions.map((d) => (
              <li key={d} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                <span style={{ color: "var(--color-accent-clay)" }}>—</span>
                {d}
              </li>
            ))}
          </ul>
        </Section>

        <Section index="06" title="Product Outcome">
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {project.outcomes.map((o) => (
              <li
                key={o}
                className="rounded-lg border px-4 py-3 text-sm leading-relaxed"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                {o}
              </li>
            ))}
          </ul>
        </Section>

        <Section index="07" title="Reflection">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-olive)" }}>
                What I learned
              </h5>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                {project.lessons.learned}
              </p>
            </div>
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-clay)" }}>
                What I&rsquo;d improve
              </h5>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                {project.lessons.improve}
              </p>
            </div>
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-blue)" }}>
                What&rsquo;s next
              </h5>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                {project.lessons.explore}
              </p>
            </div>
          </div>
        </Section>
      </motion.div>
    </AppWindow>
  );
}
