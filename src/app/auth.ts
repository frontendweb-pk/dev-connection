import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthError } from "./api/errors/auth-error";
import { IError } from "@/types";

/**
 * Next auth
 */
export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  debug: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 1000,
  },
  jwt: {
    maxAge: 60 * 60 * 1000,
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
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        if (res.status === 401)
          throw new AuthError((data.error as IError).message);

        return data;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      //console.log("----", { token, user, account, profile, session });
      return { ...token, ...user };
    },
    session({ token, session }) {
      // console.log(session, user, token);
      session.user = token;
      return session;
    },
  },
  pages: {},
});
