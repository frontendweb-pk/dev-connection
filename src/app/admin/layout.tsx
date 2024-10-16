"use client";

import Screen from "@/components/ui/Screen";

import useToggle from "@/hooks/useToggle";
import classNames from "classnames";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { open, onHandleToggle } = useToggle();
	const classes = classNames("transition-transform h-full flex flex-col", {
		"ml-64 transition-transform": !open,
	});
	return (
		<Screen className="bg-gray-50">
			<Sidebar isOpen={open} />
			<div className={classes}>
				<Header onToggle={onHandleToggle} />
				<main className="flex-1 p-4">{children}</main>
			</div>
		</Screen>
	);
}
