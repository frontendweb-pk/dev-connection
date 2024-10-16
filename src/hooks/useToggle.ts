import { useCallback, useState } from "react";

export default function useToggle() {
	const [open, setToggleState] = useState(false);

	const onHandleToggle = useCallback(() => {
		setToggleState((prev) => !prev);
	}, []);

	const onOpen = () =>
		useCallback(() => {
			setToggleState(true);
		}, []);

	const onClose = () =>
		useCallback(() => {
			setToggleState(false);
		}, []);

	return {
		open,
		onOpen,
		onClose,
		onHandleToggle,
	};
}
