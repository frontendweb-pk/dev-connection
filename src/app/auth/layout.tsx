import Screen from "@/components/ui/Screen";
import { redirect } from "next/navigation";
import { auth } from "../auth";

/**
 * Auth layout component
 * @param param0
 * @returns
 */
export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	if (session?.user.role === "user") {
		redirect("/user");
	}

	if (session?.user.role === "admin") {
		redirect("/admin");
	}

	return (
		<Screen>
			<div className="grid h-full grid-cols-2">{children}</div>
		</Screen>
	);
}
