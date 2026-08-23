import type { Project } from "../types";
import ironShotokan from "../assets/images/iron-shotokan.webp";
import profileDev from "../assets/images/profile-dev.webp";
import efood from "../assets/images/efood.webp";

export const projects: Project[] = [
  {
    image: ironShotokan,
    title: "Iron Shotokan Karate",
    description:
      "Site institucional feito para um dojô de karatê, a partir das necessidades trazidas pelo próprio dono.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/Sulivan7/dojo-isk",
    liveLink: "https://dojo-isk.vercel.app/",
  },
  {
    image: profileDev,
    title: "Portfólio pessoal",
    description:
      "Este site. Componentes reutilizáveis, alternância entre tema claro e escuro e deploy automático na Vercel.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/Sulivan7/profile-dev",
    liveLink: "https://profile-dev-inky.vercel.app/",
  },
  {
    image: efood,
    title: "E-food",
    description:
      "Aplicação de delivery de comida, desenvolvida durante o curso de Engenharia Front-end da EBAC.",
    tags: ["React", "TypeScript", "Vite"],
    githubLink: "https://github.com/Sulivan7/efood",
    liveLink: "https://efood-theta-indol.vercel.app/",
  },
];
