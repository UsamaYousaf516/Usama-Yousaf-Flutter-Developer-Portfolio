"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { CountUp } from "@/components/ui/CountUp";
import { staggerContainer, fadeUp } from "@/lib/motion";

const metrics: Array<{ value: number; suffix: string; label: string; display?: string }> = [
  { value: 3, suffix: "+", label: "Years of professional experience" },
  { value: 200, suffix: "+", label: "RESTful APIs integrated (Ludino)" },
  { value: 7, suffix: "+", label: "Production apps delivered (Neusoftix)" },
  { value: 0, suffix: "", label: "Load-time reduction from performance work", display: "~20–25%" },
];

const specializations = [
  "Flutter Product Development",
  "Scalable UI Architecture",
  "Firebase & Supabase Integration",
  "REST APIs & WebSockets",
  "Real-Time Audio Experiences",
  "Responsive Mobile & Web UI",
  "Motion & Interaction Design",
  "Game & Creative Technology Experiments",
];

export function ProfileApp() {
  return (
    <AppWindow label="PROFILE.APP" title="Profile">
      <motion.div variants={staggerContainer(0.08)} initial="initial" animate="animate" className="space-y-12">
        <motion.div variants={fadeUp} className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div
            className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border sm:h-28 sm:w-28"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Image
              src="/usama-photo.jpg"
              alt="Usama Yousaf"
              width={224}
              height={224}
              className="h-full w-full object-cover object-top grayscale-[15%]"
              priority
            />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
              01 / Introduction
            </span>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--color-ink)" }}>
              I&rsquo;m Usama Yousaf, a Flutter developer based in Islamabad, Pakistan,
              building high-performance mobile and web applications.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--color-ink-muted)" }}>
              3+ years specialized in Flutter, Firebase, and WebSockets, with hands-on
              experience delivering real-time systems, in-app economies, and admin
              dashboard solutions — independently owning features end-to-end.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--color-ink-muted)" }}>
              Beyond client and company products, I explore games, AI-assisted
              experiences, visual systems, and digital-product ideas.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            02 / Metrics
          </span>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border p-4"
                style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
              >
                <div className="font-serif text-3xl" style={{ color: "var(--color-ink)" }}>
                  {m.display ? m.display : <CountUp value={m.value} suffix={m.suffix} />}
                </div>
                <div className="mt-1.5 text-xs leading-snug" style={{ color: "var(--color-ink-muted)" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            03 / Specialization
          </span>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {specializations.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2.5 rounded-lg border px-4 py-3 text-sm"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-accent-blue)" }} />
                {s}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            04 / Philosophy
          </span>
          <p
            className="mt-4 max-w-xl font-serif text-xl italic leading-relaxed md:text-2xl"
            style={{ color: "var(--color-ink)" }}
          >
            &ldquo;I believe good software should feel understandable before it feels
            impressive — and impressive because every detail has been considered.&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </AppWindow>
  );
}
