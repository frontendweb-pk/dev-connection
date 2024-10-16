"use client";

import { useSession } from "next-auth/react";

export default function Row() {
	const s = useSession();
	return <div>sss{JSON.stringify(s)}</div>;
}
