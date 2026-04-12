export type MissionStatus =
  | "featured"
  | "active-program"
  | "upcoming"
  | "infrastructure"
  | "education-focus";

export type Mission = {
  slug: string;
  name: string;
  shortName: string;
  status: MissionStatus;
  category: string;
  destination: string;
  description: string;
  whyItMatters: string;
  phase: string;
  timeline: {
    label: string;
    detail: string;
  }[];
  learningTopics: string[];
};

export const missions: Mission[] = [
  {
    slug: "artemis-ii",
    name: "Artemis II",
    shortName: "Artemis II",
    status: "featured",
    category: "Crewed lunar mission",
    destination: "Moon flyby",
    description:
      "The first crewed Artemis mission, designed to send astronauts around the Moon and validate the systems that will support the next era of deep-space human exploration.",
    whyItMatters:
      "Artemis II is the bridge between testing and sustained lunar return. It transforms Artemis from architecture and ambition into human flight reality.",
    phase: "Flagship mission experience",
    timeline: [
      {
        label: "Program Build-Up",
        detail:
          "Launch vehicle, Orion systems, astronaut preparation, and integrated mission readiness come together.",
      },
      {
        label: "Launch + Translunar Flight",
        detail:
          "The mission leaves Earth orbit and begins the journey outward with crewed deep-space operations.",
      },
      {
        label: "Lunar Flyby",
        detail:
          "The crew performs the defining visible mission moment: a human return to the Moon’s vicinity.",
      },
      {
        label: "Return + Splashdown",
        detail:
          "The mission closes with reentry validation, recovery operations, and post-flight analysis.",
      },
    ],
    learningTopics: [
      "Orion spacecraft",
      "Space Launch System",
      "Crew systems",
      "Lunar return architecture",
      "How Artemis leads to Artemis III",
    ],
  },
  {
    slug: "gateway",
    name: "Gateway",
    shortName: "Gateway",
    status: "infrastructure",
    category: "Lunar station architecture",
    destination: "Cislunar space",
    description:
      "A lunar-orbit platform intended to support sustained exploration, operational flexibility, science, and future Moon-to-Mars mission architecture.",
    whyItMatters:
      "Gateway expands the Moon mission from one-off missions into a broader long-term operating layer.",
    phase: "Infrastructure education + visualization",
    timeline: [
      {
        label: "Architecture",
        detail:
          "International and industrial systems are assembled conceptually into a sustained lunar framework.",
      },
      {
        label: "Module Deployment",
        detail:
          "Power, habitation, logistics, and interfaces become the backbone for future mission support.",
      },
      {
        label: "Operational Integration",
        detail:
          "Gateway starts functioning as a new strategic node in cislunar operations.",
      },
    ],
    learningTopics: [
      "Cislunar space",
      "Lunar logistics",
      "International cooperation",
      "Moon-to-Mars architecture",
    ],
  },
  {
    slug: "iss-crewed-flight",
    name: "ISS + Crewed Flight",
    shortName: "ISS",
    status: "active-program",
    category: "Low Earth orbit operations",
    destination: "Low Earth orbit",
    description:
      "A constantly evolving stream of human spaceflight, research operations, logistics, and mission continuity in orbit around Earth.",
    whyItMatters:
      "The ISS is both a destination and a proving ground for the future of human operations in space.",
    phase: "Active orbital operations",
    timeline: [
      {
        label: "Crew Rotation",
        detail:
          "New missions sustain operational continuity, science work, and human spaceflight experience.",
      },
      {
        label: "Orbital Research",
        detail:
          "Experiments, life-support learning, and systems validation continue shaping future missions.",
      },
      {
        label: "Future Transition",
        detail:
          "ISS operations influence commercial stations and future space habitats.",
      },
    ],
    learningTopics: [
      "Human life in orbit",
      "Research in microgravity",
      "Crew transportation",
      "Commercial space station future",
    ],
  },
  {
    slug: "lunar-surface-systems",
    name: "Lunar Surface Systems",
    shortName: "Lunar Surface",
    status: "education-focus",
    category: "Surface exploration systems",
    destination: "Lunar surface",
    description:
      "The systems, habitats, mobility, robotics, and support layers that will define what people can actually do once they return to the Moon.",
    whyItMatters:
      "The surface layer turns symbolic return into real sustained presence and capability.",
    phase: "Learning and systems discovery",
    timeline: [
      {
        label: "Exploration Design",
        detail:
          "Mobility, support, power, robotics, and safety are defined for surface operations.",
      },
      {
        label: "Operational Capability",
        detail:
          "Systems begin supporting more meaningful and repeatable lunar activity.",
      },
    ],
    learningTopics: [
      "Lunar mobility",
      "Habitats",
      "Surface robotics",
      "Long-duration operations",
    ],
  },
];

export function getMissionBySlug(slug: string) {
  return missions.find((mission) => mission.slug === slug);
}
