export interface ExperienceEntry {
  id: string;
  build: string;
  title: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  lessons: string;
  relatedProjectSlugs: string[];
  current?: boolean;
}

export const experienceLog: ExperienceEntry[] = [
  {
    id: "foundation",
    build: "BUILD 01",
    title: "Foundation — Computer Engineering, UET Taxila",
    period: "October 2019 – July 2023",
    summary:
      "Bachelor of Science in Computer Engineering at the University of Engineering and Technology, Taxila — the formal foundation the rest of the build history compiles against. Preceded by Intermediate studies at BISE Rawalpindi (May 2017 – June 2019).",
    responsibilities: [
      "Core computer engineering coursework: data structures, algorithms, systems",
      "First exposure to mobile development and Flutter outside coursework",
    ],
    technologies: ["Dart", "Flutter (early)", "General-purpose programming"],
    achievements: ["Bachelor of Science in Computer Engineering, UET Taxila"],
    lessons:
      "Formal fundamentals gave later Flutter work a structural grounding rather than pattern-matching from tutorials.",
    relatedProjectSlugs: [],
  },
  {
    id: "neusoftix",
    build: "BUILD 02",
    title: "Senior Flutter Developer — Neusoftix",
    period: "March 2025 – August 2026 · Part-time",
    summary:
      "A part-time engagement leading architecture and end-to-end development across a portfolio of client mobile applications, with a focus on reusable service layers and scalable Firebase/Supabase backends. Completed alongside the ongoing InfiniTech role.",
    responsibilities: [
      "Led architecture and end-to-end development of 5+ client mobile applications",
      "Designed and implemented scalable backend systems using Firebase and Supabase, including authentication, real-time data handling, and serverless business logic",
      "Built reusable service layers and modular architecture used across multiple projects",
      "Collaborated with cross-functional teams to define requirements and optimize system design",
    ],
    technologies: ["Flutter", "Firebase", "Supabase", "Serverless functions"],
    achievements: [
      "Led architecture and delivery of 5+ client mobile applications",
      "Reduced development time by ~25–30% across projects through reusable service layers and modular architecture",
    ],
    lessons:
      "Investing in a shared service-layer architecture up front pays for itself as soon as a second or third project reuses it.",
    relatedProjectSlugs: ["restart-fitness", "elite-fitness", "imakler-uae", "gift-guru", "dnf", "admin-systems"],
  },
  {
    id: "infinitech",
    build: "CURRENT BUILD",
    title: "Flutter Developer — InfiniTech",
    period: "August 2023 – Present",
    summary:
      "My primary, ongoing role: built and continue to scale Ludino, a real-time social audio and live-gaming platform, end-to-end — voice rooms, live video, virtual gifting, in-room multiplayer games, and the Flutter Web admin panel behind it — serving high concurrent users with low-latency performance.",
    responsibilities: [
      "Building and scaling Ludino — a real-time social audio & live gaming platform with voice rooms, live video, virtual gifting, and in-room multiplayer games",
      "Integrating and managing 200+ RESTful APIs handling authentication, user systems, and in-app purchases",
      "Engineering low-latency real-time communication using WebSockets for seamless voice interactions and instant event updates",
      "Integrating Agora & ZegoCloud SDKs for high-quality voice and video streaming",
      "Designing and developing a Flutter Web admin panel for moderation, analytics, and system management",
    ],
    technologies: ["Flutter", "Firebase", "WebSockets", "Agora", "ZegoCloud", "REST APIs"],
    achievements: [
      "Integrated and managed 200+ RESTful APIs across authentication, user systems, and in-app purchases",
      "Reduced load times by ~20–25% and improved UI responsiveness through optimized state management",
      "Shipped a Flutter Web admin panel that reduced manual operational effort and improved team efficiency",
    ],
    lessons:
      "Real-time audio and its administrative surface have very different rhythms — designing the data layer to serve both from day one avoided painful rework later.",
    relatedProjectSlugs: ["ludino", "admin-systems"],
    current: true,
  },
];
