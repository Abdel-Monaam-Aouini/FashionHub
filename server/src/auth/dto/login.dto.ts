import { TypeOf, z } from 'zod';

export const LoginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

export type LoginInput = TypeOf<typeof LoginSchema>;
