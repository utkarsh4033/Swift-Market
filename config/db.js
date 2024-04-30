import mongoose from "mongoose";
import colors from "colors";
// const url = process.env.PORT;
// console.log(url);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Mongodb ${conn.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
