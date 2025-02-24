import express from 'express';
import { login, register } from '../controllers/authController';

const router = express.Router();

// router.post("/refresh", handleRefreshToken);
router.post("/register", register);
router.post('/login', login);
// router.post('/logout', logout);
// router.put('/', authMiddleware, updateUser);
// router.get('/', authMiddleware, getCurrentUser);
// router.post('/forgot-password', handleForgotPassword);
// router.post('/reset-password', handleResetPassword);

export default router;