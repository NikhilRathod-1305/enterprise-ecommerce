import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ type: String , required: true},
    email:{ type: String , required:true , unique:true},
    password:{ type: String , required:true},
    role:{ type: String, enum:['admin', 'user'], required: true}
}, {timestamps:true});

export default mongoose.model('User',userSchema);