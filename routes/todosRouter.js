const express = require("express")
const todosControllers = require('../controllers/todosControllers')
const todosRouter = express.Router();

todosRouter.get("/", todosControllers.getAllTodos);
todosRouter.delete('/:id', todosControllers.geleteTodos)

module.exports = todosRouter;