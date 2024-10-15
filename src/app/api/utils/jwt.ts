import JWT, { JwtPayload, SignOptions } from "jsonwebtoken";
import { AuthError } from "next-auth";

const DEFAULT_OPTION: SignOptions = {
  expiresIn: "1h",
};

export class Jwt {
  static genToken(payload: JwtPayload, option: SignOptions = DEFAULT_OPTION) {
    return JWT.sign(payload, process.env.AUTH_SECRET, option);
  }
  static compareToken(token: string) {
    return JWT.verify(token, process.env.AUTH_SECRET, (error, done) => {
      if (error) throw new AuthError(error.message);
      return done;
    });
  }
}
