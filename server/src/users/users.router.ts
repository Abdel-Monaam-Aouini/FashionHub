import express from "express";
import { db } from "../utils/db.server";
import { Request, Response } from "express";
import { usersService } from "./users.service";

export const usersRouter = express.Router();

usersRouter.get("/", async (_req: Request, res: Response) => {
  const result = await usersService.findAll();
  return res.status(200).send(result);
});
