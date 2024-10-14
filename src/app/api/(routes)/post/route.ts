import { NextResponse } from "next/server";

/**
 * User sign up route
 * @param req
 * @returns
 */
export async function GET() {
  return NextResponse.json({ posts: [] }, { status: 201 });
}
