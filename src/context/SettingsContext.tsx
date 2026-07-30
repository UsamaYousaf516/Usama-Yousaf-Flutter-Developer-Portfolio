"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

type Theme = "paper" | "ink";

interface SettingsState {
  theme: Theme;
  toggleTheme: () => void;
  soundOn: boolean;
  toggleSound: () => void;
  playTone: (kind: "open" | "nav" | "success" | "close") => void;
  prefersReducedMotion: boolean;
}

const SettingsContext = createContext<SettingsState | null>(null);

const THEME_KEY = "usama-os:theme";
const SOUND_KEY = "usama-os:sound";

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("paper");
  const [soundOn, setSoundOn] = useState(false);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    // Storage and system-scheme reads are browser-only and unavailable during SSR,
    // so resolving the real theme/sound preference necessarily happens post-mount —
    // the server/first-paint default above ("paper" / off) is what hydration matches.
    const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(storedTheme ?? (systemDark ? "ink" : "paper"));

    const storedSound = window.localStorage.getItem(SOUND_KEY);
    if (storedSound) {
      setSoundOn(storedSound === "on");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "ink" ? "dark" : "light");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "paper" ? "ink" : "paper";
      window.localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  const toggleSound = useCallback(() => {
    setSoundOn((prev) => {
      const next = !prev;
      window.localStorage.setItem(SOUND_KEY, next ? "on" : "off");
      return next;
    });
  }, []);

  const playTone = useCallback(
    (kind: "open" | "nav" | "success" | "close") => {
      if (!soundOn || typeof window === "undefined") return;
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const freqs: Record<typeof kind, number> = {
          open: 440,
          nav: 520,
          success: 660,
          close: 340,
        };
        osc.type = "sine";
        osc.frequency.value = freqs[kind];
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
        osc.onended = () => ctx.close();
      } catch {
        // Audio unsupported — sound is a progressive enhancement only.
      }
    },
    [soundOn],
  );

  const value = useMemo(
    () => ({ theme, toggleTheme, soundOn, toggleSound, playTone, prefersReducedMotion }),
    [theme, toggleTheme, soundOn, toggleSound, playTone, prefersReducedMotion],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
