"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const todoRouter_1 = __importDefault(require("./routes/todoRouter"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
dotenv_1.default.config();
(0, db_1.connectDB)();
const app = (0, express_1.default)();
// Middleware for parsing JSON
app.use(body_parser_1.default.json({ limit: '30mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '30mb' }));
app.use((0, cors_1.default)());
// Register the routes
app.use('/', authRouter_1.default);
app.use('/', todoRouter_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
