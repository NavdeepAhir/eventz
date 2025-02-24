import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DATABASE_URL || '';
const client = new MongoClient(uri);

const connectDB = async () => {
    try{
        await client.connect();
        console.log('MongoDB connected Successfully.');
    } catch(error){
        console.error("Error connected to MongoDB: ", error);
        process.exit(1);
    }
};

const db = client.db('ToDo');

const todosCollection = db.collection('todos');
const userCollection = db.collection('users');

export {connectDB, client, todosCollection, userCollection};