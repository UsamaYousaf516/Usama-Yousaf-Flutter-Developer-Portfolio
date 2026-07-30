"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { visibleApps } from "@/lib/apps";
import { AppIcon } from "@/components/icons/AppIcon";

const primary = visibleApps.filter((a) => ["profile", "work", "about", "skills", "contact"].includes(a.id));

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary applications"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t md:hidden"
      style={{
        borderColor: "var(--color-border)",
        background: "color-mix(in srgb, var(--color-bg) 94%, transparent)",
        backdropFilter: "blur(10px)",
      }}
    >
      {primary.map((app) => {
        const active = pathname === app.href || (app.id === "profile" && pathname === "/");
        return (
          <Link
            key={app.id}
            href={app.id === "profile" ? "/" : app.href}
            className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] uppercase tracking-wide"
            style={{ color: active ? "var(--color-accent-blue)" : "var(--color-ink-muted)" }}
          >
            <AppIcon id={app.id} className="h-5 w-5" />
            {app.id === "profile" ? "Home" : app.name}
          </Link>
        );
      })}
    </nav>
  );
}
