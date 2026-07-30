"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { visibleApps } from "@/lib/apps";
import { AppIcon } from "@/components/icons/AppIcon";
import { useSettings } from "@/context/SettingsContext";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function AppGrid() {
  const { playTone } = useSettings();

  return (
    <motion.div
      variants={staggerContainer(0.05, 0.1)}
      initial="initial"
      animate="animate"
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
    >
      {visibleApps.map((app) => (
        <motion.div key={app.id} variants={fadeUp}>
          <Link
            href={app.href}
            onClick={() => playTone("open")}
            data-cursor="OPEN"
            className="group flex flex-col gap-4 rounded-xl border p-5 transition-colors duration-150"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-surface)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="grid h-9 w-9 place-items-center rounded-lg border transition-colors group-hover:border-[var(--color-accent-blue)]"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                <AppIcon id={app.id} className="h-4.5 w-4.5" />
              </span>
              {app.shortcut && (
                <kbd
                  className="rounded border px-1.5 py-0.5 font-mono text-[10px]"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
                >
                  {app.shortcut}
                </kbd>
              )}
            </div>
            <div>
              <div className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                {app.name}
              </div>
              <div className="mt-1 text-xs leading-snug" style={{ color: "var(--color-ink-muted)" }}>
                {app.tagline}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
