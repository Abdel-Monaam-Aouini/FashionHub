import express from 'express';
import cors from 'cors';

import { authRouter } from './auth/auth.router';
import { usersRouter } from './users/users.router';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/api/users', usersRouter)
  .use('/api/auth', authRouter);

export { app };
