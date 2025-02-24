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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function validateTodoData(todoData) {
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
function addTodo(todoData) {
    return __awaiter(this, void 0, void 0, function* () {
        validateTodoData(todoData);
        const newTodo = Object.assign(Object.assign({}, todoData), { createdAt: new Date(), updatedAt: new Date() });
        const result = yield db_1.todosCollection.insertOne(newTodo);
        return result.insertedId;
    });
}
