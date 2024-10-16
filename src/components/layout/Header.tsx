import classNames from "classnames";

import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
	const classes = classNames(
		"bg-slate-900 relative flex items-center justify-between px-4 py-3 shadow-sm",
	);
	return (
		<header className={classes}>
			<div className="container mx-auto flex justify-between">
				<Logo className="text-white" />
				<Navigation />
			</div>
		</header>
	);
}
