import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user.controller.js';
import { login } from '../controllers/login.controller.js';
import protect from '../middlewares/auth.middleware.js';
import authorize from '../middlewares/role.middleware.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', protect, getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id',protect,authorize('admin'), deleteUser);
router.post('/login',login)

export default router;