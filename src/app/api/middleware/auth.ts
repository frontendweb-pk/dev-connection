import { auth } from "@/app/auth";
import { Jwt } from "../utils/jwt";
import { AuthError } from "next-auth";
import { User } from "../models/user";

export async function isAuth() {
  const session = await auth();

  const token = session?.user.accessToken;
  const verify = Jwt.compareToken(token!) as any;
  if (!verify) throw new AuthError("Invalid token");

  const user = await User.findById(session?.user.id);

  return user;
}
