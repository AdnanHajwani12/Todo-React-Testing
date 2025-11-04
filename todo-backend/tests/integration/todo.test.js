jest.setTimeout(60000);

const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../app');
const Todo = require('../../models/todoModel');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Todo Routes - Integration Tests', () => {
  test('POST /add-todo should add a new todo', async () => {
    const res = await request(app)
      .post('/add-todo')
      .send({ title: 'Integration Test Todo' });

    expect(res.status).toBe(201);
    expect(res.body.todo.title).toBe('Integration Test Todo');
  });

  test('GET /get-todo should return all todos', async () => {
    await Todo.create({ title: 'Sample Todo' });

    const res = await request(app).get('/get-todo');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
