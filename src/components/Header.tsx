import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

import { useScroll } from "../hooks/useScroll";
import { useTheme } from "../hooks/useTheme";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const scrolled = useScroll();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 py-4 transition-all bg-white dark:bg-slate-900 ${scrolled ? "border-b border-slate-200 dark:border-slate-700" : ""}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-semibold text-slate-900 dark:text-white"
          href="#"
        >
          Sulivan Dev
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <Button text="Currículo" variant="primary" size="sm" href="#" />
          </div>

          {theme === "light" ? (
            <SunIcon
              className="w-6 h-6 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors"
              onClick={toggle}
            />
          ) : (
            <MoonIcon
              className="w-6 h-6 text-slate-300 hover:text-white cursor-pointer transition-colors"
              onClick={toggle}
            />
          )}

          <button
            className="md:hidden text-slate-600 dark:text-slate-300 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pt-4 pb-2">
          <ul className="flex flex-col p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  className={`block py-2 px-3 rounded transition-colors ${
                    index === 0
                      ? "text-white bg-blue-400"
                      : "text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700"
                  }`}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="mt-4 px-3">
              <Button text="Currículo" variant="primary" size="sm" href="#" />
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
