"use server";

import { redirect } from "next/navigation";

import { zodValidationFormat } from "@/utils/zod-error-format";

import { IZodValidation } from "@/types";
import { AuthError } from "next-auth";

import { SigninSchema } from "../app/api/schema/user";
import { signIn, signOut } from "../app/auth";

export async function login(prevState: IZodValidation, formData: FormData) {
	const body = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	// validation
	const validation = SigninSchema.safeParse(body);
	if (!validation.success) {
		return {
			...prevState,
			validationErrors: zodValidationFormat(validation.error),
		};
	}

	await signIn("credentials", {
		...validation.data,
		redirect: true,
	});

	return prevState;
}

export async function Logout() {
	await signOut({ redirect: true, redirectTo: "/" });
}
