const Todo = require("../models/todoModel");


exports.addTodo = async (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.status(201).json({ message: "Todo added successfully", todo: newTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to add todo" });
  }
};


exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};
