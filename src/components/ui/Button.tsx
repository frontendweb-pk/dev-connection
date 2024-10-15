import classNames from "classnames";
import { Loader } from "lucide-react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
/**
 * Button component
 * @param param0
 * @returns
 */
export default function Button({
  children,
  loading,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = classNames(
    "gap-2 flex items-center rounded-md px-6 py-2 bg-rose-600 text-white",
    className
  );
  return (
    <button type={type} className={classes} {...rest}>
      {loading && <Loader className="animate-spin" size={16} />} {children}
    </button>
  );
}
