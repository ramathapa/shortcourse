import mongoose from "mongoose";

const MONGODB_URI="mongodb://shortcourseuser:cg3rTKAq6mnMKTZ0@ac-bx9hhjl-shard-00-00.bpzyobi.mongodb.net:27017,ac-bx9hhjl-shard-00-01.bpzyobi.mongodb.net:27017,ac-bx9hhjl-shard-00-02.bpzyobi.mongodb.net:27017/?ssl=true&replicaSet=atlas-ubomtq-shard-0&authSource=admin";
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

/*
  To prevent creating multiple connections in development,
  we use a global cached variable.
*/

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}