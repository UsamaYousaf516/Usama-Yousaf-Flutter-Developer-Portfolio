import type { Metadata } from "next";
import { Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingsContext";
import { DesktopFrame } from "@/components/desktop/DesktopFrame";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://usamayousaf.dev"; // TODO: replace with the deployed production domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Usama Yousaf — Flutter Developer & Creative Technologist",
    template: "%s — Usama OS",
  },
  description:
    "Portfolio of Usama Yousaf, a Flutter developer and creative technologist building polished mobile products, responsive web experiences, real-time systems, games, and interactive experiments.",
  openGraph: {
    title: "Usama Yousaf — Flutter Developer & Creative Technologist",
    description:
      "A digital workspace for products, experiments, and ideas — by Flutter developer Usama Yousaf.",
    url: siteUrl,
    siteName: "Usama OS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Yousaf — Flutter Developer & Creative Technologist",
    description: "A digital workspace for products, experiments, and ideas.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <SettingsProvider>
          <DesktopFrame>{children}</DesktopFrame>
        </SettingsProvider>
      </body>
    </html>
  );
}
