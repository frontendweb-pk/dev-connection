import { auth } from "@/app/auth";
import Row from "@/components/ui/Row";

export default async function Page() {
	const session = await auth();

	return (
		<div>
			<h1>User dashboard</h1>
			{JSON.stringify(session)}
			<Row />
		</div>
	);
}
