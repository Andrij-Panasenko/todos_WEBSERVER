const { Schema, model } = require("mongoose")

const todosSchema = new Schema({
  text: String,
})

const Todos = model("todos", todosSchema);

module.exports = Todos;
