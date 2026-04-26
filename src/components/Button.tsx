type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  target?: string;
};

const baseClasses = "rounded-sm font-medium transition-colors cursor-pointer";

const variantClasses = {
  primary:
    "bg-blue-900 text-white hover:bg-blue-700 " +
    "dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400",
  secondary:
    "border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 " +
    "dark:border-slate-500 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  text,
  variant = "primary",
  href,
  onClick,
  size = "md",
  type = "button",
  target,
}: ButtonProps) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;
