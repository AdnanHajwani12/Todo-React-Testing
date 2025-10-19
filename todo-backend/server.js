// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json()); // Parses JSON bodies

// const connectdb = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://Adnan-Devops:Devops-Adnan@todoappdb.knum0w5.mongodb.net/?retryWrites=true&w=majority&appName=Todoappdb"
//     );
//     console.log("mongo connected");
//   } catch (error) {
//     console.error("Mongodb conn failed", error);
//   }
// };

// // Routes
// app.get("/", (req, res) => {
//   console.log("Serving / route with updated message");
//   res.status(200).json({ message: "Hello from UPDATED JSON server! check postman once again" });
// });

// connectdb();

// // Start server
// const PORT = 3005;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// #------------------------------------------------------

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// const Todo = require("./models/todoModel");

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://Adnan-Devops:Devops-Adnan@todoappdb.knum0w5.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Todoappdb");
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error);
//   }
// };


// // Route to add a todo
// app.post("/add-todo", async (req, res) => {
//   const { title } = req.body;

//   if (!title || !title.trim()) {
//     return res.status(400).json({ error: "Title is required" });
//   }

//   try {
//     const newTodo = new Todo({ title });
//     await newTodo.save();
//     console.log("Todo saved:", newTodo);
//     res.status(201).json({ message: "Todo saved successfully", todo: newTodo });
//   } catch (error) {
//     console.error("Error saving todo:", error);
//     res.status(500).json({ error: "Failed to save todo" });
//   }
// });

// // Start server
// connectDB();
// const PORT = 3005;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Import Todo model
const Todo = require("./models/todoModel");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Adnan-Devops:Devops-Adnan@todoappdb.knum0w5.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Todoappdb"
    );
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

// Test root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "🚀 Todo backend is running!" });
});

// Add a new todo
app.post("/add-todo", async (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const newTodo = new Todo({ title });
    await newTodo.save();
    console.log("✅ Todo saved:", newTodo);
    res.status(201).json({ message: "Todo saved successfully", todo: newTodo });
  } catch (error) {
    console.error("❌ Error saving todo:", error);
    res.status(500).json({ error: "Failed to save todo" });
  }
});

// Get all todos
app.get("/get-todo", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error("❌ Error fetching todos:", error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// Start server after DB connection
const PORT = 3005;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
