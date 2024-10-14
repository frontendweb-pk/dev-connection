"use client";

import { login } from "@/app/actions/auth";
import { signIn, signOut } from "@/app/auth";
import Form from "../ui/Form";
import Button from "../ui/Button";
import FormButton from "../ui/FormButton";
import { AppContent } from "@/utils/content";

export default function SignOut() {
  return (
    <Form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <FormButton>{AppContent.signOut}</FormButton>
    </Form>
  );
}
