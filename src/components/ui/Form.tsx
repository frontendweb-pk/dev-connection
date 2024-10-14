export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {};
/**
 * Form component
 * @param param0
 * @returns
 */
export default function Form({ children, ...rest }: FormProps) {
  return (
    <form {...rest} noValidate>
      {children}
    </form>
  );
}
