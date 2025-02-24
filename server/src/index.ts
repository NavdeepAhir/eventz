import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import todoRoutes from './routes/todoRouter';
import authRoutes from './routes/authRouter';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Register the routes
app.use('/', authRoutes);
app.use('/', todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
