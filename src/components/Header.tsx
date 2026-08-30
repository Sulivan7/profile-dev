import { useState } from "react";
import { HiMoon, HiSun, HiBars3, HiXMark } from "react-icons/hi2";

import { useScroll } from "@/hooks/useScroll";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import Button from "@/components/Button";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

const sectionIds = ["hero", "about", "projects", "contact"];

const Header = () => {
  const scrolled = useScroll();
  const { theme, toggle } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => href === `#${activeSection}`;

  return (
    <header
      className={`sticky top-0 z-50 py-5 border-b transition-colors bg-white dark:bg-slate-900 ${
        scrolled
          ? "border-slate-200 dark:border-slate-700"
          : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-semibold text-slate-900 dark:text-white"
          href="#hero"
        >
          Sulivan Dev
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className={`transition-colors ${
                    isActive(link.href)
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                  href={link.href}
                  aria-current={isActive(link.href) ? "true" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <Button
              text="Currículo"
              variant="primary"
              size="sm"
              href="/curriculoDev.pdf"
              target="_blank"
            />
          </div>

          <button
            onClick={toggle}
            aria-label={
              theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"
            }
            className="cursor-pointer"
          >
            {theme === "light" ? (
              <HiSun className="block w-6 h-6 text-slate-600 hover:text-slate-900 transition-colors" />
            ) : (
              <HiMoon className="block w-6 h-6 text-slate-300 hover:text-white transition-colors" />
            )}
          </button>

          <button
            className="md:hidden text-slate-600 dark:text-slate-300 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <HiXMark className="block w-6 h-6" />
            ) : (
              <HiBars3 className="block w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden absolute left-0 right-0 top-full px-4 pt-4 pb-2">
          <ul className="flex flex-col p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className={`block py-2 px-3 rounded transition-colors ${
                    isActive(link.href)
                      ? "text-white bg-blue-500"
                      : "text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700"
                  }`}
                  href={link.href}
                  aria-current={isActive(link.href) ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
              <Button
                text="Currículo"
                variant="primary"
                size="sm"
                href="/curriculoDev.pdf"
                target="_blank"
                fullWidth
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
