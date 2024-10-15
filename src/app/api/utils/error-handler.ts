import { NextResponse } from "next/server";
import { CustomError } from "../errors/custom";

export function errorHandler(error: CustomError) {
  if (process.env.NODE_ENV === "development") {
    console.error("Unexpected error:", error);
  }

  return NextResponse.json(
    { error: error.renderError() },
    { status: error.status }
  );
}
