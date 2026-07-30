"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSettings } from "@/context/SettingsContext";

function useClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function TopBar({
  onOpenPalette,
  onOpenMenu,
}: {
  onOpenPalette: () => void;
  onOpenMenu: () => void;
}) {
  const time = useClock();
  const { theme, toggleTheme, soundOn, toggleSound } = useSettings();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b" style={{ borderColor: "var(--color-border)" }}>
      <div
        className="flex h-11 items-center justify-between px-4 backdrop-blur-md md:px-6"
        style={{ background: "color-mix(in srgb, var(--color-bg) 82%, transparent)" }}
      >
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
          <Link href="/" className="flex items-center gap-2" style={{ color: "var(--color-ink)" }}>
            <span className="inline-block h-1.5 w-1.5" style={{ background: "var(--color-accent-clay)" }} />
            USAMA OS
          </Link>
          <span className="hidden select-none sm:inline">/ WORKSPACE 01</span>
        </div>

        <div className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-widest sm:flex" style={{ color: "var(--color-ink-muted)" }}>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent-olive)" }} />
            Available for opportunities
          </span>
          <span>{time}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors md:flex"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
          >
            Search
            <kbd className="rounded border px-1 text-[10px]" style={{ borderColor: "var(--color-border)" }}>
              ⌘K
            </kbd>
          </button>
          <button
            type="button"
            aria-label={soundOn ? "Mute sound" : "Enable sound"}
            onClick={toggleSound}
            className="grid h-8 w-8 place-items-center rounded-md border transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
          >
            {soundOn ? <IconSoundOn /> : <IconSoundOff />}
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid h-8 w-8 place-items-center rounded-md border transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
          >
            {theme === "paper" ? <IconMoon /> : <IconSun />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={onOpenMenu}
            className="grid h-8 w-8 place-items-center rounded-md border transition-colors md:hidden"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink-muted)" }}
          >
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

function IconSoundOn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 4V5L8 9H4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M17 8.5a5 5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconSoundOff() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 4V5L8 9H4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconMoon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
function IconSun() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
