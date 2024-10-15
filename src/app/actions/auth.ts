"use server";

import { IZodValidation } from "@/types";
import { SigninSchema } from "../api/schema/user";
import { signIn, signOut } from "../auth";
import { zodValidationFormat } from "@/utils/zod-error-format";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export async function login(prevState: IZodValidation, formData: FormData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log(body);

  // validation
  const validation = SigninSchema.safeParse(body);
  if (!validation.success) {
    return {
      ...prevState,
      validationErrors: zodValidationFormat(validation.error),
    };
  }

  try {
    await signIn("credentials", {
      redirect: false,
      ...validation.data,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        ...prevState,
        message: error.message,
      };
    }
  }

  // prevState.data = result;

  return prevState;
}

export async function Logout() {
  await signOut();
  redirect("/");
}
