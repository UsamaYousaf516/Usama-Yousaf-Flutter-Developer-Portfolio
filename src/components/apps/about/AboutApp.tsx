"use client";

import { motion } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { staggerContainer, fadeUp } from "@/lib/motion";

const beyondTheCode = [
  "Exploring business and digital products",
  "Designing game systems",
  "Studying product experiences",
  "Experimenting with animation",
  "Learning emerging technologies",
  "Turning ideas into prototypes",
];

export function AboutApp() {
  return (
    <AppWindow label="ABOUT.APP" title="About">
      <motion.div variants={staggerContainer(0.08)} initial="initial" animate="animate" className="space-y-12">
        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            01 / The story
          </span>
          <div className="mt-4 max-w-2xl space-y-5">
            <p className="font-serif text-xl leading-relaxed md:text-2xl" style={{ color: "var(--color-ink)" }}>
              I started with Flutter because it gave me a fast way to turn ideas into
              real products.
            </p>
            <p className="text-sm leading-relaxed md:text-base" style={{ color: "var(--color-ink-muted)" }}>
              Over time, my interest expanded beyond individual screens and features. I
              became interested in complete systems: how products are structured, how
              users move through them, how motion changes perception, how technical
              decisions affect usability, and how an idea becomes something people can
              actually enjoy using.
            </p>
            <p className="text-sm leading-relaxed md:text-base" style={{ color: "var(--color-ink-muted)" }}>
              Today, I work across mobile products, responsive web interfaces,
              real-time experiences, admin systems, games, and creative experiments.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            02 / Beyond the code
          </span>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {beyondTheCode.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-lg border px-4 py-3 text-sm"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-accent-olive)" }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            03 / Direction
          </span>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "var(--color-ink-muted)" }}>
            The through-line across the Profile, Experience, and Work apps in this
            workspace is the same one described here: engineering and creative
            thinking aren&rsquo;t separate modes for me, they&rsquo;re the same discipline
            applied at different zoom levels — from a single widget to an entire
            admin system to a self-directed simulation like Pixel Clash.
          </p>
        </motion.div>
      </motion.div>
    </AppWindow>
  );
}
