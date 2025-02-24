"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
// router.post("/refresh", handleRefreshToken);
router.post("/register", authController_1.register);
router.post('/login', authController_1.login);
// router.post('/logout', logout);
// router.put('/', authMiddleware, updateUser);
// router.get('/', authMiddleware, getCurrentUser);
// router.post('/forgot-password', handleForgotPassword);
// router.post('/reset-password', handleResetPassword);
exports.default = router;
