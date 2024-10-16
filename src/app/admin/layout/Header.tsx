import IconButton from "@/components/ui/IconButton";
import { Menu } from "lucide-react";

import Navigation from "./Navigation";

type HeaderProps = React.HtmlHTMLAttributes<HTMLElement> & {
	onToggle?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Header({ onToggle }: HeaderProps) {
	return (
		<header className="bg-white px-3 shadow-sm border-b flex justify-between items-center border-b-gray-200 py-3">
			<IconButton icon={Menu} onClick={onToggle} />
			<Navigation />
		</header>
	);
}
