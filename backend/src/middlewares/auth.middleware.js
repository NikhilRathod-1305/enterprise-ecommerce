import jwt from 'jsonwebtoken';
import {env} from '../config/env.js'

const protect = (req, res, next) => {
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Not authorized"
        });
    }

    try{
        const decoded = jwt.verify(token , env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(401).json({
            success:false,
            message: "Invalid token"
        })
    }
}

export default protect;