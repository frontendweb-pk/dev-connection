import { Schema } from "mongoose";

export interface Post {
  user: Schema.Types.ObjectId;
}
