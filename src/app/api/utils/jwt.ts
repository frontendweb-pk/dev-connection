import JWT, { JwtPayload, SignOptions } from "jsonwebtoken";

const DEFAULT_OPTION: SignOptions = {
  expiresIn: "1h",
};

export class Jwt {
  static genToken(payload: JwtPayload, option: SignOptions = DEFAULT_OPTION) {
    return JWT.sign(payload, process.env.AUTH_SECRET, option);
  }
  static compareToken(token: string) {
    return JWT.verify(token, process.env.AUTH_SECRET, (error) => {
      if (error) throw new Error(error.message);
      return true;
    });
  }
}
