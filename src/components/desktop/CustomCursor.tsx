"use client";

import { useEffect, useRef, useState } from "react";
import { useSettings } from "@/context/SettingsContext";
import { useMediaQuery } from "@/lib/useMediaQuery";

/**
 * Optional desktop-only cursor. Auto-disables on touch devices and
 * when reduced motion is requested; never intercepts pointer events.
 */
export function CustomCursor() {
  const { prefersReducedMotion } = useSettings();
  const isTouch = useMediaQuery("(pointer: coarse)");
  const enabled = !isTouch && !prefersReducedMotion;
  const [label, setLabel] = useState<string | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      ringX = e.clientX;
      ringY = e.clientY;

      const target = e.target as HTMLElement;
      const cursorEl = target.closest<HTMLElement>("[data-cursor]");
      setLabel(cursorEl?.dataset.cursor ?? null);
    };

    const tick = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] hidden md:block" aria-hidden>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--color-ink)" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-[width,height] duration-150 ease-out"
        style={{
          width: label ? 56 : 28,
          height: label ? 56 : 28,
          borderColor: "var(--color-ink)",
          opacity: 0.35,
        }}
      >
        {label && (
          <span
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "var(--color-ink)" }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
