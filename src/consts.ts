import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Jie Li",
  DESCRIPTION: "Jie Li's personal website.",
  EMAIL: "lijie0416@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Google Scholar",
    HREF: "https://scholar.google.com/citations?user=G7oDoOcAAAAJ&hl=en",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/artlands",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/jieli-cs/",
  },
];
