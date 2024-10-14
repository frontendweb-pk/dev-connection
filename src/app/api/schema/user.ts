import { z } from "zod";

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
