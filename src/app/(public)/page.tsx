import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";
import Screen from "@/components/ui/Screen";
import Link from "next/link";

/**
 * Home page
 * @returns
 */
export default async function Home() {
	return (
		<Screen className="bg-slate-800 text-white flex items-center justify-center h-full">
			<div className="w-1/3 text-center">
				<Logo className="mb-5" />
				<h1 className="text-lg font-semibold mb-3">
					Welcome to dev connection
				</h1>
				<p className="text-sm text-slate-300">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
					provident, amet voluptatibus illo architecto debitis similique
					molestias quibusdam dolor molestiae distinctio at culpa optio, enim
					rem. Sunt voluptate quis vitae!
				</p>

				<div className=" flex justify-center items-center gap-5 mt-8">
					<Button as={Link} href="/auth/login">
						Login
					</Button>
					<Button>Register</Button>
				</div>
			</div>
		</Screen>
	);
}
