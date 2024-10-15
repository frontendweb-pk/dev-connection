import { NextResponse } from "next/server";
import { isAuth } from "../../middleware/auth";

/**
 * User sign up route
 * @param req
 * @returns
 */
export async function GET() {
  const user = await isAuth();

  return NextResponse.json({ posts: user }, { status: 201 });
}
