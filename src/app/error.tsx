"use client";

import { useEffect } from "react";

import Button from "@/components/ui/Button";
import Screen from "@/components/ui/Screen";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);
	return (
		<Screen className="bg-sky-100 flex items-center justify-center">
			<div className="text-center">
				<h1>Something went worng!</h1>
				<p className="py-6">{error.message}</p>
				<Button onClick={reset}>Reset</Button>
			</div>
		</Screen>
	);
}
