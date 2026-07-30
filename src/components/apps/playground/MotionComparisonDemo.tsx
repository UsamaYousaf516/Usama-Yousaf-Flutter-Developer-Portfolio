"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ease, duration } from "@/lib/motion";

type Mode = "generic" | "token";

export function MotionComparisonDemo() {
  const [mode, setMode] = useState<Mode>("token");
  const [bump, setBump] = useState(0);

  const play = (next: Mode) => {
    setMode(next);
    setBump((b) => b + 1);
  };

  return (
    <div
      className="rounded-lg border p-5"
      style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => play("generic")}
          className="rounded-md border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition-colors"
          style={{
            borderColor: mode === "generic" ? "var(--color-accent-clay)" : "var(--color-border)",
            color: mode === "generic" ? "var(--color-accent-clay)" : "var(--color-ink-muted)",
          }}
        >
          Generic linear
        </button>
        <button
          type="button"
          onClick={() => play("token")}
          className="rounded-md border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition-colors"
          style={{
            borderColor: mode === "token" ? "var(--color-accent-blue)" : "var(--color-border)",
            color: mode === "token" ? "var(--color-accent-blue)" : "var(--color-ink-muted)",
          }}
        >
          Token-based ease
        </button>
        <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-muted)" }}>
          Click either — watch the card
        </span>
      </div>

      <div className="mt-6 h-20 overflow-hidden rounded-md">
        <motion.div
          key={bump}
          initial={{ x: -140, opacity: 0.4 }}
          animate={{ x: 0, opacity: 1 }}
          transition={
            mode === "generic"
              ? { duration: 0.9, ease: "linear" }
              : { duration: duration.windowOpen, ease: ease.standard }
          }
          className="h-full w-28 rounded-md border"
          style={{
            borderColor: mode === "generic" ? "var(--color-accent-clay)" : "var(--color-accent-blue)",
            background: "var(--color-surface)",
          }}
        />
      </div>
      <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
        Same distance, same rough duration — linear easing feels mechanical, the token-based
        curve settles the way the rest of this portfolio&rsquo;s windows do.
      </p>
    </div>
  );
}
