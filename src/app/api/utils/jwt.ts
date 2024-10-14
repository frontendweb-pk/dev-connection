import JWT, { JwtPayload, SignOptions } from "jsonwebtoken";

interface JwtOption extends SignOptions {}

const DEFAULT_OPTION: JwtOption = {
  expiresIn: "1h",
};

export class Jwt {
  static genToken(payload: JwtPayload, option: JwtOption = DEFAULT_OPTION) {
    return JWT.sign(payload, process.env.NEXT_SECRET, option);
  }
  static compareToken(token: string) {
    return JWT.verify(token, process.env.NEXT_SECRET, (error, done) => {
      if (error) throw new Error(error.message);
      return true;
    });
  }
}
