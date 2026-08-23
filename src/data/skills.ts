import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    icon: HiOutlineAcademicCap,
    title: "Formação",
    description:
      "Tecnólogo em Análise e Desenvolvimento de Sistemas pela Estácio, com o curso de Engenharia Front-end da EBAC concluído. Hoje curso Ciência da Computação.",
  },
  {
    icon: HiOutlineBriefcase,
    title: "Trabalho e estudo",
    description:
      "Trabalho no comércio há quase cinco anos e estudo programação em paralelo. Foi assim que terminei um curso de dois anos e entreguei o site do dojô.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Estudando agora",
    description:
      "Consumo de APIs, Redux e testes automatizados, com o objetivo de evoluir para full stack.",
  },
];
