const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const connectDB = require("../db");

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("🧪 Todo API Tests (Real MongoDB)", () => {
  test("POST /add-todo should create a todo", async () => {
    const res = await request(app)
      .post("/add-todo")
      .send({ title: "Test Todo" });

    expect(res.statusCode).toBe(201);
    expect(res.body.todo.title).toBe("Test Todo");
  });

  test("GET /get-todo should return todos array", async () => {
    const res = await request(app).get("/get-todo");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
