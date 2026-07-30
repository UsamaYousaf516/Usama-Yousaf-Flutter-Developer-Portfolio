"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const items = [
  "Building mobile products",
  "Creating game and AI experiments",
  "Open to meaningful opportunities",
];

export function StatusModule() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeUp}
      className="rounded-xl border p-6 md:p-8"
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
    </motion.div>
  );
}
