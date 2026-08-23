import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center pb-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <span className="inline-block px-4 py-2 rounded-sm text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800">
          Buscando estágio ou vaga júnior
        </span>

        <h1 className="text-5xl font-bold leading-tight text-slate-900 dark:text-white">
          Desenvolvedor
          <br />
          <span className="text-slate-500 dark:text-slate-400">Front-end</span>
        </h1>

        <p className="text-slate-500 dark:text-slate-400 max-w-lg text-base">
          Construo interfaces com React, TypeScript e Next.js
        </p>

        <div className="flex gap-4">
          <Button text="Ver Projetos" variant="primary" href="#projects" />
          <Button
            text="Entrar em Contato"
            variant="secondary"
            href="#contact"
          />
        </div>

        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
