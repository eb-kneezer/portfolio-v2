import avatar from "@/assets/avatar.jpg";
import avatarBanner from "@/assets/banner.png";

export const site = {
  name: "Ebenezer Ogungbe",
  role: "Software Engineer",
  description:
    "Ebenezer Ogungbe is a product software engineer with a strong frontend background. Read about his experience and selected projects.",
  shareImage: {
    path: "/images/share-card.png",
    width: 1200,
    height: 630,
    alt: "EO. monogram above Ebenezer Ogungbe and Software Engineer.",
  },
  email: "ogungbesegun2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/ebenezerogungbe/",
  github: "https://github.com/eb-kneezer",
  resume: "https://drive.google.com/file/d/1GhSTVn7VQgK_P7lEQw9iFLtg_hp8RAu9/view?usp=sharing",
  avatarSrc: avatar,
  avatarBannerSrc: avatarBanner,
  avatarBannerText: "Life before death. Strength before weakness. Journey before destination.",
  introCta: {
    prompt: "Building something interesting?",
    label: "Let's chat.",
    url: "https://calendly.com/ebenezerogungbe/30min",
  },
};

export const contactLinks = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Email", href: site.email ? `mailto:${site.email}` : "", external: false },
  { label: "Résumé", href: site.resume, external: site.resume.startsWith("http") },
].filter((link) => link.href);
