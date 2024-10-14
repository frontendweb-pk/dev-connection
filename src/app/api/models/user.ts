import { IUser } from "@/types/user";
import mongoose, { Schema, Document } from "mongoose";
import { Password } from "../utils/password";

export const USER_TABLE = "User";
export interface IUserDoc extends Document<IUser>, IUser {}

const schema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin", "superadmin"],
    },
    verifyEmail: { type: Boolean, default: false },
    accessToken: { type: String, default: "" },
    expireAccessToken: { type: String, default: "" },
    avatar: { type: String, default: "" },
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
    },
  }
);

schema.pre("save", function (done) {
  const pwd = Password.hash(this.get("password"));

  if (this.isModified("password")) {
    this.set("password", pwd);
  }

  if (["admin", "superadmin"].includes(this.get("role"))) {
    this.set("verifyEmail", true);
  }

  done();
});

export const User =
  mongoose.models[USER_TABLE] || mongoose.model<IUserDoc>(USER_TABLE, schema);
