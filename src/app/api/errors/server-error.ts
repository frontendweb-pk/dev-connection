import { IError } from "@/types";
import { CustomError } from "./custom";

export class ServerError extends CustomError {
  status: number = 500;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ServerError.prototype);
  }
  renderError(): IError {
    return {
      status: this.status,
      message: this.message,
      name: this.name,
    };
  }
}
