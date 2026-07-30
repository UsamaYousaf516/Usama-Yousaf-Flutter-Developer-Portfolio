import type { Metadata } from "next";
import { AboutApp } from "@/components/apps/about/AboutApp";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Usama Yousaf's work — why Flutter, why systems thinking, and what's beyond the code.",
};

export default function AboutPage() {
  return <AboutApp />;
}
