import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAuthRedirect() {
	const router = useRouter();
	const { status, data } = useSession();

	useEffect(() => {
		let url = "/user";
		if (status === "authenticated") {
			const role = data.user.role;
			if (role === "admin") url = "/admin";
			router.replace(url);
		}
	}, [status, data]);

	return null;
}
