import { IError } from "@/types";
import { CustomError } from "./custom";

export class AuthError extends CustomError {
  status: number = 401;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, AuthError.prototype);
  }
  renderError(): IError {
    return {
      status: this.status,
      message: this.message,
      name: this.name,
    };
  }
}
