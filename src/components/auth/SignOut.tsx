import Form from "../ui/Form";

import FormButton from "../ui/FormButton";
import { AppContent } from "@/utils/content";
import { Logout } from "@/app/actions/auth";

export default function SignOut() {
  return (
    <Form action={Logout}>
      <FormButton>{AppContent.signOut}</FormButton>
    </Form>
  );
}
