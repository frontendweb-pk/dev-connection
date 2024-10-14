export interface IError {
  status?: number;
  message: string;
  name?: string;
}

export interface IZodValidation {
  message: string;
  status?: "info" | "success" | "warning" | "error";
  validationErrors?: {
    [key: string]: string;
  };
  data?: null | object;
}
