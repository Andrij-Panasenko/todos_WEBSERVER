const express = require("express")
const todosControllers = require('../controllers/todosControllers')
const todosRouter = express.Router();

todosRouter.get("/", todosControllers.getAllTodos);
todosRouter.post("/", todosControllers.addTodo)
todosRouter.delete('/:id', todosControllers.geleteTodos)

module.exports = todosRouter;