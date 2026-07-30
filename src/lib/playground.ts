export type ExperimentStatus = "prototype" | "released" | "concept";

export interface Experiment {
  id: string;
  code: string;
  title: string;
  objective: string;
  tested: string;
  result: string;
  technologies: string[];
  status: ExperimentStatus;
  relatedProjectSlug?: string;
  hasLivePreview?: boolean;
}

export const experiments: Experiment[] = [
  {
    id: "carrom-physics",
    code: "EXP–001",
    title: "Physics-Based Carrom Study",
    objective:
      "Test whether simple 2D physics — friction and restitution — could produce a satisfying flick-and-collide feel without a full game engine.",
    tested: "Circle-circle collision and friction decay on a constrained board, tuned by hand rather than a physics preset.",
    result:
      "Confirmed the approach was feasible with a lightweight, hand-tuned physics layer rather than a full physics engine.",
    technologies: ["Flutter", "Forge2D"],
    status: "prototype",
  },
  {
    id: "territory-battle-behaviors",
    code: "EXP–002",
    title: "Territory Battle Behaviors",
    objective: "Find a character-behavior model that reads as strategic and watchable without requiring instructions.",
    tested: "Named algorithm archetypes (hunter, mirror, solidify, flood, centerpull, and more) versus more elaborate behavior trees for territory-control battles.",
    result:
      "Simple, named strategies produced more legible and watchable outcomes than a more complex behavior tree — this became the 20-Pattern roster in Pixel Clash.",
    technologies: ["TypeScript", "Canvas API"],
    status: "released",
    relatedProjectSlug: "pixel-clash",
  },
  {
    id: "motion-navigation-system",
    code: "EXP–003",
    title: "Motion Navigation System",
    objective: "Establish one consistent motion language — timing and easing — usable across an entire product surface, not tuned page by page.",
    tested: "A shared set of duration/easing tokens applied uniformly to window-open, hover, and page-transition motion.",
    result: "Adopted directly into this portfolio's window system — every transition on this site now reads from the same token set.",
    technologies: ["Framer Motion"],
    status: "released",
    hasLivePreview: true,
  },
  {
    id: "responsive-voice-room-layouts",
    code: "EXP–004",
    title: "Responsive Voice Room Layouts",
    objective: "Figure out how a live voice-room's mic-seat layout should reflow across breakpoints without losing the sense of who's in the room.",
    tested: "A rigid grid versus a flex-wrap seat layout at varying participant counts and viewport widths.",
    result: "Flex-wrap with fixed seat sizing scaled more gracefully than a rigid grid and was adopted into Ludino's room UI.",
    technologies: ["Flutter", "Responsive layout builders"],
    status: "released",
    relatedProjectSlug: "ludino",
  },
  {
    id: "custom-page-transitions",
    code: "EXP–005",
    title: "Custom Page Transition Study",
    objective: "Test whether route-level transitions could double as a \"window opening\" metaphor rather than a generic fade or slide.",
    tested: "Scale-and-fade window-open variants against slide transitions for route changes.",
    result: "Scale-and-fade read as more deliberate and \"engineered\"; slide read as more generic app navigation — scale-and-fade was chosen for this portfolio.",
    technologies: ["Framer Motion", "Next.js App Router"],
    status: "released",
  },
  {
    id: "micro-interaction-hover-focus",
    code: "EXP–006",
    title: "Micro-Interaction Study — Hover & Focus States",
    objective: "Establish a restrained hover/focus vocabulary for navigation — noticeable, never exaggerated.",
    tested: "Dock icon lift distance (2px, 4px, 8px) and label-reveal timing.",
    result: "A 2–4px lift paired with a 150ms label fade felt considered without tipping into gimmick — used across this portfolio's dock and cards.",
    technologies: ["Framer Motion", "CSS transitions"],
    status: "released",
  },
];
