import classNames from "classnames";
import React from "react";
import { Loader } from "lucide-react";

type Props<T extends React.ElementType> = {
  as?: T;
  loading?: boolean;
};

export type ButtonProps<T extends React.ElementType> = React.PropsWithChildren<
  Props<T>
> &
  Omit<React.ComponentPropsWithRef<T>, keyof Props<T>> & {};

/**
 * Button component
 * @param param0
 * @returns
 */
export default function Button<T extends React.ElementType = "button">({
  as,
  loading,
  children,

  ...rest
}: ButtonProps<T>) {
  const Component = as || "button";

  const classes = classNames(
    "gap-2 flex items-center text-center rounded-md px-6 py-2 bg-rose-600 text-white"
  );

  return (
    <Component className={classes} {...rest}>
      {loading && <Loader className="animate-spin" size={16} />} {children}
    </Component>
  );
}
