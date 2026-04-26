type TitleSectionProps = {
  title: string;
  subtitle?: string;
};

const TitleSection = ({ title, subtitle }: TitleSectionProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleSection;
