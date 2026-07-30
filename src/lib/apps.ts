export type AppId =
  | "profile"
  | "work"
  | "experience"
  | "skills"
  | "playground"
  | "lab"
  | "about"
  | "contact";

export interface AppDef {
  id: AppId;
  name: string;
  href: string;
  shortcut?: string;
  tagline: string;
  windowLabel: string;
  /** Not yet ready for launch — kept out of nav/search but the route stays live. */
  hidden?: boolean;
}

export const apps: AppDef[] = [
  {
    id: "profile",
    name: "Profile",
    href: "/profile",
    shortcut: "1",
    tagline: "Who I am, in system form",
    windowLabel: "PROFILE.APP",
  },
  {
    id: "work",
    name: "Work",
    href: "/work",
    shortcut: "2",
    tagline: "Selected products & case studies",
    windowLabel: "WORK.APP",
  },
  {
    id: "experience",
    name: "Experience",
    href: "/experience",
    shortcut: "3",
    tagline: "Build history & career log",
    windowLabel: "EXPERIENCE.APP",
  },
  {
    id: "skills",
    name: "Skills",
    href: "/skills",
    tagline: "Practical capability, not percentages",
    windowLabel: "SKILLS.APP",
  },
  {
    id: "playground",
    name: "Playground",
    href: "/playground",
    shortcut: "4",
    tagline: "Numbered research experiments",
    windowLabel: "PLAYGROUND.APP",
    hidden: true,
  },
  {
    id: "lab",
    name: "Lab",
    href: "/lab",
    tagline: "Future-facing & in-progress work",
    windowLabel: "LAB.APP",
    hidden: true,
  },
  {
    id: "about",
    name: "About",
    href: "/about",
    tagline: "The story behind the systems",
    windowLabel: "ABOUT.APP",
  },
  {
    id: "contact",
    name: "Contact",
    href: "/contact",
    shortcut: "5",
    tagline: "Start a conversation",
    windowLabel: "CONTACT.APP",
  },
];

export const visibleApps = apps.filter((a) => !a.hidden);

export function getApp(id: AppId) {
  return apps.find((a) => a.id === id);
}
