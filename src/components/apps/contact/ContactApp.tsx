"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppWindow } from "@/components/desktop/AppWindow";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useSettings } from "@/context/SettingsContext";
import { withBasePath } from "@/lib/basePath";

const EMAIL = "usama.yousaf516@gmail.com";
const WHATSAPP_URL = "https://wa.me/971508346737?text=" + encodeURIComponent("Hi Usama, I'm reaching out from your portfolio.");
const LINKEDIN_URL = "https://www.linkedin.com/in/usama-yousaf-4a9b48221/";
const GITHUB_URL = "https://github.com/UsamaYousaf516";
const MAILTO_URL =
  `mailto:${EMAIL}?subject=` +
  encodeURIComponent("Let's build something") +
  "&body=" +
  encodeURIComponent("Hi Usama,\n\nI'd like to talk about — ");

// This static-hosted build (e.g. GitHub Pages) has no server, so /api/contact
// isn't available — fall back to a direct mailto instead of a dead form.
const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactApp() {
  const { playTone } = useSettings();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      playTone("success");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the address is still visible on screen.
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      budget: String(form.get("budget") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
      company_website: String(form.get("company_website") ?? ""),
    };

    const nextErrors: Record<string, string> = {};
    if (!payload.name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = "Please enter a valid email.";
    if (!payload.message || payload.message.length < 10) {
      nextErrors.message = "Tell me a little more — a sentence or two is enough.";
    }

    setErrors(nextErrors);
    setErrorMessage(null);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setErrorMessage(data.error ?? "This message could not be sent. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      playTone("success");
    } catch {
      setErrorMessage("This message could not be sent. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <AppWindow label="CONTACT.APP" title="Contact">
      <motion.div variants={staggerContainer(0.08)} initial="initial" animate="animate" className="space-y-10">
        <motion.div variants={fadeUp}>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
            Have an idea worth building?
          </span>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl" style={{ color: "var(--color-ink)" }}>
            Let&rsquo;s turn it into something people remember.
          </h1>
          <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--color-accent-olive)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent-olive)" }} />
            Open to meaningful Flutter, mobile product, and creative technology opportunities
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
          <a
            href={withBasePath("/usama-yousaf-resume.pdf")}
            className="rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
          >
            Download résumé
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
          >
            WhatsApp
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
          >
            GitHub
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
          {IS_STATIC_EXPORT ? (
            <div
              className="rounded-xl border p-8 text-center"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                Send a message
              </span>
              <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                This build is running as a static site, so the in-page form isn&rsquo;t available here — email
                directly instead and I&rsquo;ll get back to you.
              </p>
              <a
                href={MAILTO_URL}
                className="mt-5 inline-block rounded-lg border px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-colors"
                style={{ borderColor: "var(--color-accent-blue)", color: "var(--color-accent-blue)" }}
              >
                Email {EMAIL}
              </a>
            </div>
          ) : (
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border p-8 text-center"
                style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-accent-olive)" }}>
                  Message transmitted
                </span>
                <p className="mt-3 font-serif text-xl" style={{ color: "var(--color-ink)" }}>
                  Message received.
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  Thank you for reaching out. I&rsquo;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4 sm:grid-cols-2"
                noValidate
              >
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <Field label="Name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Company / project" name="company" className="sm:col-span-2" />
                <Field label="Budget range (optional)" name="budget" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
                    What would you like to build?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm outline-none"
                    style={{ borderColor: errors.message ? "var(--color-accent-clay)" : "var(--color-border)", color: "var(--color-ink)" }}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs" style={{ color: "var(--color-accent-clay)" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-lg border px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-colors disabled:opacity-60"
                    style={{ borderColor: "var(--color-accent-blue)", color: "var(--color-accent-blue)" }}
                  >
                    {status === "submitting" ? "Transmitting…" : "Start a conversation"}
                  </button>
                  {status === "error" && errorMessage && (
                    <p className="mt-2 text-xs" style={{ color: "var(--color-accent-clay)" }}>
                      {errorMessage}
                    </p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
          )}
        </motion.div>
      </motion.div>
    </AppWindow>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm outline-none"
        style={{ borderColor: error ? "var(--color-accent-clay)" : "var(--color-border)", color: "var(--color-ink)" }}
        aria-invalid={Boolean(error)}
      />
      {error && (
        <p className="mt-1 text-xs" style={{ color: "var(--color-accent-clay)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
