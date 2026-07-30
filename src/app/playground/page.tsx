import type { Metadata } from "next";
import { PlaygroundApp } from "@/components/apps/playground/PlaygroundApp";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Numbered research experiments from Usama Yousaf — physics, motion, and interaction studies behind the products in Selected Work.",
};

export default function PlaygroundPage() {
  return <PlaygroundApp />;
}
