// tests/app.test.js
import request from 'supertest';
import app from '../server.js';

describe('API Endpoints', () => {
  test('GET /productos should return JSON array', async () => {
    const response = await request(app).get('/productos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET unknown route returns 404', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404);
  });
});
