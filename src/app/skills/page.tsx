import type { Metadata } from "next";
import { SkillsApp } from "@/components/apps/skills/SkillsApp";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Usama Yousaf — Flutter developer skills: Flutter, Dart, Firebase, Supabase, REST APIs, WebSockets, Provider/BLoC/GetX state management, real-time systems, Git & release management, and AI-assisted development.",
};

export default function SkillsPage() {
  return <SkillsApp />;
}
