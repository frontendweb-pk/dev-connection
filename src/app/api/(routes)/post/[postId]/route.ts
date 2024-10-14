import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    postId: string;
  };
}
/**
 * User sign up route
 * @param req
 * @returns
 */
export async function GET(req: NextRequest, { params }: Params) {
  return NextResponse.json({ postId: params.postId }, { status: 201 });
}
