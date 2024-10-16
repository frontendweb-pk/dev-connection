import { LucideIcon } from "lucide-react";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: LucideIcon;
};
export default function IconButton({ icon, ...rest }: IconButtonProps) {
	const Icon = icon;
	return (
		<button {...rest}>
			<Icon />
		</button>
	);
}
