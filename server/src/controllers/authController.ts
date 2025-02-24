import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userCollection } from '../config/db';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

// Register a new user
const register = async (req: Request, res: Response): Promise<any> => {
    const {firstName, lastName, email, password} = req.body;

    // check if user already exists
    const existingUser = await userCollection.findOne({email});
    if(existingUser) return res.status(400).json({message: 'User already exists.'});

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const newUser = {firstName, lastName, email, password: hashedPassword, createdAt: new Date() };
    const result = userCollection.insertOne(newUser);

    // Create a token

    const token = jwt.sign({id: (await result).insertedId, email}, JWT_SECRET, {expiresIn: '1h'}); 

    res.json({token});
}

// Login an existing user
const login = async (req: Request, res: Response): Promise<any> => {
    const{email, password} = req.body;

    // Find user by email 
    const user = await userCollection.findOne({email});

    if(!user) return res.status(400).json({message: 'Invalid credentials'});

    // Verify password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect) return res.status(400).json({message: 'Invalid credentials'});

    // create a token
    const token = jwt.sign({id: user._id, email}, JWT_SECRET, {expiresIn: '1h'});

    res.json({token});
};

export{register, login}