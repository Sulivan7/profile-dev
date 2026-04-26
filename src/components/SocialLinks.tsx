import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/sulivan7",
    label: "Perfil no GitHub",
    icon: <FiGithub className="w-5 h-5" />,
  },
  {
    href: "https://www.linkedin.com/in/sulivan7",
    label: "Perfil no LinkedIn",
    icon: <FiLinkedin className="w-5 h-5" />,
  },
  {
    href: "mailto:sulivan7@example.com",
    label: "Enviar email",
    icon: <FiMail className="w-5 h-5" />,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel={
            link.href.startsWith("mailto") ? undefined : "noopener noreferrer"
          }
          aria-label={link.label}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:text-blue-600 hover:border-blue-600 dark:border-slate-600 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
