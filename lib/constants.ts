import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Fathul Muiin",
  title: "Fathul Muiin - Homepage",
  description:
    "Fathul Muiin's homepage. Full Stack Software Engineer building scalable software that solves real-world business problems.",
  url: "https://fmuiin.github.io",
  github: "https://github.com/fmuiin",
  linkedin: "https://www.linkedin.com/in/fmuiin14/",
  email: "fmuiin14@gmail.com",
  githubUsername: "fmuiin",
  repoUrl: "https://github.com/fmuiin/fmuiin.github.io",
};

export const navItems: NavItem[] = [
  { label: "Works", href: "/works" },
  { label: "Posts", href: "/posts" },
  { label: "About", href: "/uses" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/fmuiin",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fmuiin14/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:fmuiin14@gmail.com",
    icon: "mail",
  },
];
