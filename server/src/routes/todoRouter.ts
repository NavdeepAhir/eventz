import express from 'express';

const router = express.Router();

// apply the middleware to protect the routes
// router.get('/todos', authenticateToken, getTodos);
// router.post('/todos', authenticateToken, addTodo);

export default router;