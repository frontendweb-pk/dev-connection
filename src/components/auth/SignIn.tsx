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
      {JSON.stringify(state)}
      <Form action={formAction}>
        <Input
          name="email"
          defaultValue="pk@gmail.com"
          error={state.validationErrors?.["email"]}
        />
        <Input
          name="password"
          type="password"
          defaultValue="Admin@123"
          error={state.validationErrors?.["password"]}
        />
        <FormButton>{AppContent.signIn}</FormButton>
      </Form>
    </>
  );
}
