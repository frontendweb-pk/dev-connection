import { BellIcon, MessageCircle } from "lucide-react";
import Link from "next/link";

import SignOut from "../auth/SignOut";

export default function Navigation() {
	return (
		<nav>
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
					<SignOut />
				</li>
			</ul>
		</nav>
	);
}
