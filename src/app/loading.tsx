import { Loader } from "lucide-react";

import Center from "@/components/ui/Center";
import Screen from "@/components/ui/Screen";

export default function Loading() {
	return (
		<Screen className="bg-white/40 fixed flex justify-center items-center z-10">
			<Center>
				<Loader />
			</Center>
		</Screen>
	);
}
