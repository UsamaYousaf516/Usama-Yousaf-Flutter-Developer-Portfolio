export interface Skill {
  name: string;
  practicalNote: string;
  technicalExample: string;
  relatedProjectSlugs: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "product-development",
    name: "Product Development",
    skills: [
      {
        name: "Flutter",
        practicalNote: "Primary framework across every shipped project — mobile, web, and admin surfaces alike.",
        technicalExample: "One widget tree, three targets: the Ludino mobile app and its Flutter Web admin portal share component patterns.",
        relatedProjectSlugs: ["ludino", "restart-fitness", "pixel-clash", "admin-systems"],
      },
      {
        name: "Dart",
        practicalNote: "Language fundamentals underneath every Flutter build, including the simulation logic in Pixel Clash.",
        technicalExample: "Used Dart isolates-free, tick-based update loops for the Pixel Clash battle simulation.",
        relatedProjectSlugs: ["pixel-clash"],
      },
      {
        name: "Mobile applications",
        practicalNote: "Shipped iOS/Android apps for social audio and fitness products.",
        technicalExample: "Live-room mic formations and guided workout sessions both required careful mobile-specific state handling.",
        relatedProjectSlugs: ["ludino", "restart-fitness"],
      },
      {
        name: "Flutter Web",
        practicalNote: "Built large, data-dense admin portals as Flutter Web rather than a separate web stack.",
        technicalExample: "Reused mobile-app design tokens and components inside the Ludino admin portal instead of duplicating a UI library.",
        relatedProjectSlugs: ["ludino", "admin-systems"],
      },
      {
        name: "Desktop applications",
        practicalNote: "Flutter's multi-platform target has been exercised for desktop-class admin usage patterns.",
        technicalExample: "Responsive breakpoints tuned for wide admin layouts used on desktop browsers.",
        relatedProjectSlugs: ["admin-systems"],
      },
      {
        name: "Responsive interfaces",
        practicalNote: "Every admin and product surface has had to hold up across phone, tablet, and desktop widths.",
        technicalExample: "Layout builders and breakpoint-driven grids instead of fixed pixel layouts across admin screens.",
        relatedProjectSlugs: ["admin-systems", "restart-fitness"],
      },
      {
        name: "Component systems",
        practicalNote: "Shared table, filter, and navigation components cut repeated implementation across admin screens.",
        technicalExample: "One reusable data-table widget powering moderation, user-management, and reporting screens.",
        relatedProjectSlugs: ["admin-systems", "ludino"],
      },
    ],
  },
  {
    id: "architecture-state",
    name: "Architecture & State",
    skills: [
      {
        name: "Provider",
        practicalNote: "Default choice for scoping state to a feature rather than a single global store.",
        technicalExample: "Room state in Ludino kept in its own Provider scope, isolated from the rest of the app tree.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "BLoC",
        practicalNote: "Reached for on projects at Neusoftix where a stricter event-driven state boundary suited the team's conventions better than Provider.",
        technicalExample: "Workout-session flow modeled as discrete events and states rather than direct mutation, making phase transitions easier to test in isolation.",
        relatedProjectSlugs: ["restart-fitness"],
      },
      {
        name: "GetX",
        practicalNote: "Used where lighter-weight reactive state and navigation helpers fit the feature better.",
        technicalExample: "Selected admin modules used GetX controllers for simpler screen-local state.",
        relatedProjectSlugs: ["ludino", "admin-systems"],
      },
      {
        name: "ChangeNotifier",
        practicalNote: "Underlying primitive for most Provider-based feature state.",
        technicalExample: "Workout-session state modeled as a ChangeNotifier driving phase transitions.",
        relatedProjectSlugs: ["restart-fitness"],
      },
      {
        name: "ValueNotifier",
        practicalNote: "Reached for narrow, single-value UI state instead of a full ChangeNotifier when that's all a widget needs.",
        technicalExample: "Simple toggle and selection states in admin filters kept as ValueNotifiers to avoid over-scoping rebuilds.",
        relatedProjectSlugs: ["admin-systems"],
      },
      {
        name: "Clean architecture principles",
        practicalNote: "Layered data/domain/presentation boundaries used to keep real-time and admin logic separable.",
        technicalExample: "Real-time room data and admin read models built on the same domain layer, different presentation layers.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Reusable feature structure",
        practicalNote: "Structuring levels and plans as data rather than screens so new content doesn't require new UI code.",
        technicalExample: "Restart Fitness's ten levels generate weekly plans from data rather than hardcoded screens per level.",
        relatedProjectSlugs: ["restart-fitness"],
      },
      {
        name: "Navigation systems",
        practicalNote: "Built nested, responsive navigation for admin surfaces that grow past a handful of screens.",
        technicalExample: "A single navigation shell adapts between a sidebar (desktop) and drawer (tablet) for the same route tree.",
        relatedProjectSlugs: ["admin-systems"],
      },
    ],
  },
  {
    id: "backend-data",
    name: "Backend & Data",
    skills: [
      {
        name: "Firebase Authentication",
        practicalNote: "Auth layer for both consumer apps and admin portals.",
        technicalExample: "Role-aware auth gating admin routes separately from consumer-facing routes in the same Firebase project.",
        relatedProjectSlugs: ["ludino", "restart-fitness"],
      },
      {
        name: "Firestore",
        practicalNote: "Primary data store for profile, content, and progress data across projects.",
        technicalExample: "Structured Firestore collections to support both real-time room reads and paginated admin queries.",
        relatedProjectSlugs: ["ludino", "restart-fitness"],
      },
      {
        name: "Firebase Storage",
        practicalNote: "Media storage for profile assets, gifts, and content.",
        technicalExample: "Gift and theme assets served from Storage with cache-friendly paths.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Firebase Cloud Messaging",
        practicalNote: "Push notifications for engagement-relevant events.",
        technicalExample: "Room activity and workout reminders delivered through FCM.",
        relatedProjectSlugs: ["ludino", "restart-fitness"],
      },
      {
        name: "Cloud Functions",
        practicalNote: "Server-side logic for operations that shouldn't live on the client.",
        technicalExample: "Gift/currency transactions validated server-side via Cloud Functions rather than trusting client writes.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Supabase",
        practicalNote: "Used as an alternative/complementary backend where Postgres-backed data fit better.",
        technicalExample: "Structured fitness-plan and exercise data modeled relationally in Supabase.",
        relatedProjectSlugs: ["restart-fitness"],
      },
      {
        name: "REST APIs",
        practicalNote: "Standard integration point across every project for non-real-time data.",
        technicalExample: "Paginated REST endpoints backing infinite-scroll content feeds.",
        relatedProjectSlugs: ["ludino", "restart-fitness", "admin-systems"],
      },
      {
        name: "WebSockets",
        practicalNote: "Backbone of real-time presence, mic state, and gifting in live rooms.",
        technicalExample: "Room state reconciled optimistically on the client, corrected against WebSocket events from the server.",
        relatedProjectSlugs: ["ludino"],
      },
    ],
  },
  {
    id: "media-realtime",
    name: "Media & Real-Time",
    skills: [
      {
        name: "Agora",
        practicalNote: "Real-time audio SDK integration for live voice rooms.",
        technicalExample: "Mic-seat state kept in sync between Agora's audio channel and the app's own room-state layer.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "ZegoCloud",
        practicalNote: "Alternative real-time audio provider evaluated and integrated alongside Agora.",
        technicalExample: "Abstracted the audio-SDK layer so the room UI didn't need to know which provider was active.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Real-time voice experiences",
        practicalNote: "Designing UI and state around audio that has to feel instantaneous, not just eventually consistent.",
        technicalExample: "Optimistic mic-state UI updates before server confirmation, with rollback on conflict.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Live interaction systems",
        practicalNote: "Gifting, entrance effects, and room presence — all layered live UI on top of a real-time core.",
        technicalExample: "Gift animations triggered from WebSocket events without blocking the audio pipeline.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Notifications",
        practicalNote: "Push and in-app notification design for engagement-relevant moments.",
        technicalExample: "Combined FCM push with in-app banners for room invites and workout reminders.",
        relatedProjectSlugs: ["ludino", "restart-fitness"],
      },
    ],
  },
  {
    id: "performance",
    name: "Performance",
    skills: [
      {
        name: "Pagination",
        practicalNote: "Standard approach for large lists — content feeds, admin tables, user lists.",
        technicalExample: "Cursor-based pagination on Firestore and REST endpoints to avoid large offset queries.",
        relatedProjectSlugs: ["ludino", "admin-systems"],
      },
      {
        name: "Caching",
        practicalNote: "Local caching to keep infinite-scroll and admin tables smooth under real-world network conditions.",
        technicalExample: "In-memory + disk cache layer for feed content, avoiding refetching on back-navigation.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Infinite scrolling",
        practicalNote: "Feed-style content across the social platform relies on smooth infinite scroll.",
        technicalExample: "Prefetch-ahead scroll listeners paired with pagination to avoid visible loading gaps.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Memory optimization",
        practicalNote: "Attention to widget rebuild scope and image memory usage in media-heavy screens.",
        technicalExample: "Scoped ValueNotifiers and const constructors to avoid unnecessary subtree rebuilds in list-heavy screens.",
        relatedProjectSlugs: ["ludino", "admin-systems"],
      },
      {
        name: "Error handling",
        practicalNote: "Deliberate error and empty states rather than silent failures, especially in the admin portal.",
        technicalExample: "Typed result/error states surfaced as specific, actionable UI rather than generic error banners.",
        relatedProjectSlugs: ["admin-systems", "restart-fitness"],
      },
      {
        name: "Loading-state design",
        practicalNote: "Explicit loading states designed alongside the success state, not bolted on after.",
        technicalExample: "Skeleton and inline loading indicators scoped to the specific section being fetched, not the whole screen.",
        relatedProjectSlugs: ["restart-fitness", "admin-systems"],
      },
    ],
  },
  {
    id: "creative-technology",
    name: "Creative Technology",
    skills: [
      {
        name: "Flame",
        practicalNote: "Game engine used for the Pixel Clash battle simulation.",
        technicalExample: "Flame's component/game-loop model driving the tick-based territory simulation.",
        relatedProjectSlugs: ["pixel-clash"],
      },
      {
        name: "Forge2D",
        practicalNote: "Physics layer underneath Pixel Clash's movement and collision behavior.",
        technicalExample: "Lightweight 2D physics bodies for character movement without a full custom physics engine.",
        relatedProjectSlugs: ["pixel-clash"],
      },
      {
        name: "Game prototypes",
        practicalNote: "Self-directed exploration of watchable, rule-based simulations for short-form content.",
        technicalExample: "Weighted decision rules tuned for legibility over behavioral complexity in Pixel Clash's characters.",
        relatedProjectSlugs: ["pixel-clash"],
      },
      {
        name: "Real-time multiplayer game logic",
        practicalNote: "Shipped a production turn-based multiplayer Ludo game running live inside Ludino's voice rooms.",
        technicalExample: "Ludo turn state synced over its own WebSocket channel, kept fully independent of the room's audio pipeline.",
        relatedProjectSlugs: ["ludino"],
      },
      {
        name: "Interaction design",
        practicalNote: "Considering motion, feedback, and hierarchy as part of the engineering work, not an afterthought.",
        technicalExample: "Window-open and hover motion in this portfolio itself, tuned to standard easing/duration tokens.",
        relatedProjectSlugs: [],
      },
      {
        name: "Motion systems",
        practicalNote: "Consistent timing and easing tokens applied across an entire product surface.",
        technicalExample: "A shared motion-token file drives every transition in this portfolio's window system.",
        relatedProjectSlugs: [],
      },
      {
        name: "AI-assisted product exploration",
        practicalNote: "Exploring how AI-assisted workflows fit into product and content development.",
        technicalExample: "Early-stage exploration — see the Lab app for in-progress work in this area.",
        relatedProjectSlugs: [],
      },
    ],
  },
];
