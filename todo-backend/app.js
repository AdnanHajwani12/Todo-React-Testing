require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", todoRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "🚀 Todo backend is running!" });
});

module.exports = app;
