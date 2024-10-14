import { NextRequest, NextResponse } from "next/server";
import { SigninSchema } from "../../schema/user";
import { ISignin } from "@/types/user";
import { zodValidationFormat } from "@/utils/zod-error-format";
import { CustomError } from "../../errors/custom";
import { errorHandler } from "../../utils/error-handler";
import { ValidationError } from "../../errors/validation-error";
import { IUserDoc, User } from "../../models/user";
import { Password } from "../../utils/password";
import { AuthError } from "../../errors/auth-error";
import { Jwt } from "../../utils/jwt";
import { connectDb } from "@/lib/db";

/**
 * User sign in route
 * @param req
 * @returns
 */
const TOKEN_EXPIRATION_MS = 3600000;
export async function POST(req: NextRequest) {
  // db connection
  await connectDb();

  const body = (await req.json()) as ISignin;

  // request validation
  const validation = SigninSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: zodValidationFormat(validation.error) },
      { status: 422 }
    );
  }

  try {
    const user = (await User.findOne({
      $or: [{ email: body.email }, { mobile: body.email }],
    })) as IUserDoc;

    if (!user) {
      throw new ValidationError("User not found!, please register with us");
    }

    const verify = Password.compare(validation.data.password, user.password);

    if (!verify) {
      throw new AuthError("Invalid password!");
    }

    user.accessToken = Jwt.genToken({ userId: user.id, email: user.email });
    user.expireAccessToken = new Date(
      Date.now() + TOKEN_EXPIRATION_MS
    ).toISOString();

    await user.save();

    return NextResponse.json(
      user.toJSON({
        transform(_, ret) {
          delete ret.password;
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error as CustomError);
  }
}
