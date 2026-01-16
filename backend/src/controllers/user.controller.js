import { createUserSchema } from "../validations/user.validation.js"
import User from '../models/User.js'

export const createUser = async (req , res , next) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: user
        })
        
    }
    catch(err){
        next(err);
    }
}