"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

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
      </div>
    </motion.div>
  );
}
