import classNames from "classnames";

type ScreenProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};

export default function Screen({ children, className, ...rest }: ScreenProps) {
  return (
    <div className={classNames("h-full", className)} {...rest}>
      {children}
    </div>
  );
}
