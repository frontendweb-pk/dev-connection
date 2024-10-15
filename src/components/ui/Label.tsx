import classNames from "classnames";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {};

/**
 * Label component
 * @param param0
 * @returns
 */
export default function Label({ children, className, ...rest }: LabelProps) {
  const classes = classNames("text-sm text-slate-600 mb-2 block", className);
  return (
    <label className={classes} {...rest}>
      {children}
    </label>
  );
}
