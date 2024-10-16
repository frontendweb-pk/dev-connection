import UserControl from "../shared/UserControl";

export default function Sidebar() {
	return (
		<aside className="bg-white shadow-sm min-h-80 rounded-md">
			<UserControl username="PK" />
			<h1>Aside</h1>
		</aside>
	);
}
