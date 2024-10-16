"use client";

import { login } from "@/app/actions/auth";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { IZodValidation } from "@/types";
import { AppContent } from "@/utils/content";
import Link from "next/link";
import { useFormState } from "react-dom";

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
export function SignIn() {
	const [state, formAction] = useFormState(login, initialState);

	useAuthRedirect(); // redirection

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
