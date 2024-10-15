import { IUser } from "@/types/user";
import { User } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    currentUser: IUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
