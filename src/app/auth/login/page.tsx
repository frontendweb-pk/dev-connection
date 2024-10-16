import { auth } from "@/app/auth";

import { SignIn } from "@/components/auth/SignIn";
import Logo from "@/components/layout/Logo";
import Center from "@/components/ui/Center";

export default async function Page() {
	const session = await auth();
	return (
		<>
			<Center className="bg-gray-900">
				<div className="w-1/2 text-white">
					<Logo />
					<h1 className="text-lg text-rose-700 font-bold mt-5">
						Welcome to Login
					</h1>
					<p className="text-sm font-thin mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
						nulla! Quas expedita sed consectetur reprehenderit vero aspernatur!
						Harum modi quibusdam saepe maxime, tempora vel, dolorem doloribus
						veniam cupiditate nobis nulla.
					</p>
				</div>
			</Center>
			<Center>
				<SignIn session={session} />
			</Center>
		</>
	);
}
