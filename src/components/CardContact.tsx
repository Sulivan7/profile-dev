type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  info: string;
  href?: string;
};

const ContactCard = ({ icon, title, info, href }: ContactCardProps) => {
  const content = (
    <div className="rounded-xl p-6 border border-slate-200 bg-slate-50 text-center flex flex-col items-center gap-3 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 transition-colors">
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </h3>
      <p className="text-slate-900 dark:text-white font-medium">{info}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactCard;