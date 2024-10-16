import classNames from "classnames";
import FormGroup, { FormGroupProps } from "./FormGroup";
import Label, { LabelProps } from "./Label";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  labelProps?: LabelProps;
  formGroupProps?: FormGroupProps;
};
export default function Input({
  label,
  error,
  labelProps,
  placeholder = "Enter value",
  formGroupProps,
  ...rest
}: InputProps) {
  const classes = classNames(
    "p-3 ring-1 w-full  rounded-md text-sm outline-none hover:ring-sky-600"
  );
  return (
    <FormGroup {...formGroupProps}>
      <div className="mb-2 w-full">
        {label && <Label {...labelProps}>{label}</Label>}
        <input placeholder={placeholder} className={classes} {...rest} />
      </div>
      {error && <p className="text-sm text-red-800 block">{error}</p>}
    </FormGroup>
  );
}
