import { todosCollection } from "../config/db";

function validateTodoData(todoData: any) {
    if (typeof todoData.title !== 'string' || todoData.title.trim() === '') {
      throw new Error("Title is required and must be a string.");
    }
    if (todoData.description && typeof todoData.description !== 'string') {
      throw new Error("Description must be a string.");
    }
    if (typeof todoData.completed !== 'boolean') {
      throw new Error("Completed must be a boolean.");
    }
  }
  
  // Usage in addTodo
  async function addTodo(todoData: { title: string; description?: string; completed: boolean }) {
    validateTodoData(todoData);
    const newTodo = {
      ...todoData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const result = await todosCollection.insertOne(newTodo);
    return result.insertedId;
  }
  