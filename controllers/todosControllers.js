const Todos = require("../models/todos");
const controllerWrapper = require("../helpers/controllerWrapper");
const httpError = require("../helpers/httpError");

const getAllTodos = async (_, res) => {
  const result = await Todos.find();
  if (!result) throw httpError(404, "Todos not found");
  res.status(200).json(result);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ deleteTodo ~ id:", id)

  const result = await Todos.findOneAndDelete(id);
  if (!result) throw httpError(404);

  res.status(200).json(result);
};

module.exports = {
  getAllTodos: controllerWrapper(getAllTodos),
  geleteTodos: controllerWrapper(deleteTodo),
};
