import { NextRequest, NextResponse } from "next/server";

/**
 * User sign up route
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json(body, { status: 201 });
}
