import type { Metadata } from "next";
import { SkillsApp } from "@/components/apps/skills/SkillsApp";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Usama Yousaf's practical capability across product development, architecture, backend, real-time media, performance, and creative technology.",
};

export default function SkillsPage() {
  return <SkillsApp />;
}
