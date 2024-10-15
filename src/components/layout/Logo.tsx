import classNames from "classnames";
import { Waypoints } from "lucide-react";
import Link, { LinkProps } from "next/link";

type LogoProps = Omit<LinkProps, "href"> &
  React.LinkHTMLAttributes<HTMLAnchorElement> & {
    brandName?: string;
  };
export default function Logo({
  brandName = "DC",
  className,
  href = "/",
  ...rest
}: LogoProps) {
  const classes = classNames(
    "text-[24px] font-bold flex items-center justify-center gap-3",
    className
  );
  return (
    <Link href={href} className={classes} {...rest}>
      <Waypoints /> {brandName}
    </Link>
  );
}
