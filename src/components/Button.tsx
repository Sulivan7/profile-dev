type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
};

const baseClasses = "rounded-sm font-medium transition-colors cursor-pointer";

const variantClasses = {
  primary:
    "bg-blue-900 text-white hover:bg-blue-600 " +
    "dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500",
  secondary:
    "border border-slate-600 text-blue-900 hover:border-blue-600 " +
    "dark:border-blue-400 dark:text-gray-900 dark:hover:border-blue-500",
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
}: ButtonProps) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
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
