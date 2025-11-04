const mongoose = require("mongoose");
const Todo = require("../../models/todoModel");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Todo Model Test", () => {
  it("should create & save a todo successfully", async () => {
    const todo = new Todo({ title: "Test Todo" });
    const savedTodo = await todo.save();

    expect(savedTodo._id).toBeDefined();
    expect(savedTodo.title).toBe("Test Todo");
    expect(savedTodo.completed).toBe(false);
  });

  it("should fail if title is missing", async () => {
    const todoWithoutTitle = new Todo({});
    let err;
    try {
      await todoWithoutTitle.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.title).toBeDefined();
  });
});
