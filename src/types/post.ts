import { Schema } from "mongoose";

export interface Post {
  user: Schema.Types.ObjectId;
  content: string;
  images: string[];
  code: string;
  videoUrl: string;
  status: string;
}
