import SignOut from "../auth/SignOut";

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<SignOut />
				</li>
			</ul>
		</nav>
	);
}
