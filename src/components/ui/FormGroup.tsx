import classNames from "classnames";

export type FormGroupProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
/**
 * Form group props
 * @param param0
 * @returns
 */
export default function FormGroup({
  children,
  className,
  ...rest
}: FormGroupProps) {
  const classes = classNames("mb-3", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
