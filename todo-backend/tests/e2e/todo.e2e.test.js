jest.setTimeout(60000); // 60 seconds

const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
});


describe('E2E - Todo App', () => {
  test('should verify API health', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toMatch(/Todo backend is running/i);
  });

  test('should create and fetch todos end-to-end', async () => {
    await request(app).post('/add-todo').send({ title: 'E2E Todo' });

    const res = await request(app).get('/get-todo');
    expect(res.status).toBe(200);
    expect(res.body.some(t => t.title === 'E2E Todo')).toBe(true);
  });
});
