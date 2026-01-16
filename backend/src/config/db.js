import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to database successfully');
    }
    catch(err){
        console.log("Connection to database failed.");
        process.exit(1);
    }
}

export default connectDB;