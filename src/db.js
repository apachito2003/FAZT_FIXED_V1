import { connect, mongoose } from "mongoose";
import { MONGODB_URI } from "./config";
mongoose.set('strictQuery', true);

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI);
    console.log("Connected to db");
  } catch (error) {
    console.error(error);
  }
};
