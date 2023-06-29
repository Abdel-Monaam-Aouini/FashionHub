import express from "express";
import { Request, Response } from "express";
import { db } from "../utils/db.server";

import { LoginSchema } from "./dto/login.dto";
import { validate } from "../middlewares/validate";

export const authRouter = express.Router();

authRouter.post(
  "/login",
  validate(LoginSchema),
  async (req: Request, res: Response) => {
    const result = await db.user.findFirst({
      where: { email: req.body.email },
    });

    const token = "qjbfkjqbfkjbhakjzgrilgAZHFMHÎJZAFIJ";
    return res.status(200).send({ ...result, token });
  }
);
