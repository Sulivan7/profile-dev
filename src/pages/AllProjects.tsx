import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import CardProjects from "../components/CardProject";
import { projects } from "../data/projects";

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors text-sm mb-6"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Todos os Projetos
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Confira todos os projetos que desenvolvi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <CardProjects key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
