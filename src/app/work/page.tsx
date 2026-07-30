import type { Metadata } from "next";
import { WorkApp } from "@/components/apps/work/WorkApp";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Featured Flutter case studies and a filterable project archive from Usama Yousaf — mobile, Flutter Web, real-time, and creative technology work.",
};

export default function WorkPage() {
  return <WorkApp />;
}
