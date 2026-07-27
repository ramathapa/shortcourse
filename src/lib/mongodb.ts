import mongoose from "mongoose";

// const MONGODB_URI="mongodb+srv://shortcourseuser:cg3rTKAq6mnMKTZ0@orchid.bpzyobi.mongodb.net/shortcourse";

// if (!MONGODB_URI) {
//   throw new Error("Please define MONGODB_URI in .env.local");
// }
const MONGODB_URI="mongodb://shortcourseuser:cg3rTKAq6mnMKTZ0@ac-bx9hhjl-shard-00-00.bpzyobi.mongodb.net:27017,ac-bx9hhjl-shard-00-01.bpzyobi.mongodb.net:27017,ac-bx9hhjl-shard-00-02.bpzyobi.mongodb.net:27017/?ssl=true&replicaSet=atlas-ubomtq-shard-0&authSource=admin";
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local")
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || {
  conn: null,
  promise: null,
};

global.mongoose = cached;

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}