import { Logout } from "@/app/actions/auth";
import { AppContent } from "@/utils/content";

import Form from "../ui/Form";
import FormButton from "../ui/FormButton";

export default function SignOut() {
	return (
		<Form action={Logout}>
			<FormButton>{AppContent.signOut}</FormButton>
		</Form>
	);
}
