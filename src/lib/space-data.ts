export type MissionStatus =
  | "Live"
  | "Upcoming"
  | "In Development"
  | "Completed"
  | "Active Program";

export type Mission = {
  slug: string;
  name: string;
  program: string;
  status: MissionStatus;
  category: string;
  destination: string;
  summary: string;
  whyItMatters: string;
  nextMilestone: string;
  tags: string[];
  timeline: {
    label: string;
    date: string;
    detail: string;
  }[];
};

export const featuredMissions: Mission[] = [
  {
    slug: "artemis-ii",
    name: "Artemis II",
    program: "Artemis",
    status: "Live",
    category: "Crewed Lunar Flyby",
    destination: "Moon",
    summary:
      "The first crewed Artemis mission, designed to take astronauts around the Moon and validate deep-space systems before future lunar surface missions.",
    whyItMatters:
      "Artemis II is the critical human test flight that connects the Apollo legacy to the modern Moon-to-Mars architecture.",
    nextMilestone:
      "Post-flight analysis, program refinement, and preparation for Artemis III lunar surface operations.",
    tags: ["Orion", "SLS", "Crew", "Moon", "Deep Space"],
    timeline: [
      {
        label: "Mission Assembly",
        date: "Program Phase",
        detail:
          "Vehicle integration, crew preparation, systems testing, and launch readiness flow across Orion and SLS.",
      },
      {
        label: "Launch",
        date: "Flight Event",
        detail:
          "Crew launches aboard Orion on SLS for humanity’s return to crewed lunar flight.",
      },
      {
        label: "Trans-Lunar Mission",
        date: "Flight Event",
        detail:
          "The mission validates life support, navigation, communications, and human operations in deep space.",
      },
      {
        label: "Return + Splashdown",
        date: "Flight Event",
        detail:
          "Safe Earth return completes the end-to-end test for future lunar missions.",
      },
    ],
  },
  {
    slug: "gateway",
    name: "Gateway",
    program: "Moon to Mars",
    status: "In Development",
    category: "Lunar Space Station",
    destination: "Lunar Orbit",
    summary:
      "Gateway is the planned lunar-orbit outpost that supports sustained exploration, science, logistics, and international collaboration.",
    whyItMatters:
      "It becomes a major operating layer for long-term lunar activity and a bridge toward sustained human presence beyond Earth orbit.",
    nextMilestone:
      "Module delivery, architecture maturation, and alignment with the broader Artemis mission flow.",
    tags: ["Habitation", "Logistics", "Lunar Orbit", "International"],
    timeline: [
      {
        label: "Architecture Definition",
        date: "Current",
        detail:
          "Gateway’s role is being shaped around science, crew support, logistics, and mission flexibility.",
      },
      {
        label: "Module Delivery",
        date: "Upcoming",
        detail:
          "Power, habitation, logistics, and docking elements move the platform toward operations.",
      },
      {
        label: "Operational Support",
        date: "Future",
        detail:
          "Gateway supports recurring crew presence, science, and lunar campaign coordination.",
      },
    ],
  },
  {
    slug: "iss-crewed-flight",
    name: "ISS + Crewed Flight",
    program: "Low Earth Orbit",
    status: "Active Program",
    category: "Orbital Operations",
    destination: "Low Earth Orbit",
    summary:
      "A continuous stream of human spaceflight, dockings, maintenance, science, and international operations centered on the International Space Station.",
    whyItMatters:
      "The ISS remains the operational backbone of human spaceflight experience, science, and crewed mission discipline.",
    nextMilestone:
      "Ongoing crew rotation, research activity, and operational continuity in orbit.",
    tags: ["ISS", "Crew", "Docking", "Science", "Operations"],
    timeline: [
      {
        label: "Continuous Operations",
        date: "Current",
        detail:
          "The station remains active with crew rotations, research, maintenance, and orbital operations.",
      },
      {
        label: "Commercial Transition",
        date: "Emerging",
        detail:
          "ISS activity informs the future of commercial stations and sustained orbital infrastructure.",
      },
    ],
  },
  {
    slug: "artemis-iii",
    name: "Artemis III",
    program: "Artemis",
    status: "Upcoming",
    category: "Lunar Surface Mission",
    destination: "Moon",
    summary:
      "The planned Artemis mission designed to return astronauts to the lunar surface and establish a new era of human lunar exploration.",
    whyItMatters:
      "Artemis III transforms deep-space operations from demonstration into surface presence.",
    nextMilestone:
      "Hardware readiness, landing system integration, and surface mission coordination.",
    tags: ["Moon Landing", "Surface Ops", "Orion", "Human Landing System"],
    timeline: [
      {
        label: "Systems Integration",
        date: "Current",
        detail:
          "Mission architecture aligns spacecraft, launch systems, landers, and surface operations.",
      },
      {
        label: "Crewed Lunar Surface Attempt",
        date: "Upcoming",
        detail:
          "The mission aims to transition from lunar flyby to actual surface exploration.",
      },
    ],
  },
];

export const learningTracks = [
  {
    title: "Start Here",
    audience: "Beginner",
    description:
      "Understand the difference between launch vehicles, spacecraft, stations, and destinations without needing technical background.",
    lessons: ["What Artemis is", "What Orion does", "Why the Moon matters"],
  },
  {
    title: "Mission Flow",
    audience: "Student",
    description:
      "Follow the step-by-step anatomy of a mission from assembly to launch, deep-space operations, and return.",
    lessons: ["Launch windows", "Mission phases", "Navigation and communications"],
  },
  {
    title: "Systems Layer",
    audience: "Enthusiast",
    description:
      "Go deeper into programs, mission architecture, logistics, and how multiple systems work together.",
    lessons: ["Gateway", "Lunar infrastructure", "Crew systems"],
  },
  {
    title: "Technical Context",
    audience: "Advanced",
    description:
      "Learn how mission planning, constraints, vehicle design, and operational risk shape exploration programs.",
    lessons: ["Program architecture", "Tradeoffs", "Operational sequencing"],
  },
];

export const dashboardCards = [
  {
    title: "Tracked Missions",
    value: "12",
    detail: "Launch wedge includes lunar, crewed, and orbital narratives.",
  },
  {
    title: "Learning Paths",
    value: "4",
    detail: "Beginner through advanced educational progression.",
  },
  {
    title: "Mission Events",
    value: "27",
    detail: "Mock timeline events powering the prototype experience.",
  },
  {
    title: "Discovery Signals",
    value: "9",
    detail: "Recommendation themes like Moon, crew, stations, and science.",
  },
];

export const recommendationGraph = [
  {
    source: "Artemis II",
    links: ["Orion", "SLS", "Artemis III", "Gateway", "Apollo 8"],
  },
  {
    source: "Gateway",
    links: ["Lunar Logistics", "Deep Space Habitation", "Artemis IV"],
  },
  {
    source: "ISS",
    links: ["Crew Operations", "Docking", "Commercial Stations"],
  },
];
