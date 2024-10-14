"use server";

import { IZodValidation } from "@/types";
import { SigninSchema } from "../api/schema/user";
import { signIn } from "../auth";
import { zodValidationFormat } from "@/utils/zod-error-format";

export async function login(prevState: IZodValidation, formData: FormData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // validation
  const validation = SigninSchema.safeParse(body);
  console.log("v", validation.error?.errors);
  if (!validation.success) {
    return {
      ...prevState,
      validationErrors: zodValidationFormat(validation.error),
    };
  }

  const result = await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirect: false,
  });

  prevState.data = result;
  return prevState;
}
