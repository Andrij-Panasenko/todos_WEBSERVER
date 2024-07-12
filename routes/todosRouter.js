const express = require("express")
const todosControllers = require('../controllers/todosControllers')
const todosRouter = express.Router();

todosRouter.get("/", todosControllers.getAllTodos);

module.exports = todosRouter;