import Link from "next/link";

import { BellIcon, MessageCircle } from "lucide-react";

import UserControl from "../shared/UserControl";

export default function Navigation() {
	return (
		<nav className="flex">
			<ul className="flex items-center gap-5 text-white">
				<li>
					<Link href="/admin">
						<MessageCircle />
					</Link>
				</li>
				<li>
					<Link href="/admin">
						<BellIcon />
					</Link>
				</li>
				<li>
					<UserControl inline username="PK" />
				</li>
			</ul>
		</nav>
	);
}
