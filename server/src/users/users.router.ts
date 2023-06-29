import express from "express";
import { db } from "../utils/db.server";
import { Request, Response } from "express";

export const usersRouter = express.Router();

usersRouter.get("/", async (_req: Request, res: Response) => {
  const result = await db.user.findMany();
  return res.status(200).send(result);
});
