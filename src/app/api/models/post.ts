import mongoose, { Schema } from "mongoose";

export const POST_TABLE = "Post";
const schema = new Schema({});
export const Post =
  mongoose.models[POST_TABLE] || mongoose.model(POST_TABLE, schema);
