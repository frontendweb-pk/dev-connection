"use client";
import { login } from "@/app/actions/auth";
import Form from "../ui/Form";
import Input from "../ui/Input";
import FormButton from "../ui/FormButton";
import { useFormState } from "react-dom";
import { IZodValidation } from "@/types";
import { AppContent } from "@/utils/content";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

/**
 * Sign in component
 * @returns
 */
const initialState: IZodValidation = {
  message: "",
};
export function SignIn() {
  const { data, status, update } = useSession();
  console.log("s", data);
  const [state, formAction] = useFormState(login, initialState);

  return (
    <>
      <Form className="w-72" action={formAction}>
        <div className="mb-5">
          <h1 className="text-[30px] font-bold text-rose-700">Login</h1>
          <p className="text-xs">
            If you don't have an account, please click{" "}
            <Link
              className="text-rose-500 hover:text-rose-800 font-medium"
              href="/auth/signup"
            >
              Sign up
            </Link>
          </p>
        </div>
        <Input
          label="Email Id"
          name="email"
          defaultValue="pk@gmail.com"
          error={state.validationErrors?.["email"]}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          defaultValue="Admin@123"
          error={state.validationErrors?.["password"]}
        />
        <FormButton className="text-center" block>
          {AppContent.signIn}
        </FormButton>
      </Form>
    </>
  );
}
