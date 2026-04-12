export type MissionMilestoneState = "complete" | "active" | "upcoming";

export type MissionMilestone = {
  label: string;
  detail: string;
  state: MissionMilestoneState;
};

export type Mission = {
  slug: string;
  name: string;
  shortName: string;
  status: string;
  statusType: "live" | "featured" | "development" | "future";
  category: string;
  program: string;
  destination: string;
  launchWindow: string;
  summary: string;
  whyItMatters: string;
  vehicle: string;
  crew: string[];
  objectives: string[];
  milestones: MissionMilestone[];
  related: string[];
  tags: string[];
};

export const missions: Mission[] = [
  {
    slug: "artemis-ii",
    name: "Artemis II",
    shortName: "Artemis II",
    status: "Flagship lunar mission",
    statusType: "featured",
    category: "Crewed lunar flyby",
    program: "Artemis",
    destination: "Moon",
    launchWindow: "Mission-focused educational tracking",
    summary:
      "Artemis II is the first crewed Artemis mission and a defining step in humanity’s return to deep space exploration beyond low Earth orbit.",
    whyItMatters:
      "This mission bridges the gap between test flights and sustained human lunar operations, helping the public understand the systems, crew, and mission architecture behind the return to the Moon.",
    vehicle: "SLS + Orion",
    crew: [
      "Crew profile layer coming soon",
      "Mission role explainers coming soon",
      "Spacecraft systems layer coming soon",
    ],
    objectives: [
      "Demonstrate crewed deep-space mission operations",
      "Validate spacecraft systems for future lunar missions",
      "Build public understanding around the Artemis campaign",
      "Create momentum toward lunar surface missions and future infrastructure",
    ],
    milestones: [
      {
        label: "Program buildup",
        detail: "Launch preparation, spacecraft readiness, and public mission awareness.",
        state: "complete",
      },
      {
        label: "Crewed mission phase",
        detail: "Mission operations, crew activity, spacecraft systems, and milestone tracking.",
        state: "active",
      },
      {
        label: "Future mission bridge",
        detail: "Connect Artemis II to Artemis III, Gateway, and long-term lunar architecture.",
        state: "upcoming",
      },
    ],
    related: ["gateway", "iss-crewed-flight", "lunar-surface-systems"],
    tags: ["moon", "artemis", "crewed", "deep space", "education"],
  },
  {
    slug: "gateway",
    name: "Gateway",
    shortName: "Gateway",
    status: "Lunar infrastructure",
    statusType: "development",
    category: "Space station architecture",
    program: "Artemis",
    destination: "Lunar orbit",
    launchWindow: "Program architecture",
    summary:
      "Gateway is the lunar-orbit platform designed to support long-term exploration, science, and future mission flexibility around the Moon.",
    whyItMatters:
      "It helps users understand how Artemis becomes an ongoing system rather than a one-off mission sequence.",
    vehicle: "Multi-element lunar platform",
    crew: ["Program-level infrastructure", "Mission support architecture"],
    objectives: [
      "Support sustained lunar exploration",
      "Enable mission staging and operations flexibility",
      "Connect lunar surface missions to broader exploration systems",
    ],
    milestones: [
      {
        label: "Program definition",
        detail: "Architecture, modules, partnerships, and mission role planning.",
        state: "active",
      },
      {
        label: "Assembly path",
        detail: "Buildout of elements and integration into the Artemis mission roadmap.",
        state: "upcoming",
      },
    ],
    related: ["artemis-ii", "lunar-surface-systems"],
    tags: ["gateway", "station", "moon", "infrastructure", "artemis"],
  },
  {
    slug: "iss-crewed-flight",
    name: "ISS + Crewed Flight",
    shortName: "ISS Ops",
    status: "Orbital operations",
    statusType: "live",
    category: "Low Earth orbit",
    program: "International Space Station",
    destination: "Low Earth orbit",
    launchWindow: "Ongoing",
    summary:
      "A living layer for understanding active human spaceflight, orbital operations, and how current missions connect to future exploration programs.",
    whyItMatters:
      "It gives people an everyday on-ramp into space activity while connecting current operations to deeper future missions.",
    vehicle: "Multiple spacecraft and logistics systems",
    crew: ["Dynamic mission activity", "Operational crews", "Visiting vehicles"],
    objectives: [
      "Explain current human spaceflight activity",
      "Provide continuity between present and future missions",
      "Serve as a daily-return product surface",
    ],
    milestones: [
      {
        label: "Active operations",
        detail: "Crew life, station operations, visiting vehicles, science, and public engagement.",
        state: "active",
      },
    ],
    related: ["artemis-ii", "gateway"],
    tags: ["iss", "orbit", "crew", "space station", "operations"],
  },
  {
    slug: "lunar-surface-systems",
    name: "Lunar Surface Systems",
    shortName: "Lunar Surface",
    status: "Surface architecture",
    statusType: "future",
    category: "Moon systems",
    program: "Artemis ecosystem",
    destination: "Lunar surface",
    launchWindow: "Future-facing",
    summary:
      "A structured view into landers, habitats, mobility, and support systems needed to make the Moon an active human environment.",
    whyItMatters:
      "It expands user curiosity from single missions into the broader system required for a sustained lunar future.",
    vehicle: "Landers, habitats, logistics, mobility",
    crew: ["Future lunar operations", "Surface mobility systems"],
    objectives: [
      "Teach the architecture behind sustained lunar activity",
      "Connect curiosity about missions to the Moon as a system",
      "Prepare expansion into a wider space knowledge graph",
    ],
    milestones: [
      {
        label: "Architecture layer",
        detail: "Map key systems required for sustained lunar exploration.",
        state: "active",
      },
      {
        label: "Mission integration",
        detail: "Link surface systems into the Artemis sequence and future exploration products.",
        state: "upcoming",
      },
    ],
    related: ["artemis-ii", "gateway"],
    tags: ["moon", "surface", "landers", "habitats", "future"],
  },
  {
    slug: "mars-pathfinder-programs",
    name: "Mars Pathfinder Programs",
    shortName: "Mars Path",
    status: "Future exploration layer",
    statusType: "future",
    category: "Mars exploration",
    program: "Mars pathway",
    destination: "Mars",
    launchWindow: "Long-range pathway",
    summary:
      "A future-facing discovery layer connecting lunar-era learning to the systems, science, and architecture that could support eventual Mars missions.",
    whyItMatters:
      "It gives SpaceEdu a natural expansion path from Moon-first education into the broader long-term future of human exploration.",
    vehicle: "Transit systems, habitats, support architecture",
    crew: ["Future deep-space crews"],
    objectives: [
      "Extend lunar curiosity into Mars pathway understanding",
      "Help users connect present systems to future exploration",
      "Create a broader destination graph for the platform",
    ],
    milestones: [
      {
        label: "Conceptual bridge",
        detail: "Show how Moon-era systems relate to future deep-space capability.",
        state: "active",
      },
      {
        label: "Expanded roadmap",
        detail: "Broaden SpaceEdu from lunar-first into multi-destination exploration.",
        state: "upcoming",
      },
    ],
    related: ["artemis-ii", "gateway", "lunar-surface-systems"],
    tags: ["mars", "future", "deep space", "pathway", "exploration"],
  },
];

export function getMissionBySlug(slug: string) {
  return missions.find((mission) => mission.slug === slug);
}

export function getRelatedMissions(slugs: string[]) {
  return missions.filter((mission) => slugs.includes(mission.slug));
}

export function getFeaturedMissions() {
  return missions.filter(
    (mission) => mission.statusType === "featured" || mission.statusType === "live"
  );
}

export function getMissionCounts() {
  return {
    total: missions.length,
    live: missions.filter((mission) => mission.statusType === "live").length,
    featured: missions.filter((mission) => mission.statusType === "featured").length,
    future: missions.filter((mission) => mission.statusType === "future").length,
  };
}
