import type { Metadata } from "next";
import { ProfileApp } from "@/components/apps/profile/ProfileApp";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "Usama Yousaf — Flutter developer and creative technologist based in Pakistan, building responsive, scalable, and visually polished applications.",
};

export default function ProfilePage() {
  return <ProfileApp />;
}
