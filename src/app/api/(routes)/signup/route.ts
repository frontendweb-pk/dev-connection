import { connectDb } from "@/lib/db";
import { IUser } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";
import { errorHandler } from "../../utils/error-handler";
import { CustomError } from "../../errors/custom";
import { User } from "../../models/user";
import { UserSchema } from "../../schema/user";
import { zodValidationFormat } from "@/utils/zod-error-format";
import { ValidationError } from "../../errors/validation-error";

/**
 * User sign up route
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  // db connection
  await connectDb();

  const body = (await req.json()) as IUser;

  // body validation
  const validation = UserSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: zodValidationFormat(validation.error) },
      { status: 400 }
    );
  }

  try {
    const email = await User.findOne({ email: body.email });

    if (email) {
      throw new ValidationError(
        "User already existed, please choose another email!"
      );
    }

    const mobile = await User.findOne({ mobile: body.mobile });
    if (mobile) {
      throw new ValidationError(
        `Mobile is already registerd with: ${mobile.email}!`
      );
    }

    const user = new User(validation.data);
    const result = await user.save();

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}
