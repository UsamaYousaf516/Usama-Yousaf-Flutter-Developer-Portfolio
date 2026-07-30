"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const items = [
  "Building mobile products at InfiniTech",
  "Creating game and AI experiments",
  "Open to meaningful opportunities",
];

const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "8+", label: "Products shipped" },
  { value: "InfiniTech", label: "Current employer" },
];

export function StatusModule() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeUp}
      className="flex h-full flex-col rounded-xl border p-6 md:p-8"
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
    >
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent-olive)" }} />
        Currently
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-ink)" }}>
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-muted)" }} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto grid grid-cols-3 gap-0 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={i > 0 ? "border-l pl-3.5" : ""}
            style={{ borderColor: "var(--color-border)" }}
          >
            <div
              className={stat.value.length > 3 ? "font-serif text-lg leading-tight" : "font-serif text-2xl"}
              style={{ color: "var(--color-ink)" }}
            >
              {stat.value}
            </div>
            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wide" style={{ color: "var(--color-ink-muted)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
