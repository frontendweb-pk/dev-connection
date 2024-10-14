import { IError } from "@/types";
import { CustomError } from "./custom";

export class ValidationError extends CustomError {
  status: number = 422;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
  renderError(): IError {
    return {
      status: this.status,
      message: this.message,
      name: this.name,
    };
  }
}
