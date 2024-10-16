import Image from "next/image";

import classNames from "classnames";

type UserControlProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	inline?: boolean;
	avatar?: string;
	username: string;
	size?: number;
};
export default function UserControl({
	inline,
	avatar = "/images/avatar.png",
	username,
	size = inline ? 30 : 100,
}: UserControlProps) {
	const classes = classNames(
		inline ? "flex items-center gap-2" : " text-center",
	);
	return (
		<div className={classes}>
			<Image
				src={avatar}
				alt={avatar}
				className={classNames(
					"border p-[3px] rounded-full",
					!inline && "mb-3 mx-auto",
				)}
				width={size}
				height={size}
			/>
			<label className="text-sm font-semibold text-s">{username}</label>
		</div>
	);
}
