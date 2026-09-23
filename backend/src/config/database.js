import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("something went wrong!", error.message);
  }
}

export default connectToDb;
