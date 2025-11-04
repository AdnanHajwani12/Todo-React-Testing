
function addTodo(todos, title) {
  const newTodo = { title, completed: false };
  todos.push(newTodo);
  return todos;
}

module.exports = { addTodo };
