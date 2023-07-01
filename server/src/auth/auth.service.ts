import { Prisma } from '@prisma/client';
import { db } from '../utils/db.server';

class AuthService {
  async findOne(input: Prisma.UserWhereInput) {
    return db.user.findFirst({
      where: { email: input.email },
    });
  }
}

export const authService = new AuthService();
