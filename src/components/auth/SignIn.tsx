"use client";

import Link from "next/link";

import { IZodValidation } from "@/types";
import { Session } from "next-auth";
import { useFormState } from "react-dom";

import { login } from "@/actions/auth";

import { AppContent } from "@/utils/content";

import useAuthRedirect from "@/hooks/useAuthRedirect";

import Form from "../ui/Form";
import FormButton from "../ui/FormButton";
import Input from "../ui/Input";

/**
 * Sign in component
 * @returns
 */
const initialState: IZodValidation = {
	message: "",
};

type SigninProps = {
	session: Session | null;
};

export function SignIn({ session }: SigninProps) {
	const [state, formAction] = useFormState(login, initialState);

	return (
		<>
			<Form className="w-72" action={formAction}>
				<div className="mb-5">
					<h1 className="text-[30px] font-bold text-rose-700">Login</h1>
					<p className="text-xs">
						If you don&apos;t have an account, please click
						<Link
							className="text-rose-500 hover:text-rose-800 font-medium"
							href="/auth/signup">
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
