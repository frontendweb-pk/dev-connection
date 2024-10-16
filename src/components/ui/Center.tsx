import classNames from "classnames";

export type CenterProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
export default function Center({ children, className, ...rest }: CenterProps) {
  const classes = classNames("flex items-center justify-center", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
