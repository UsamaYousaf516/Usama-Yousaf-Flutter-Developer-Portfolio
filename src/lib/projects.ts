export type ProjectStatus = "released" | "in-progress" | "prototype" | "archived";

export type ProjectTag =
  | "Mobile"
  | "Flutter Web"
  | "Firebase"
  | "Supabase"
  | "Real-Time"
  | "Games"
  | "UI Systems"
  | "Experiments"
  | "Client Work";

export interface ProjectFeature {
  name: string;
  benefit: string;
  technicalNote: string;
}

export interface Project {
  title: string;
  slug: string;
  year: string;
  status: ProjectStatus;
  isFeatured: boolean;
  shortDescription: string;
  longDescription: string;
  role: string;
  team: string;
  duration: string;
  platforms: string[];
  technologies: string[];
  tags: ProjectTag[];
  challenge: string;
  responsibilities: string[];
  features: ProjectFeature[];
  engineeringDecisions: string[];
  outcomes: string[];
  lessons: {
    learned: string;
    improve: string;
    explore: string;
  };
  images: string[];
  videos: string[];
  demoUrl?: string;
  repositoryUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Ludino",
    slug: "ludino",
    year: "2023–Present",
    status: "released",
    isFeatured: true,
    shortDescription:
      "A social audio & live-gaming platform: live voice rooms, virtual economies, real-time communication, and now in-room multiplayer Ludo, plus a full admin operations layer.",
    longDescription:
      "Ludino (formerly Yaro/Voicely) is a social audio and gaming ecosystem rather than a single voice-chat feature — live rooms with configurable microphone formations, a virtual gift and currency economy, profile and store systems, entrance effects, themes, and a large Flutter Web admin portal for moderation and operations. It recently expanded from voice-only social audio into hybrid social gaming: users can now play a real-time multiplayer Ludo game with friends without ever leaving the voice room, so a table of players can talk and play at the same time.",
    role: "Flutter Developer, InfiniTech — mobile app, Flutter Web admin portal, real-time systems",
    team: "Cross-functional product team (backend, design, QA); Flutter work shared across a small mobile engineering group",
    duration: "August 2023 – Present",
    platforms: ["iOS", "Android", "Flutter Web (admin)"],
    technologies: [
      "Flutter",
      "Firebase",
      "Agora / ZegoCloud",
      "WebSockets",
      "REST APIs",
      "Provider",
      "GetX",
    ],
    tags: ["Mobile", "Flutter Web", "Firebase", "Real-Time", "Games", "Client Work"],
    challenge:
      "Live social audio has to feel instantaneous — mic state, gifts, and room presence all need to reconcile in real time across many concurrent participants, while the same underlying data also has to surface in an entirely separate, data-dense admin surface for moderation and operations. Adding a real-time multiplayer game on top raised the bar further: turn-based Ludo game state had to stay perfectly in sync for every player at the table without interrupting or adding latency to the live voice channel already running in that same room.",
    responsibilities: [
      "Implemented Flutter UI for live voice rooms, including multiple microphone-seat formations",
      "Built real-time room state handling (presence, mic status, gifting) over WebSockets and REST",
      "Implemented real-time multiplayer Ludo gameplay inside voice rooms, layered on the existing room infrastructure",
      "Integrated and managed 200+ RESTful APIs handling authentication, user systems, and in-app purchases",
      "Integrated Agora & ZegoCloud SDKs for high-quality, low-latency voice and video streaming",
      "Developed Flutter Web admin portal screens for moderation, analytics, and system management",
      "Optimized state management and data handling to improve performance and memory efficiency",
    ],
    features: [
      {
        name: "Live voice rooms",
        benefit: "Users join and switch between microphone formations without friction",
        technicalNote: "Room state synced over WebSockets with optimistic UI updates",
      },
      {
        name: "In-room multiplayer Ludo",
        benefit: "Friends can play a full game of Ludo together while still talking in the same voice room",
        technicalNote: "Turn-based game state synced over a dedicated WebSocket channel, kept independent of the audio pipeline so gameplay never introduces voice latency",
      },
      {
        name: "Virtual gifts & currency",
        benefit: "Lightweight, celebratory economy that rewards participation",
        technicalNote: "Animated gift triggers layered over the live room view without blocking audio",
      },
      {
        name: "Admin operations portal",
        benefit: "Operations team can moderate rooms, users, and content at scale",
        technicalNote: "Flutter Web surface reusing the same data layer as the mobile client",
      },
    ],
    engineeringDecisions: [
      "Chose Provider/GetX per-feature rather than a single global store, so real-time room state stayed isolated from the rest of the app's state tree",
      "Kept the Ludo game's turn-based state machine on its own WebSocket channel, separate from the voice/presence channel, so a slow game-state update could never stall or desync live audio",
      "Built shared, reusable components between the mobile app and the Flutter Web admin portal to avoid duplicating UI logic across platforms",
      "Used pagination and local caching for feed-style content to keep infinite scroll smooth under real-world network conditions",
    ],
    outcomes: [
      "Expanded the platform from voice-only social audio into hybrid social gaming with a working in-room multiplayer Ludo game",
      "Integrated and managed 200+ RESTful APIs across authentication, user systems, and in-app purchases",
      "Reduced load times by ~20–25% and improved UI responsiveness through optimized state management",
      "Shipped a Flutter Web admin panel that reduced manual operational effort and improved team efficiency",
    ],
    lessons: {
      learned:
        "Real-time UI and administrative UI have very different rhythms — designing the data layer to serve both from day one avoided painful rework later.",
      improve:
        "Would introduce stronger contract testing between the real-time backend and the client earlier in the project.",
      explore:
        "Interested in adding further in-room games beyond Ludo, and in exploring more predictive client-side reconciliation for even lower perceived latency in live rooms.",
    },
    images: [],
    videos: [],
  },
  {
    title: "Restart Fitness — Level-Up Training Platform",
    slug: "restart-fitness",
    year: "2025",
    status: "released",
    isFeatured: true,
    shortDescription:
      "A ten-level fitness journey built around accountability: 30-day workout and meal plans, video-submission level tests, and weekly community challenges.",
    longDescription:
      "Restart Fitness gamifies adherence instead of handing users a static program. Members progress through ten levels, each with an assigned 30-day workout and meal plan; advancing requires a video-submitted level test that an admin reviews and approves. A parallel weekly-challenge track (e.g. 100 pushups, 100 squats) has members submit video proof, with admins crowning top performers — all orchestrated through a companion React web admin panel.",
    role: "Senior Flutter Developer, Neusoftix — mobile app architecture, UI implementation, backend integration",
    team: "Client engagement via Neusoftix, alongside a React web admin panel built in parallel",
    duration: "One of 5+ client apps delivered during the Neusoftix engagement (March 2025 – present)",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "React (admin panel)", "REST API", "Video upload"],
    tags: ["Mobile", "Client Work"],
    challenge:
      "Static fitness programs don't scale accountability — users drop off without structure or stakes. The system needed clear, gamified progression (levels, admin-verified tests, community challenges) while keeping the admin side — assigning content, reviewing video submissions, picking challenge winners — fast enough for a small team to run.",
    responsibilities: [
      "Implemented the ten-level journey: new users start at level 1 with a structured 30-day workout and meal plan",
      "Built video-based level-test submission flow, with admin approval gating access to the next level",
      "Built the weekly challenge flow — video proof submission for challenges like 100 pushups or 100 squats",
      "Integrated with the React admin panel's data layer for assignments, reviews, and challenge winners",
    ],
    features: [
      {
        name: "Ten-level journey",
        benefit: "Clear, gamified progression instead of a static one-size-fits-all program",
        technicalNote: "Each level carries its own assigned 30-day workout and meal plan",
      },
      {
        name: "Video-submission level tests",
        benefit: "Advancing to the next level feels earned and is verified, not self-reported",
        technicalNote: "Video upload flow feeds an admin review queue that approves or rejects the test",
      },
      {
        name: "Weekly challenges",
        benefit: "Community competition (e.g. 100 pushups, 100 squats) keeps engagement high between levels",
        technicalNote: "Video-proof submissions reviewed by admins, who select the top 3 winners each week",
      },
    ],
    engineeringDecisions: [
      "Modeled levels, plans, and tests as data reviewed through the React admin panel, so assigning new content doesn't require an app release",
      "Built the video submission flow to upload and queue for review without blocking the rest of the app on upload completion",
      "Kept the mobile app and the React admin panel talking to the same REST API so review actions reflect in the app immediately",
    ],
    outcomes: [
      "Delivered a ten-level accountability system in place of a static workout program",
      "Shipped a working video-submission and admin-review loop for both level tests and weekly challenges",
      "Gave the operating team a React admin panel to assign content and pick challenge winners without engineering involvement",
    ],
    lessons: {
      learned:
        "Gamifying adherence through verified proof (video + admin review) drove far more structure than a self-tracked checklist would have.",
      improve:
        "Would add in-app video compression before upload to make the submission flow more reliable on weaker connections.",
      explore:
        "Interested in exploring automated first-pass video review (form-checking) to reduce the admin queue before human approval.",
    },
    images: ["/projects/restart.png"],
    videos: [],
  },
  {
    title: "Elite Fitness App — Gym Member Experience",
    slug: "elite-fitness",
    year: "2025",
    status: "released",
    isFeatured: false,
    shortDescription:
      "A membership-only gym app tying paid access to structured training and a full nutrition module, in one branded Flutter product.",
    longDescription:
      "Elite Fitness replaces a gym's ad-hoc spreadsheets and generic fitness apps with one branded product: members build and manage workouts from a large exercise library, track history with charts, and use a nutrition module for daily intake, recipes, and meal ideas matched to their preferences — all gated behind verified gym membership.",
    role: "Senior Flutter Developer, Neusoftix — client app implementation",
    team: "Client engagement via Neusoftix",
    duration: "One of 5+ client apps delivered during the Neusoftix engagement (March 2025 – present)",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "Supabase", "FatSecret API", "ExerciseDB (RapidAPI)", "Gymmater API", "Gatekeeper API", "REST APIs"],
    tags: ["Mobile", "Supabase", "Client Work"],
    challenge:
      "The gym needed one product that tied paid membership to both training and nutrition, replacing spreadsheets and disconnected generic apps with real access control, structured workouts, and credible nutrition data — in a single Flutter experience.",
    responsibilities: [
      "Implemented workout CRUD against a large exercise catalog via the ExerciseDB API (RapidAPI)",
      "Built workout history, analytics, and progress charts",
      "Integrated the FatSecret API for nutrition tracking, recipes, and meal inspiration",
      "Integrated Gymmater and Gatekeeper APIs for member eligibility and gym access flows",
      "Built the Supabase-backed data layer for a scalable, real-time-friendly backend",
    ],
    features: [
      {
        name: "Workout library & tracking",
        benefit: "Members build real workouts from a large catalog instead of a fixed template",
        technicalNote: "Exercise catalog sourced live from ExerciseDB via RapidAPI",
      },
      {
        name: "Nutrition module",
        benefit: "Daily intake, recipes, and meal ideas matched to member preferences",
        technicalNote: "FatSecret API backs nutrition data and recipe search",
      },
      {
        name: "Membership-gated access",
        benefit: "Only paying, verified members reach the training and nutrition tools",
        technicalNote: "Gymmater and Gatekeeper APIs handle member eligibility and access control",
      },
    ],
    engineeringDecisions: [
      "Chose Supabase for a backend that stayed close to real-time without the overhead of building custom sync infrastructure",
      "Kept each third-party integration (ExerciseDB, FatSecret, Gymmater, Gatekeeper) behind its own service boundary so any one provider could be swapped without touching the others",
    ],
    outcomes: [
      "Delivered a single branded app tying paid membership to both training and nutrition",
      "Replaced spreadsheet-based member and workout tracking with a structured, access-controlled Flutter product",
      "Integrated four distinct third-party APIs into one coherent member experience",
    ],
    lessons: {
      learned:
        "Gating a consumer app behind a membership-eligibility API (Gymmater/Gatekeeper) works best when that check happens as early and cheaply as possible in the app's navigation flow.",
      improve:
        "Would introduce local caching for the exercise catalog sooner — ExerciseDB calls on every workout-builder open added avoidable latency.",
      explore:
        "Interested in exploring offline workout logging that syncs once connectivity returns.",
    },
    images: ["/projects/elite.png"],
    videos: [],
  },
  {
    title: "Imakler UAE — Multi-Category Listings & Chat",
    slug: "imakler-uae",
    year: "2025",
    status: "released",
    isFeatured: false,
    shortDescription:
      "A UAE listings marketplace for property, jobs, and vehicles, with in-app chat and a credit-based boost economy for sellers.",
    longDescription:
      "Imakler combines discovery, direct buyer–seller messaging, and a transparent monetization model. Sellers purchase credits with real money and spend them on bumps, highlights, and featured placements, so listings surface fairly while the business model stays legible — instead of the opaque paid-promotion patterns common in generic classifieds apps.",
    role: "Senior Flutter Developer, Neusoftix — client app implementation",
    team: "Client engagement via Neusoftix",
    duration: "One of 5+ client apps delivered during the Neusoftix engagement (March 2025 – present)",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "REST APIs", "In-app chat", "In-app purchases"],
    tags: ["Mobile", "Client Work"],
    challenge:
      "Generic classifieds apps give sellers no legible way to improve visibility — promotion, if it exists at all, tends to be opaque. Imakler needed multi-category discovery (property, jobs, vehicles) plus a credit economy sellers could understand and trust, without turning the listings feed into pay-to-win chaos.",
    responsibilities: [
      "Implemented multi-category listing browsing and search (real estate, jobs, vehicles, and more)",
      "Built in-app chat between buyers and sellers",
      "Implemented the credit wallet: purchasing credits with real money and spending them on bumps, highlights, and featured packages",
      "Built listing-rank logic so bumped and featured listings surfaced predictably",
    ],
    features: [
      {
        name: "Multi-category listings",
        benefit: "One app covers property, jobs, and vehicles instead of three separate ones",
        technicalNote: "Shared listing model parameterized by category-specific fields",
      },
      {
        name: "In-app chat",
        benefit: "Buyers reach sellers directly without leaving the app",
        technicalNote: "Chat threads scoped per listing to keep context attached to the conversation",
      },
      {
        name: "Credit wallet & boosts",
        benefit: "Sellers understand exactly what a bump, highlight, or feature costs and does",
        technicalNote: "In-app purchase flow tops up a credit balance spent on distinct boost types",
      },
    ],
    engineeringDecisions: [
      "Modeled bumps, highlights, and featured placement as distinct, composable boost types rather than a single opaque \"promote\" button, so pricing and effect stayed legible to sellers",
      "Kept category-specific listing fields data-driven so new categories don't require new screens",
    ],
    outcomes: [
      "Delivered a working multi-category marketplace with in-app chat and a real monetization loop",
      "Shipped a credit-based boost economy that gives sellers a transparent way to improve visibility",
    ],
    lessons: {
      learned:
        "A transparent, itemized boost economy (bump vs. highlight vs. feature) builds more seller trust than a single vague \"promote listing\" option.",
      improve:
        "Would add server-side rank simulation so sellers could preview the effect of a boost before purchasing it.",
      explore:
        "Interested in exploring map-based discovery as a primary browsing mode alongside the category feed.",
    },
    images: ["/projects/imakler.png"],
    videos: [],
  },
  {
    title: "Gift Guru — Birthdays, Reminders & Gift Ideas",
    slug: "gift-guru",
    year: "2025",
    status: "released",
    isFeatured: false,
    shortDescription:
      "Keeps the people and dates that matter in one place, then surfaces relevant gift ideas as birthdays approach.",
    longDescription:
      "Gift guilt usually comes from fragmentation — birthdays scattered across calendars and notes, gift ideas nowhere in particular. Gift Guru keeps a relations directory with stored birthdays, nudges users with reminders as dates approach, and connects that timing directly to gift discovery and purchase.",
    role: "Senior Flutter Developer, Neusoftix — client app implementation",
    team: "Client engagement via Neusoftix",
    duration: "One of 5+ client apps delivered during the Neusoftix engagement (March 2025 – present)",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "REST APIs", "Local notifications"],
    tags: ["Mobile", "Client Work"],
    challenge:
      "Gift shopping is fragmented across calendars, notes, and random stores, and reminders arrive too late to act on thoughtfully. The app needed to keep relations and dates in one place and connect that context directly to gift inspiration and purchase, not just a bare calendar alert.",
    responsibilities: [
      "Built the relations directory — adding people with roles and stored birthdays",
      "Implemented contextual gift suggestions surfaced as birthdays approach",
      "Built the discovery-to-purchase flow for gift ideas",
      "Implemented birthday reminder notifications",
    ],
    features: [
      {
        name: "Relations directory",
        benefit: "Every important birthday lives in one place instead of scattered across apps",
        technicalNote: "Relations stored with role metadata (family, friend, etc.) alongside birthdays",
      },
      {
        name: "Contextual gift suggestions",
        benefit: "Gift ideas appear exactly when they're useful — as a birthday approaches",
        technicalNote: "Suggestion surfacing keyed off days-until-birthday rather than a static catalog browse",
      },
      {
        name: "Reminders",
        benefit: "Users get nudged with enough lead time to actually act",
        technicalNote: "Local notifications scheduled per stored birthday",
      },
    ],
    engineeringDecisions: [
      "Tied gift suggestions directly to reminder timing rather than treating discovery and reminders as separate features, so the app surfaces ideas when they're actually actionable",
    ],
    outcomes: [
      "Delivered a single app connecting relationship data, reminders, and gift discovery end to end",
      "Replaced fragmented calendar-plus-notes gift tracking with one contextual flow",
    ],
    lessons: {
      learned:
        "Reminders are far more useful paired with an immediate next action (browse gifts) than as a bare notification.",
      improve:
        "Would add shared/family relation lists so gift ideas for a shared contact don't get duplicated across users.",
      explore:
        "Interested in exploring group-gifting flows for shared purchases on a single occasion.",
    },
    images: ["/projects/giftguru.png"],
    videos: [],
  },
  {
    title: "DNF — Store Maintenance & Repair Marketplace",
    slug: "dnf",
    year: "2025",
    status: "released",
    isFeatured: false,
    shortDescription:
      "A three-role marketplace connecting store users, vendors, and technicians for hassle-free repair requests, from estimate to completion.",
    longDescription:
      "DNF unifies a process that otherwise splits across phone calls, spreadsheets, and guesswork over job status. A store user submits a repair request, receives a vendor estimate, approves it, and gets a skilled technician assigned — with clear status visibility from ticket raised through completion.",
    role: "Senior Flutter Developer, Neusoftix — client app implementation",
    team: "Client engagement via Neusoftix",
    duration: "One of 5+ client apps delivered during the Neusoftix engagement (March 2025 – present)",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "Firebase", "REST APIs"],
    tags: ["Mobile", "Firebase", "Client Work"],
    challenge:
      "Repair coordination for stores typically splits across phone calls, spreadsheets, and guesswork on job status. DNF needed to unify three distinct roles — store users, vendors, and technicians — into one flow with a shared, trustworthy view of where a job stands.",
    responsibilities: [
      "Implemented three tailored role flows: store users, vendors, and technicians",
      "Built service-category booking with rich details and photo uploads",
      "Built the estimate-approval workflow gating work scheduling and dispatch",
      "Built My Bookings with filters and a step-by-step status track view",
      "Implemented store profile, admin flows, and Firebase-backed authentication",
    ],
    features: [
      {
        name: "Three-role marketplace",
        benefit: "Store users, vendors, and technicians each get a flow suited to their job",
        technicalNote: "Role-based navigation and permissions from a shared Firebase auth layer",
      },
      {
        name: "Estimate approval workflow",
        benefit: "Store users approve costs before work is scheduled — no surprise billing",
        technicalNote: "Booking state machine gates dispatch behind an explicit approval step",
      },
      {
        name: "Booking status tracking",
        benefit: "Every party can see exactly where a job stands, ticket to completion",
        technicalNote: "Step-by-step track view driven by a shared booking-status enum across roles",
      },
    ],
    engineeringDecisions: [
      "Modeled booking status as a single shared state machine consumed differently by each of the three role UIs, so store users, vendors, and technicians never see conflicting job status",
      "Used Firebase for auth and store/vendor/technician profile data given the multi-role access-control needs",
    ],
    outcomes: [
      "Delivered a three-role marketplace replacing phone-and-spreadsheet repair coordination",
      "Shipped an estimate-approval flow that gives store users cost control before dispatch",
      "Gave every role a consistent, trustworthy view of booking status end to end",
    ],
    lessons: {
      learned:
        "A single shared status model across three different role UIs prevented the kind of state disagreements that plague multi-sided marketplaces.",
      improve:
        "Would add in-app messaging between store users and assigned technicians to cut down on off-app phone coordination that still crept back in.",
      explore:
        "Interested in exploring automated vendor-matching based on service category and location.",
    },
    images: ["/projects/dnf.png"],
    videos: [],
  },
  {
    title: "Pixel Clash",
    slug: "pixel-clash",
    year: "2025",
    status: "prototype",
    isFeatured: true,
    shortDescription:
      "An original battle-simulation system where algorithmic characters compete in visually engaging territory battles, built for short-form video.",
    longDescription:
      "Pixel Clash is a self-directed creative technology experiment: a roster of characters with distinct behaviors compete across arenas in 1v1 and free-for-all modes, with dynamic events, lead changes, and comebacks designed to be watchable without any instructions.",
    role: "Solo creative technologist — simulation design, Flutter/Flame implementation, visual direction",
    team: "Solo project",
    duration: "Ongoing experiment",
    platforms: ["Flutter (Web + mobile build)"],
    technologies: ["Flutter", "Flame", "Forge2D", "Custom simulation logic"],
    tags: ["Games", "Experiments"],
    challenge:
      "The goal was a simulation that's entertaining to simply watch — legible territory battles with visible momentum shifts — without requiring any player instructions, while keeping performance smooth enough for continuous short-form video capture.",
    responsibilities: [
      "Designed character behavior systems and matchup logic",
      "Implemented 1v1 and free-for-all battle modes",
      "Built arena variations and dynamic in-battle events (lead changes, comebacks)",
      "Implemented the browser-based interactive simulation used in this case study",
    ],
    features: [
      {
        name: "Character behavior systems",
        benefit: "Each character reads as having a distinct strategy, not random movement",
        technicalNote: "Behavior driven by simple weighted decision rules rather than heavy AI, tuned for legibility",
      },
      {
        name: "Territory battles",
        benefit: "Visible momentum makes outcomes feel earned rather than arbitrary",
        technicalNote: "Territory ownership recalculated per tick and rendered with lightweight canvas updates",
      },
      {
        name: "Dynamic events",
        benefit: "Comebacks and lead changes keep short clips watchable end-to-end",
        technicalNote: "Event system layered on top of the core simulation loop, triggered by territory thresholds",
      },
    ],
    engineeringDecisions: [
      "Used Flame/Forge2D for the simulation loop to keep physics and rendering in one consistent Flutter-native pipeline",
      "Kept character behavior rule-based rather than ML-driven, prioritizing predictable, tunable, watchable outcomes over technical novelty",
      "Built the in-browser demo as a fully simulated, self-contained experience with no backend dependency",
    ],
    outcomes: [
      "Delivered a working, watchable simulation with multiple characters and arenas",
      "Produced a lightweight in-browser demo suitable for embedding in a portfolio case study",
      "Validated the core loop as a foundation for future short-form content experiments",
    ],
    lessons: {
      learned:
        "Legibility mattered more than behavioral complexity — simple, readable rules produced more watchable outcomes than sophisticated ones.",
      improve:
        "Would build a proper replay/recording pipeline earlier instead of manually capturing clips.",
      explore:
        "Interested in exploring automated content-generation around the simulation output.",
    },
    images: [],
    videos: [],
  },
  {
    title: "Admin Systems / Product Engineering",
    slug: "admin-systems",
    year: "2023–Present",
    status: "released",
    isFeatured: true,
    shortDescription:
      "The less visible but high-value side of product engineering: large admin dashboards, data tables, moderation tools, and reusable UI systems.",
    longDescription:
      "Across multiple projects, a recurring responsibility has been building the operational surface behind the consumer product — large navigation systems, data-dense tables, search and filtering, user management, and moderation workflows, all in responsive Flutter Web.",
    role: "Flutter Developer, InfiniTech & Neusoftix — admin/dashboard architecture and implementation",
    team: "Shared with backend and operations stakeholders across projects",
    duration: "Ongoing, across InfiniTech and Neusoftix engagements (2023–present)",
    platforms: ["Flutter Web"],
    technologies: ["Flutter Web", "Firebase", "REST APIs", "Provider", "GetX"],
    tags: ["Flutter Web", "UI Systems", "Client Work"],
    challenge:
      "Admin surfaces carry the operational weight of a product — large data tables, nested navigation, and business-specific workflows — but rarely get the design attention consumer screens do. The difficulty is handling that complexity in Flutter Web responsively without every screen becoming a one-off.",
    responsibilities: [
      "Architected reusable table, filter, and navigation components used across multiple admin screens",
      "Built search, filtering, and pagination for large data sets",
      "Implemented user-management and moderation workflows",
      "Ensured responsive behavior across desktop and tablet admin usage",
    ],
    features: [
      {
        name: "Reusable data tables",
        benefit: "New admin screens compose from shared components instead of being rebuilt each time",
        technicalNote: "Table, filter, and pagination logic abstracted into shared widgets across projects",
      },
      {
        name: "Navigation systems",
        benefit: "Large admin surfaces stay navigable as the number of screens grows",
        technicalNote: "Nested, responsive navigation structure built for Flutter Web specifically",
      },
    ],
    engineeringDecisions: [
      "Standardized on a shared component library for tables and filters across admin screens to cut down repeated implementation",
      "Prioritized responsive layout for admin surfaces even though usage skewed toward desktop, since tablet use came up in practice",
    ],
    outcomes: [
      "Shipped a Flutter Web admin panel (InfiniTech) that reduced manual operational effort and improved team efficiency",
      "Built reusable service layers that reduced development time by ~25–30% across multiple Neusoftix projects",
      "Improved usability of operational workflows across device sizes",
    ],
    lessons: {
      learned:
        "Investing in shared admin components early pays for itself quickly once a product has more than a handful of operational screens.",
      improve:
        "Would formalize the shared component library as an internal package sooner rather than copying it project to project.",
      explore:
        "Interested in exploring a more general-purpose admin/dashboard toolkit for Flutter Web.",
    },
    images: [],
    videos: [],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.isFeatured);
}
