import { ZodError } from "zod";

export const zodValidationFormat = (error: ZodError) => {
  return error.errors.reduce(
    (obj, next) =>
      Object.assign(obj, {
        [next.path[0]]: next.message,
      }),
    {}
  );
};
