import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL as string;

let connected: mongoose.Connection | null = null;

async function dbConnect() {
  if (connected) {
    return connected;
  }

  try {
    const connection = await mongoose.connect(MONGO_URL);

    connected = connection.connection;

    return connected;
  } catch (error) {
    throw new Error("Failed to connect to MongoDB");
  }
}
// if (mongoose.connection.readyState === 1) {
//   console.log("hm hoise!");
// }

export default dbConnect;
