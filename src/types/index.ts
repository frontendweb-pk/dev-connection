import { LucideIcon } from "lucide-react";

export interface IError {
	status?: number;
	message: string;
	name?: string;
}
export interface IZodValidation {
	message: string;
	status?: "info" | "success" | "warning" | "error";
	validationErrors?: {
		[key: string]: string;
	};
	data?: null | object;
}

export interface IMenu {
	name: string;
	slug: string;
	icon?: LucideIcon;
	children?: IMenu[];
}
