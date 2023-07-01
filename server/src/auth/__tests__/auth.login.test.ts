import supertest from 'supertest';
import { app } from '../../app';

const request = supertest.agent(app);

describe('POST /api/auth/login', () => {
  it('respond correctly !', async () => {
    const result = await request
      .post('/api/auth/login')
      .send({ email: 'admin@admin.com', password: 'admin-password' });

    expect(result.status).toBe(200);
    expect(result.body.id).toBe(1);
    expect(result.body.name).toBe('admin');
    expect(result.body.email).toBe('admin@admin.com');
  });
});
