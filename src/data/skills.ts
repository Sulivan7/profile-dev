import {
  HiOutlineCodeBracket,
  HiOutlineEye,
  HiOutlineBolt,
} from "react-icons/hi2";
import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    icon: HiOutlineCodeBracket,
    title: "Código Limpo",
    description:
      "Escrevo código que é fácil de ler, entender e manter, seguindo as melhores práticas da indústria.",
  },
  {
    icon: HiOutlineEye,
    title: "Design Focado",
    description: "Atenção aos detalhes e experiência do usuário em cada pixel.",
  },
  {
    icon: HiOutlineBolt,
    title: "Performance",
    description:
      "Otimização constante para entregar aplicações rápidas e eficientes.",
  },
];
