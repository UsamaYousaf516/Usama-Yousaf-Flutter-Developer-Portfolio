"use client";

import { useSettings } from "@/context/SettingsContext";

/**
 * Fine grid + near-static ambient glow. Movement is intentionally
 * almost unnoticeable — it should read as "alive" only if a visitor
 * pauses to look, never as a distraction.
 */
export function AmbientBackground() {
  const { prefersReducedMotion } = useSettings();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="var(--color-grid)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {!prefersReducedMotion && (
        <div
          className="absolute -top-1/3 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full opacity-[0.05] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent-blue) 0%, transparent 70%)",
            animation: "ambient-drift 26s ease-in-out infinite",
          }}
        />
      )}
      <style>{`
        @keyframes ambient-drift {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-46%, 4%) scale(1.06); }
        }
      `}</style>
    </div>
  );
}
