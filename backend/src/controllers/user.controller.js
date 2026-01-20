import { createUserSchema } from "../validations/user.validation.js";
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res, next) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            ...req.body,
            password: hashPassword
        });
        res.status(201).json({
            success: true,
            data: user
        })

    }
    catch (err) {
        next(err);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const filter = {};
        if (req.query.role) {
            filter.role = req.query.role;
        };

        const sortBy = req.query.sort || '-createdAt';

        const users = await User.find(filter).sort(sortBy).skip(skip).limit(limit);
        const totalUsersCount = await User.countDocuments();
        console.log(req.query.sortBy);

        res.json({
            success: true,
            limit,
            page,
            totalUsersCount,
            data: users
        });
    }
    catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(201).json({
            success: true,
            data: user
        });
    }
    catch (err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found!"
            });
        }

        res.json({
            success: true,
            data: user
        });

    }
    catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found!"
            });
        };

        res.json({
            success: true,
            message: "User deleted successfully"
        })
    }
    catch (err) {
        next(err);
    }
}