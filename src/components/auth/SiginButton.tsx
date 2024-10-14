"use client";

import { signIn } from "@/app/auth";

export default function SiginButton() {
  const handleLogin = async () => {
    const result = await signIn("credentials", {
      email: "pk@gmail.com",
      password: "Admin@123",
    });
  };
  return <button onClick={handleLogin}>Sign in</button>;
}
