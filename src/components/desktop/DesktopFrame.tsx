"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AmbientBackground } from "./AmbientBackground";
import { CustomCursor } from "./CustomCursor";
import { TopBar } from "./TopBar";
import { Dock } from "./Dock";
import { MobileNav } from "./MobileNav";
import { CommandPalette } from "./CommandPalette";
import { Loader } from "./Loader";
import { visibleApps } from "@/lib/apps";
import { windowVariants } from "@/lib/motion";
import { useSettings } from "@/context/SettingsContext";

export function DesktopFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { prefersReducedMotion } = useSettings();
  const [paletteOpen, setPaletteOpen] = useState(false);

  const closePalette = useCallback(() => setPaletteOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = ["INPUT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((p) => !p);
        return;
      }
      if (typing) return;

      if (e.key === "Escape") {
        if (paletteOpen) setPaletteOpen(false);
        else if (pathname !== "/") router.push("/");
        return;
      }
      if (e.key.toLowerCase() === "h") {
        router.push("/");
        return;
      }
      const app = visibleApps.find((a) => a.shortcut === e.key);
      if (app) router.push(app.href);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pathname, paletteOpen, router]);

  const variants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : windowVariants;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Loader />
      <AmbientBackground />
      <CustomCursor />
      <TopBar onOpenPalette={() => setPaletteOpen(true)} onOpenMenu={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={closePalette} />

      <main id="main-content" className="relative min-h-screen">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Dock />
      <MobileNav />
    </>
  );
}
