import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          Erro 404
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
          Página não encontrada
        </h1>

        <p className="text-slate-500 dark:text-slate-400 max-w-md">
          O endereço que você acessou não existe ou foi movido. Volte para o
          início para continuar navegando.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-4 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors text-sm"
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
