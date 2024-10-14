import { NextResponse } from "next/server";
import { CustomError } from "../errors/custom";

export function errorHandler(error: CustomError) {
  return NextResponse.json(
    { error: error.renderError() },
    { status: error.status }
  );
}
