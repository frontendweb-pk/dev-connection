import { IUser } from "@/types/user";
import { User } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    accessToken: string;
    role: string;
    mobile: string;
    verifyEmail: boolean;
    first_name: string;
    last_name: string;
    avatar: string;
    expireAccessToken: string;
  }
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends User {}
}
