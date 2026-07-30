"use client";

import { useRouter } from "next/navigation";
import { useSettings } from "@/context/SettingsContext";

/**
 * Window chrome for every non-home application. The open/close motion
 * itself is driven by the pathname-keyed transition in DesktopFrame;
 * this component only supplies the frame — title bar, border, close
 * control — shared by every app so the system reads as one product.
 */
export function AppWindow({
  label,
  title,
  children,
  backHref = "/",
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  backHref?: string;
}) {
  const router = useRouter();
  const { playTone } = useSettings();

  const close = () => {
    playTone("close");
    router.push(backHref);
  };

  return (
    <div className="mx-auto w-full max-w-[1120px] px-4 pb-24 pt-[4.75rem] md:px-8 md:pb-16 md:pt-24">
      <div
        className="overflow-hidden rounded-2xl border md:rounded-2xl"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-surface)",
          boxShadow: "var(--shadow-window)",
        }}
      >
        <div
          className="flex items-center justify-between border-b px-4 py-3 md:px-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={close}
              aria-label="Close application"
              data-cursor="CLOSE"
              className="grid h-6 w-6 place-items-center rounded-md border transition-colors hover:text-[var(--color-accent-clay)]"
              style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: "var(--color-ink-muted)" }}
            >
              {label}
            </span>
          </div>
          <h1 className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            {title}
          </h1>
        </div>
        <div className="px-5 py-8 md:px-12 md:py-14">{children}</div>
      </div>
    </div>
  );
}
