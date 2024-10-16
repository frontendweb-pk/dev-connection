import { NextResponse } from "next/server";

import { auth } from "@/app/auth";

export default auth((req) => {
	const pathname = req.nextUrl.pathname;
	const role = req.auth?.user.role;

	if (role !== "admin" && pathname.startsWith("/admin")) {
		return NextResponse.redirect(
			new URL(decodeURIComponent("/?callbackUrl=" + pathname), req.url),
		);
	}

	if (role !== "user" && pathname.startsWith("/user")) {
		return NextResponse.redirect(
			new URL(decodeURIComponent("/?callbackUrl=" + pathname), req.url),
		);
	}

	return NextResponse.next();
});

export const config = {
	matcher: ["/admin/:path*", "/user/:path*", "/api/(.*)"],
};
