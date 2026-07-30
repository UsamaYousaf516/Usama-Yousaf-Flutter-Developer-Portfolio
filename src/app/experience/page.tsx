import type { Metadata } from "next";
import { ExperienceApp } from "@/components/apps/experience/ExperienceApp";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A build-log-style career timeline for Usama Yousaf — from Computer Engineering foundations through freelance work to product engineering roles.",
};

export default function ExperiencePage() {
  return <ExperienceApp />;
}
