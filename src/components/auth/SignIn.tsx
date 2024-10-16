"use client";

import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { AppContent } from "@/utils/content";

import { login } from "@/actions/auth";
import { IZodValidation } from "@/types";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
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

type SigninProps = {
	session: Session | null;
};

export function SignIn({ session }: SigninProps) {
	const [state, formAction] = useFormState(login, initialState);

	const router = useRouter();
	const { status, data } = useSession();

	useEffect(() => {
		console.log("HI Auth", status, data);
		if (status === "authenticated") {
			let url = "/user";
			const role = data.user.role;
			if (role === "admin") url = "/admin";
			router.replace(url);
		}
	}, [status, router, data]);

	console.log("S", session);

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
