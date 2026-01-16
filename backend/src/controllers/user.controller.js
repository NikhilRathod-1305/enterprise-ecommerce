import { createUserSchema } from "../validations/user.validation.js"

export const createUser = async (req , res , next) => {
    try{
        const {error , value} = createUserSchema.validate(req.body);

        if(error){
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        res.status(201).json({
            success:true,
            message: value
        });
    }
    catch(err){
        next(err);
    }
}