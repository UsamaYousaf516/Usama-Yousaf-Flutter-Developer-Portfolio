export type LabStatus = "concept" | "in-progress" | "prototype" | "released" | "archived";

export type LabCategory =
  | "AI-assisted product systems"
  | "Digital-product experiments"
  | "Game-development concepts"
  | "Automation tools"
  | "UI-generation workflows"
  | "Creative coding"
  | "Flutter package ideas"
  | "Product research";

export interface LabItem {
  id: string;
  title: string;
  category: LabCategory;
  status: LabStatus;
  description: string;
  relatedProjectSlug?: string;
}

export const labItems: LabItem[] = [
  {
    id: "admin-component-package",
    title: "Shared Flutter Admin Component Package",
    category: "Flutter package ideas",
    status: "concept",
    description:
      "Formalizing the reusable table, filter, and navigation components built separately across Ludino and other admin surfaces into one standalone, versioned internal package instead of copying code project to project.",
    relatedProjectSlug: "admin-systems",
  },
  {
    id: "battle-content-pipeline",
    title: "Territory Battle Content Pipeline",
    category: "Automation tools",
    status: "in-progress",
    description:
      "An automated capture-and-export pipeline for Pixel Clash battles, so interesting matches can be turned into short-form clips without manually recording each one.",
    relatedProjectSlug: "pixel-clash",
  },
  {
    id: "adaptive-fitness-plans",
    title: "Adaptive Fitness Plan Generation",
    category: "Product research",
    status: "concept",
    description:
      "Extending Restart Fitness's weekly plan generation to adjust based on session feedback over time, rather than following a fixed per-level schedule.",
    relatedProjectSlug: "restart-fitness",
  },
  {
    id: "admin-schema-scaffolding",
    title: "AI-Assisted Admin Screen Scaffolding",
    category: "AI-assisted product systems",
    status: "concept",
    description:
      "Exploring whether a schema description of an admin entity (fields, relationships, permissions) could scaffold a working table/filter/form screen automatically, using the shared component patterns from existing admin work as the target output.",
  },
  {
    id: "creative-coding-sketches",
    title: "Creative Coding Sketches",
    category: "Creative coding",
    status: "prototype",
    description:
      "Small, self-contained generative and interaction sketches — a working sketchbook that occasionally graduates an idea into a numbered Playground experiment.",
  },
  {
    id: "second-simulation-genre",
    title: "A Second Simulation Genre",
    category: "Game-development concepts",
    status: "concept",
    description:
      "Sketching whether the rule-based, watchable-simulation approach behind Pixel Clash could work for a genre other than territory battles.",
    relatedProjectSlug: "pixel-clash",
  },
];
