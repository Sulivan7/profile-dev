import type { IconType } from "react-icons";

export interface Skill {
  icon: IconType;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
}
