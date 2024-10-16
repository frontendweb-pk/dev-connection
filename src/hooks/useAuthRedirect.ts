import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

export default function useAuthRedirect() {
	const router = useRouter();
	const { status, data } = useSession();
	console.log(data);
	useEffect(() => {
		let url = "/user";
		if (status === "authenticated") {
			const role = data.user.role;
			if (role === "admin") url = "/admin";
			router.replace(url);
		}
	}, [status, router, data]);

	return null;
}
