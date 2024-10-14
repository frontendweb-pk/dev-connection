import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthError } from "./api/errors/auth-error";

/**
 * Next auth
 */
export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    Credentials({
      name: "credential",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const body = {
          email: credentials.email,
          password: credentials.password,
        };
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new AuthError("Authentication failed!");

        const data = await res.json();
        return data;
      },
    }),
  ],
});
