"use client";
import { useFormStatus } from "react-dom";
import Button, { ButtonProps } from "./Button";

export type FormButtonProps<T extends React.ElementType> = Omit<
  ButtonProps<T>,
  "as"
> & {};
export default function FormButton<T extends React.ElementType = "button">({
  children,
  ...rest
}: FormButtonProps<T>) {
  const { pending } = useFormStatus();
  return (
    <Button
      as="button"
      type="submit"
      loading={pending}
      disabled={pending}
      {...rest}
    >
      {children}
    </Button>
  );
}
