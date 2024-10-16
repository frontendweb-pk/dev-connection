import Logo from "@/components/layout/Logo";
import NavItem from "@/components/ui/NavItem";
import { IMenu } from "@/types";
import classNames from "classnames";

import { SidebarMenu } from "./menu";

type SidebarProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	isOpen?: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {
	const classes = classNames(
		"fixed  z-40 h-screen w-64 bg-white p-3 shadow-sm border-r border-b-gray-100  transition-transform md:visible",
		{
			"-translate-x-full": isOpen,
			"left-0": !isOpen,
		},
	);
	//isOpen ? "-translate-x-full" : ""
	return (
		<aside className={classes}>
			<Logo className="mb-4 py-2" href="/admin" />
			{SidebarMenu.map((menu: IMenu, index: number) => (
				<div key={menu.slug}>
					<div className="mb-3 mt-4 flex items-center justify-between px-4">
						<span className="text-xs  uppercase text-gray-400">
							{menu.name}
						</span>
						{/* <div className="dark:bg-navy-500 ml-2 h-px flex-grow bg-slate-200"></div> */}
					</div>
					<ul className="font-inter text-xs+ mt-1 space-y-1 px-2 font-medium">
						{menu.children?.map((submenu: IMenu) => (
							<NavItem key={submenu.slug} item={submenu} root="/admin/" />
						))}
					</ul>
					{index !== SidebarMenu.length - 1 && (
						<div className="dark:bg-navy-500 mx-4 my-5 h-px bg-slate-200"></div>
					)}
				</div>
			))}
			<div className="absolute bottom-0 left-5 right-5 flex items-center justify-between border-t border-gray-200 py-4">
				<p className="text-xs">
					&copy; {new Date().getFullYear()} - version: 1.0.0
				</p>
			</div>
		</aside>
	);
}
