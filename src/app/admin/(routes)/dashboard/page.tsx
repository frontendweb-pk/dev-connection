import { auth } from "@/app/auth";

export default async function Page() {
	const session = await auth();
	return <div>Admin Dasbaord {JSON.stringify(session)}</div>;
}
