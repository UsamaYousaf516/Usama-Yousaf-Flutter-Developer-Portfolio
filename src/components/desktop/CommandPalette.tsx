"use client";

import { useEffect, useRef } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { visibleApps } from "@/lib/apps";
import { useSettings } from "@/context/SettingsContext";
import { withBasePath } from "@/lib/basePath";

const EMAIL = "usama.yousaf516@gmail.com";
const WHATSAPP_URL = "https://wa.me/971508346737?text=" + encodeURIComponent("Hi Usama, I'm reaching out from your portfolio.");
const LINKEDIN_URL = "https://www.linkedin.com/in/usama-yousaf-4a9b48221/";
const GITHUB_URL = "https://github.com/UsamaYousaf516";

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const { toggleTheme, toggleSound, playTone } = useSettings();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open]);

  const go = (href: string) => {
    playTone("nav");
    router.push(href);
    onClose();
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard API unavailable — user can still read the address in Contact.
    }
    playTone("success");
    onClose();
  };

  return (
    <>
    <AnimatePresence>
      {open && (
        <motion.div
          key="command-palette"
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button
            aria-label="Close command palette"
            className="fixed inset-0"
            style={{ background: "color-mix(in srgb, var(--color-ink) 34%, transparent)" }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-window)",
            }}
          >
            <Command loop label="Command palette">
              <div className="flex items-center gap-2 border-b px-4" style={{ borderColor: "var(--color-border)" }}>
                <span className="font-mono text-xs" style={{ color: "var(--color-ink-muted)" }}>
                  &gt;
                </span>
                <Command.Input
                  ref={inputRef}
                  placeholder="Type a command or search…"
                  className="w-full bg-transparent py-3.5 text-sm outline-none"
                  style={{ color: "var(--color-ink)" }}
                />
                <kbd className="rounded border px-1.5 py-0.5 font-mono text-[10px]" style={{ borderColor: "var(--color-border)" }}>
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  No matching command.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  <Command.Item value="Return home" onSelect={() => go("/")} className="cmdk-row">
                    Return home
                  </Command.Item>
                  {visibleApps.map((app) => (
                    <Command.Item key={app.id} value={`Open ${app.name}`} onSelect={() => go(app.href)} className="cmdk-row">
                      Open {app.name}
                    </Command.Item>
                  ))}
                  <Command.Item value="Open Pixel Clash case study" onSelect={() => go("/work/pixel-clash")} className="cmdk-row">
                    Open Pixel Clash
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Actions"
                  className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  <Command.Item value="Copy email address" onSelect={copyEmail} className="cmdk-row">
                    Copy email address
                  </Command.Item>
                  <Command.Item value="Download résumé" onSelect={() => { window.open(withBasePath("/usama-yousaf-resume.pdf"), "_blank"); onClose(); }} className="cmdk-row">
                    Download résumé
                  </Command.Item>
                  <Command.Item value="Message on WhatsApp" onSelect={() => { window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer"); onClose(); }} className="cmdk-row">
                    Message on WhatsApp
                  </Command.Item>
                  <Command.Item value="Open LinkedIn" onSelect={() => { window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer"); onClose(); }} className="cmdk-row">
                    Open LinkedIn
                  </Command.Item>
                  <Command.Item value="Open GitHub" onSelect={() => { window.open(GITHUB_URL, "_blank", "noopener,noreferrer"); onClose(); }} className="cmdk-row">
                    Open GitHub
                  </Command.Item>
                  <Command.Item value="Toggle theme" onSelect={() => { toggleTheme(); onClose(); }} className="cmdk-row">
                    Toggle theme
                  </Command.Item>
                  <Command.Item value="Toggle sound" onSelect={() => { toggleSound(); onClose(); }} className="cmdk-row">
                    Toggle sound
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    <style>{`
      .cmdk-row {
        padding: 0.55rem 0.75rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        cursor: pointer;
        color: var(--color-ink);
      }
      .cmdk-row[data-selected="true"] {
        background: var(--color-bg);
      }
    `}</style>
    </>
  );
}
