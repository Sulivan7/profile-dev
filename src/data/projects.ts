import type { Project } from "../types";
import projectPreviewImg from "../assets/images/projects-preview.jpg";

export const projects: Project[] = [
  {
    image: projectPreviewImg,
    title: "E-commerce Platform",
    description:
      "An e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/e-commerce-platform",
    liveLink: "https://e-commerce-platform.vercel.app",
  },
  {
    image: projectPreviewImg,
    title: "Chat Application",
    description:
      "A real-time chat application using React, Node.js, and Socket.io.",
    tags: ["React", "Node.js", "Socket.io"],
    githubLink: "https://github.com/yourusername/chat-application",
    liveLink: "https://chat-application.vercel.app",
  },
  {
    image: projectPreviewImg,
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my projects and skills, built with Gatsby and GraphQL.",
    tags: ["Gatsby", "GraphQL", "Styled Components"],
    githubLink: "https://github.com/yourusername/personal-portfolio",
    liveLink: "https://personal-portfolio.vercel.app",
  },
];
