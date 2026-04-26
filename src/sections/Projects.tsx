import { Link } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import CardProjects from "../components/CardProject";
import { projects } from "../data/projects";

const PREVIEW_COUNT = 3;

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <TitleSection
          title="Projetos em destaque"
          subtitle="Alguns dos projetos que desenvolvi recentemente"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, PREVIEW_COUNT).map((project) => (
            <CardProjects key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projetos"
            className="inline-block px-6 py-3 text-base rounded-sm font-medium border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
          >
            Ver mais projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
