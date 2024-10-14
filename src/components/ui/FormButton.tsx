"use client";
import { useFormStatus } from "react-dom";
import Button, { ButtonProps } from "./Button";

export type FormButtonProps = ButtonProps & {};
export default function FormButton({ children, ...rest }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" loading={pending} disabled={pending} {...rest}>
      {children}
    </Button>
  );
}
