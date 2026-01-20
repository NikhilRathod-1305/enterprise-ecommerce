import mongoose from "mongoose";
import { env } from "./env.js";

const connectDB = async () => {
    try{
        console.log("Connecting to MongoDB...", env.MONGO_URI);
        await mongoose.connect(env.MONGO_URI);
        console.log('Connected to database successfully');
    }
    catch(err){
        console.error("Connection to database failed:", err.message);
        process.exit(1);
    }
}

export default connectDB;