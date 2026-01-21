import bcrypt from "bcryptjs";
import User from '../models/User.js';
import { env } from '../config/env.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid creds"
            });
        }
        const isMatches = await bcrypt.compare(password, user.password);
        if (!isMatches) {
            return res.status(401).json({
                success: false,
                message: "Invalid creds"
            });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            env.JWT_SECRET,
            { expiresIn: env.JWT_EXPIRES_IN }
        );
        const refresh = jwt.sign(
            { id: user._id },
            env.JWT_REFRESH_SECRET,
            { expiresIn: env.JWT_REFRESH_EXPIRES_IN }
        );
        res.cookie('refreshToken', refresh, {
            httpOnly: true,
            secure: false,
            SameSite: 'strict'
        })
        console.log(token,'  token');
        
        res.json({
            sucess: true,
            token
        })
    }
    catch (err) {
        next(err);
    }
}