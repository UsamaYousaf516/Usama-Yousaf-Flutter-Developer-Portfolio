import type { Metadata } from "next";
import { ContactApp } from "@/components/apps/contact/ContactApp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Usama Yousaf about a Flutter, mobile product, or creative technology idea.",
};

export default function ContactPage() {
  return <ContactApp />;
}
