import { IError } from "@/types";
import { CustomError } from "./custom";

export class NotFoundError extends CustomError {
  status: number = 404;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  renderError(): IError {
    return {
      status: this.status,
      message: this.message,
      name: this.name,
    };
  }
}
