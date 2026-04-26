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
      "Gosto de escrever código que eu mesmo vou entender daqui 6 meses e que qualquer dev também consiga.",
  },
  {
    icon: HiOutlineEye,
    title: "Design Focado",
    description:
      "Se o usuário precisa pensar pra usar, algo deu errado. Busco interfaces que façam sentido no primeiro clique.",
  },
  {
    icon: HiOutlineBolt,
    title: "Performance",
    description:
      "Ninguém gosta de esperar página carregar. Otimizo o que dá pra entregar uma experiência fluida.",
  },
];
