"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../config/db");
const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';
// Register a new user
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    // check if user already exists
    const existingUser = yield db_1.userCollection.findOne({ email });
    if (existingUser)
        return res.status(400).json({ message: 'User already exists.' });
    // Hash the password
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    // Insert user into database
    const newUser = { firstName, lastName, email, password: hashedPassword, createdAt: new Date() };
    const result = db_1.userCollection.insertOne(newUser);
    // Create a token
    const token = jsonwebtoken_1.default.sign({ id: (yield result).insertedId, email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});
exports.register = register;
// Login an existing user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Find user by email 
    const user = yield db_1.userCollection.findOne({ email });
    if (!user)
        return res.status(400).json({ message: 'Invalid credentials' });
    // Verify password
    const isPasswordCorrect = yield bcrypt_1.default.compare(password, user.password);
    if (!isPasswordCorrect)
        return res.status(400).json({ message: 'Invalid credentials' });
    // create a token
    const token = jsonwebtoken_1.default.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});
exports.login = login;
