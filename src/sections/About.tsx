import TitleSection from "../components/TitleSection";
import { skills } from "../data/skills";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <TitleSection
          title="Sobre Mim"
          subtitle="Desenvolvedor com foco em front-end. Procuro construir soluções práticas, com código organizado e atenção à usabilidade."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="rounded-xl p-6 border border-slate-200 bg-slate-50 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 transition-colors"
              >
                <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
