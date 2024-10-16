import { useState } from "react";

export default function useToggle() {
	const [open, setToggleState] = useState(false);

	const onHandleToggle = () => {
		setToggleState((prev) => !prev);
	};

	const onOpen = () => () => {
		setToggleState(true);
	};

	const onClose = () => () => {
		setToggleState(false);
	};

	return {
		open,
		onOpen,
		onClose,
		onHandleToggle,
	};
}
