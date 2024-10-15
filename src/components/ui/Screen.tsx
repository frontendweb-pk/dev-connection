type ScreenProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};

export default function Screen({ children, ...rest }: ScreenProps) {
  return (
    <div className="h-full" {...rest}>
      {children}
    </div>
  );
}
