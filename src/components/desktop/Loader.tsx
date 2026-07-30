"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSettings } from "@/context/SettingsContext";

const SESSION_KEY = "usama-os:intro-seen";

type Phase = "grid" | "welcome" | "done";

export function Loader() {
  const { prefersReducedMotion } = useSettings();
  const [phase, setPhase] = useState<Phase>("grid");
  const [ready, setReady] = useState(false);

  const finish = useCallback(() => {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("done");
  }, []);

  useEffect(() => {
    // sessionStorage is browser-only, so whether the intro has already played
    // can only be known post-mount — the server/first-paint default (playing
    // the intro) is what hydration matches against.
    const seen = window.sessionStorage.getItem(SESSION_KEY);
    if (seen || prefersReducedMotion) {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- returning early, phase never re-renders mid-intro
      setPhase("done");
      setReady(true);
      return;
    }
    setReady(true);
    const t1 = setTimeout(() => setPhase("welcome"), 1500);
    const t2 = setTimeout(finish, 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [prefersReducedMotion, finish]);

  if (!ready) return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
          style={{ background: "var(--color-bg)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <svg className="absolute inset-0 h-full w-full opacity-70" aria-hidden>
            <defs>
              <pattern id="loader-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--color-grid)" strokeWidth="1" />
              </pattern>
            </defs>
            <motion.rect
              width="100%"
              height="100%"
              fill="url(#loader-grid)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </svg>

          <div
            className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest md:left-8 md:top-8"
            style={{ color: "var(--color-ink-muted)" }}
          >
            41.5°N — SYS.01
          </div>
          <div
            className="pointer-events-none absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest md:bottom-8 md:right-8"
            style={{ color: "var(--color-ink-muted)" }}
          >
            v0.1.0
          </div>

          <AnimatePresence mode="wait">
            {phase === "grid" && (
              <motion.div
                key="grid-phase"
                className="flex flex-col items-center gap-6"
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ letterSpacing: "0.5em", opacity: 0 }}
                  animate={{ letterSpacing: "0.06em", opacity: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-4xl md:text-6xl"
                  style={{ color: "var(--color-ink)" }}
                >
                  USAMA OS
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-center font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Initializing creative workspace
                  <br />
                  Loading products, experiments &amp; ideas
                </motion.div>
              </motion.div>
            )}

            {phase === "welcome" && (
              <motion.div
                key="welcome-phase"
                className="flex flex-col items-center gap-3 px-6 text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-2xl md:text-3xl" style={{ color: "var(--color-ink)" }}>
                  Hello, I&rsquo;m Usama.
                </p>
                <p className="max-w-sm text-sm md:text-base" style={{ color: "var(--color-ink-muted)" }}>
                  I design and build digital products that people enjoy using.
                </p>
                <p
                  className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-accent-blue)" }}
                >
                  Flutter Developer — Product Builder — Creative Technologist
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={finish}
            className="absolute bottom-8 rounded-md border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors md:bottom-10"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
