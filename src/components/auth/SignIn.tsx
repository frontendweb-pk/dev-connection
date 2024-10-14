"use client";
import { login } from "@/app/actions/auth";
import Form from "../ui/Form";
import Input from "../ui/Input";
import FormButton from "../ui/FormButton";
import { useFormState } from "react-dom";
import { IZodValidation } from "@/types";
import { AppContent } from "@/utils/content";

/**
 * Sign in component
 * @returns
 */
const initialState: IZodValidation = {
  message: "",
};
export function SignIn() {
  const [state, formAction] = useFormState(login, initialState);
  return (
    <>
      <Form action={formAction}>
        <Input name="email" error={state.validationErrors?.["email"]} />
        <Input
          name="password"
          type="password"
          error={state.validationErrors?.["password"]}
        />
        <FormButton>{AppContent.signIn}</FormButton>
      </Form>
    </>
  );
}
