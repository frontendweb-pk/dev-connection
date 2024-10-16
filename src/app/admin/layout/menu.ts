import { IMenu } from "@/types";
import {
	CogIcon,
	KeyIcon,
	LayoutDashboard,
	Newspaper,
	UserIcon,
	Users,
} from "lucide-react";

export const SidebarMenu: IMenu[] = [
	{
		name: "Menus",
		slug: "menu",
		children: [
			{
				name: "Dashboard",
				slug: "dashboard",
				icon: LayoutDashboard,
				children: [],
			},
			{
				name: "Posts",
				slug: "posts",
				icon: Newspaper,
				children: [],
			},
			{
				name: "Users",
				slug: "users",
				icon: Users,
				children: [],
			},
		],
	},
	{
		name: "Settings",
		slug: "settings",
		children: [
			{
				name: "Profile",
				slug: "profile",
				icon: UserIcon,
			},
			{
				name: "Change password",
				slug: "change-password",
				icon: KeyIcon,
			},
			{
				name: "Settings",
				slug: "settings",
				icon: CogIcon,
			},
		],
	},
];
