import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    try {
      const response = await fetch("http://localhost:3005/add-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: todo }) // send 'title' as per your backend schema
      });

      const data = await response.json();
      console.log("Response received:", data);
      setTodo(""); // Clear input after successful submission
    } catch (error) {
      console.error("Error occurred while adding todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
