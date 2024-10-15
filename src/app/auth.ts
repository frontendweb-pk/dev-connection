import NextAuth, { AuthError, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";

/**
 * Next auth
 */
export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  // debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60,
  },
  jwt: {
    maxAge: 1 * 60 * 60,
  },
  providers: [
    Credentials({
      name: "credential",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        if (!res.ok) {
          throw new AuthError(data.error?.message);
        }

        return data;
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.avatar = user.avatar;
        token.name = `${user.first_name} ${user.last_name}`;
        token.id = user.id;
        token.mobile = user.mobile;
        token.role = user.role;
        token.expireAccessToken = user.expireAccessToken;
        token.verifyEmail = user.verifyEmail;
        token.exp = Math.floor(
          new Date(user.expireAccessToken).getTime() / 1000
        );
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user = token as User & AdapterUser;
      }
      if (token.exp) {
        session.expires = new Date(token.exp * 1000).toISOString() as Date &
          string;
      }
      return session;
    },
  },

  logger: {
    debug(message, metadata) {
      if (process.env.NODE_ENV === "development")
        console.log(message, metadata);
    },
    error(code, ...message) {
      if (process.env.NODE_ENV === "development") console.error(code, message);
    },
  },
});
