import SignOut from "@/components/auth/SignOut";
import { BellIcon, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav>
			<ul className="flex items-center gap-5">
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
