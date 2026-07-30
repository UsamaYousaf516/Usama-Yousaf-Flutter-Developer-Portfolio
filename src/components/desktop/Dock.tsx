"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { visibleApps } from "@/lib/apps";
import { AppIcon } from "@/components/icons/AppIcon";
import { useSettings } from "@/context/SettingsContext";

const dockApps = visibleApps.filter((a) =>
  ["profile", "work", "experience", "skills", "about", "contact"].includes(a.id),
);

export function Dock() {
  const pathname = usePathname();
  const { playTone } = useSettings();

  return (
    <nav
      aria-label="Primary applications"
      className="fixed inset-x-0 bottom-0 z-40 hidden justify-center pb-5 md:flex"
    >
      <ul
        className="flex items-end gap-1 rounded-xl border px-2 py-2 backdrop-blur-md"
        style={{
          borderColor: "var(--color-border)",
          background: "color-mix(in srgb, var(--color-surface) 88%, transparent)",
          boxShadow: "var(--shadow-window)",
        }}
      >
        {dockApps.map((app) => {
          const active = pathname === app.href;
          return (
            <li key={app.id} className="group relative">
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border px-2 py-1 font-mono text-[10px] uppercase tracking-wide opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                  color: "var(--color-ink-muted)",
                }}
              >
                {app.name}
              </span>
              <Link
                href={app.href}
                onClick={() => playTone("nav")}
                data-cursor="OPEN"
                className="flex h-11 w-11 -translate-y-0 items-center justify-center rounded-lg border transition-all duration-150 ease-out group-hover:-translate-y-1"
                style={{
                  borderColor: active ? "var(--color-accent-blue)" : "transparent",
                  color: active ? "var(--color-accent-blue)" : "var(--color-ink-muted)",
                }}
              >
                <AppIcon id={app.id} className="h-5 w-5" />
              </Link>
              {active && (
                <span
                  className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                  style={{ background: "var(--color-accent-blue)" }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
