import type { ImageMetadata } from "astro";
import cbnLogo from "@/assets/cbn.png";
import dotLogo from "@/assets/dot-logo.svg";
import moniebookLogo from "@/assets/moniebook.webp";
import moniepointLogo from "@/assets/moniepoint-logo.png";

export type ExperienceDescriptionBlock = {
  type: "paragraph";
  parts: (
    | string
    | {
        type: "linkedLogo";
        text: string;
        src: ImageMetadata;
        href: string;
        iconBackground?: string;
      }
    | { type: "infoLink"; text: string; href: string }
    | { type: "confetti"; text: string; label: string }
  )[];
};

export type Experience = {
  company: string;
  logoSrc: ImageMetadata;
  period: string;
  roles: { title: string; period: string }[];
  description: ExperienceDescriptionBlock[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Moniepoint",
    logoSrc: moniepointLogo,
    period: "November 2024 – November 2026",
    roles: [
      { title: "Senior Frontend Engineer", period: "September – November 2026" },
      { title: "Frontend Engineer", period: "November 2024 – August 2026" },
    ],
    description: [
      {
        type: "paragraph",
        parts: [
          "Got a taste of that ",
          { type: "confetti", text: "🦄", label: "Celebrate with confetti" },
          " unicorn life building ",
          {
            type: "linkedLogo",
            text: "Moniebook",
            src: moniebookLogo,
            href: "https://moniepoint.com/moniebook",
            iconBackground: "#0757eb",
          },
          ", a business management platform helping businesses manage sales, inventory, payments, finances, and day-to-day operations.",
        ],
      },
      {
        type: "paragraph",
        parts: [
          "I worked primarily on Inventory and Procurement, helping business owners and admins navigate the less glamorous, repetitive, and sometimes expensive-if-you-get-it-wrong parts of running a business. From managing products and pricing to purchasing and tracking stock, my job was to make these workflows feel less like a chore and more like something they could handle with confidence.",
        ],
      },
    ],
    technologies: [
      "React",
      "TanStack",
      "Vite",
      "Vitest",
      "React Testing Library",
      "Zustand",
      "Datadog",
    ],
  },
  {
    company: "Dot",
    logoSrc: dotLogo,
    period: "October 2021 – October 2024",
    roles: [{ title: "Frontend Engineer", period: "October 2021 – October 2024" }],
    description: [
      {
        type: "paragraph",
        parts: [
          "My first full-time role out of university. I joined Dot as one of its first two frontend engineers, barely a month after operations began, building dashboards for agents and aggregators bringing financial services to underserved communities across Nigeria.",
          " ",
          {
            type: "infoLink",
            text: "What is agency banking?",
            href: "https://www.balogunharold.com/insights/agency-banking-in-nigeria-the-fintech-play",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "I also built internal tools that helped business leaders understand their numbers and customer success teams resolve issues. I eventually led the frontend team as we grew from fewer than 1,000 to around 50,000 agents in three years, navigating scaling challenges, growing product demands, and the ",
          {
            type: "linkedLogo",
            text: "CBN's",
            src: cbnLogo,
            href: "https://www.cbn.gov.ng/",
          },
          " seemingly endless regulatory updates along the way.",
        ],
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "Metabase",
      "Sentry",
      "Elasticsearch",
      "Redux",
      "TanStack",
      "Chart.js",
      "Keycloak",
      "GSAP",
    ],
  },
];
