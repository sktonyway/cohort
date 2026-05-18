import mongoose from "mongoose";

const connectDB = async function () {
  try {
    const conn = await mongoose.connect(process.env.mongo_uri);
    console.log(conn.connection.host);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
