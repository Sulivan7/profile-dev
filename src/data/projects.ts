import type { Project } from "../types";
import projectPreviewImg from "../assets/images/projects-preview.jpg";
import eplay from "../assets/images/eplay.png";
import efood from "../assets/images/efood.png";

export const projects: Project[] = [
  {
    image: efood,
    title: "E-food",
    description:
      "Um aplicativo web moderno de delivery de comida, construído com React",
    tags: ["React", "TypeScript", "Vite", "Styled Components"],
    githubLink: "https://github.com/Sulivan7/efood",
    liveLink: "https://efood-theta-indol.vercel.app/",
  },
  {
    image: eplay,
    title: "E-play",
    description:
      "Uma aplicação de e-commerce de jogos. Desenvolvida utilizando Jest para testes unitários",
    tags: ["React", "TypeScript", "Redux Toolkit", "Jest"],
    githubLink: "https://github.com/Sulivan7/ebac_games_redux",
    liveLink: "https://eplay-gamma-gilt.vercel.app/",
  },
  {
    image: projectPreviewImg,
    title: "E-sports",
    description:
      "Uma aplicação de e-commerce esportivo moderna e responsiva. O projeto oferece carrinho de compras e sistema de favoritos.",
    tags: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
    githubLink: "https://github.com/Sulivan7/ebac_sports",
    liveLink: "https://github.com/Sulivan7/ebac_sports",
  },
];
