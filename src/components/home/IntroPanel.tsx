"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { withBasePath } from "@/lib/basePath";

export function IntroPanel() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeUp}
      className="flex gap-5 rounded-xl border p-6 md:p-8"
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
    >
      <div
        className="hidden h-20 w-20 shrink-0 overflow-hidden rounded-lg border sm:block md:h-24 md:w-24"
        style={{ borderColor: "var(--color-border)" }}
      >
        <Image
          src="/usama-photo.jpg"
          alt="Usama Yousaf"
          width={192}
          height={192}
          className="h-full w-full object-cover object-top grayscale-[15%]"
          priority
        />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
          Workspace / Profile Panel
        </div>
        <h1 className="mt-4 font-serif text-3xl leading-tight md:text-4xl" style={{ color: "var(--color-ink)" }}>
          Usama Yousaf
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-accent-blue)" }}>
          Flutter Developer — Creative Technologist — Product Builder
        </p>
        <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
          Based in Islamabad, Pakistan. Building digital experiences for mobile, web,
          and beyond — products that hold up under real use, not just in a demo.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <a
            href={withBasePath("/usama-yousaf-resume.pdf")}
            download
            className="flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-widest transition-transform hover:-translate-y-px"
            style={{ background: "var(--color-accent-clay)", color: "var(--color-surface)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download résumé
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md border px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
