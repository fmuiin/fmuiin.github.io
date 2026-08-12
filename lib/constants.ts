import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Fathul Muiin",
  title: "Fathul Muiin - Homepage",
  description:
    "Fathul Muiin's homepage. Full Stack Software Engineer building scalable software that solves real-world business problems.",
  url: "https://fmuiin.github.io",
  github: "https://github.com/fmuiin",
  linkedin: "https://linkedin.com/in/fmuiin",
  email: "fathulmuiin@gmail.com",
  githubUsername: "fmuiin",
  repoUrl: "https://github.com/fmuiin/fmuiin.github.io",
};

export const navItems: NavItem[] = [
  { label: "Works", href: "/works" },
  { label: "Posts", href: "/posts" },
  { label: "Uses", href: "/uses" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/fmuiin",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/fmuiin",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:fathulmuiin@gmail.com",
    icon: "mail",
  },
];
