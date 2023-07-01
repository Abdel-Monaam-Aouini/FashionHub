import express from 'express';
import { Request, Response } from 'express';

import { LoginInput, LoginSchema } from './dto/login.dto';
import { validate } from '../middlewares/validate';
import { authService } from './auth.service';

export const authRouter = express.Router();

authRouter.post(
  '/login',
  validate(LoginSchema),
  async (req: Request<LoginInput['body']>, res: Response) => {
    const { email } = req.body;
    const result = await authService.findOne({ email });

    const token = 'qjbfkjqbfkjbhakjzgrilgAZHFMHÎJZAFIJ';
    return res.status(200).send({ ...result, token });
  },
);
