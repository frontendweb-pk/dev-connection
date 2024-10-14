import { z } from "zod";
const mobileRegex = /^[2-9]\d{2}-\d{3}-\d{4}$/; // Adjust based on your requirements
const strongPasswordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

export const UserSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "First name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, { message: "Password must be min 8 char logn" })
    .max(16, { message: "Password must be max 16 char long" }),
  mobile: z
    .string()
    .min(10, { message: "Mobile must be 10 char long" })
    .max(10, { message: "Mobile must be 10 char long" }),
  avatar: z.string().default(""),
  role: z.string().default("user"),
});

export const SigninSchema = z.object({
  email: z
    .string()
    .refine(
      (value) =>
        z.string().email().safeParse(value).success || mobileRegex.test(value),
      {
        message: "Must be valid email or mobile number",
      }
    ),
  password: z.string().refine((value) => strongPasswordRegex.test(value), {
    message:
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a digit, and a special character.",
  }),
});
