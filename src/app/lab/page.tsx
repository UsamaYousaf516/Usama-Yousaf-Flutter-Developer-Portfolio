import type { Metadata } from "next";
import { LabApp } from "@/components/apps/lab/LabApp";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Future-facing and in-progress work from Usama Yousaf — concepts, prototypes, and product research, each honestly labeled by status.",
};

export default function LabPage() {
  return <LabApp />;
}
