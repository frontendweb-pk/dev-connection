import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthError } from "./api/errors/auth-error";

/**
 * Next auth
 */
export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  debug: true,
  secret: process.env.AUTH_SECRET,
  jwt: {
    maxAge: 24 * 60 * 60,
  },
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
        console.log("b", body);
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
          method: "POST",
          body: JSON.stringify(body),
        });

        console.log(body, res.status);
        if (!res.ok) throw new AuthError("Authentication failed!");

        const data = await res.json();
        return data;
      },
    }),
  ],
});
