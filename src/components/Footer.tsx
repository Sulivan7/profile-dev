import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 py-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Sulivan.Dev - Todos os direitos
          reservados.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
