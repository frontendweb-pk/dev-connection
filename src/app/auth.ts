import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthError } from "./api/errors/auth-error";
import { IError } from "@/types";

/**
 * Next auth
 */
export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    updateAge: 60 * 60 * 1000,
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
    jwt({ token, user, account }) {
      console.log("TOKEN", token, user);
      //console.log("----", { token, user, account, profile, session });
      return token;
    },
    session({ token, session }) {
      // console.log(session, user, token);
      // if (session.currentUser) session.currentUser = token;
      return session;
    },
  },
  pages: {},
});
