import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("MONGODB_URI can not be undefined!");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

/**
 * Database connection
 * @returns
 */
export async function connectDb() {
  if (cached.conn) return cached.conn;
  try {
    cached.conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Adjust as needed
    });
    console.log("Database connected!");
    return cached.conn;
  } catch (error) {
    console.log("MONGODB error", error);
  }
}
