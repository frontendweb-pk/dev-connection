import classNames from "classnames";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
	const classes = classNames("bg-slate-800 shadow-md py-3");
	return (
		<header className={classes}>
			<div className="container mx-auto">
				<Logo className="text-white" />
				<Navigation />
			</div>
		</header>
	);
}
