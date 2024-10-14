import { IError } from "@/types";
import { CustomError } from "./custom";

export class BadRequestError extends CustomError {
  status: number = 400;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  renderError(): IError {
    return {
      status: this.status,
      message: this.message,
      name: this.name,
    };
  }
}
