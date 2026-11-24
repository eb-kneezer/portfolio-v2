export type Section = {
  heading: string;
  body: string[];
  /** Draft copy that still needs facts from Ebenezer — never rendered publicly. */
  draft?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  role: string;
  period?: string;
  status?: string;
  tools?: string[];
  selected: boolean;
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "bereanstack",
    name: "BereanStack",
    category: "Independent Product",
    summary:
      "A platform I'm building to make asking questions, sharing ideas, and participating in church discussions easier. From figuring out what to build to designing the experience and engineering the systems behind it.",
    role: "Founder & engineer — independent",
    status: "WIP",
    tools: ["NestJS", "TanStack Start", "Resend", "Redis", "PostgreSQL"],
    selected: true,
    sections: [
      {
        heading: "Context",
        body: [
          "During church teaching sessions, good questions often go unasked — or get asked and then lost. BereanStack gives a congregation a structured place to submit, prioritise and document questions and answers.",
        ],
      },
      {
        heading: "The challenge",
        body: [
          "Participation has to feel easy for attendees, while leaders need control: moderation, sensible permissions and a record that stays useful after the session ends.",
        ],
      },
      {
        heading: "My contribution",
        body: [
          "Everything — identifying the problem, defining the workflows, making UX decisions, designing permissions and implementing both the frontend and backend.",
        ],
      },
      {
        heading: "Approach and decisions",
        body: [
          "The core loop is structured question submission, moderation, voting and answer documentation. Each step is designed around who is acting — attendee, moderator or teacher — and what they need in that moment.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "BereanStack is in active development. [List which features are complete and which are planned.]",
        ],
        draft: true,
      },
    ],
  },
  {
    slug: "turntable-charts",
    name: "Turntable Charts",
    category: "Music / Charting",
    summary:
      "A Nigerian music charting platform. I led a frontend redesign focused on making music rankings and historical trends easier to explore.",
    role: "Engineer",
    selected: true,
    sections: [],
  },
  {
    slug: "cartway",
    name: "Cartway",
    category: "Logistics",
    summary: "A web application and operational dashboard built for a logistics company.",
    role: "Engineer",
    tools: ["Next.js", "Supabase", "Resend"],
    selected: true,
    sections: [],
  },
];
