"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.post('/login', (req, res) => { (0, authController_1.login)(req, res); });
router.post("/register", (req, res) => { (0, authController_1.register)(req, res); });
exports.default = router;
