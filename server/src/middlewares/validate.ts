import { NextFunction, Request, Response } from 'express';

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (err) {
      return res.status(400).send(err);
    }
  };
