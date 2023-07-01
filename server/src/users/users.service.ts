import { Prisma } from '@prisma/client';
import { db } from '../utils/db.server';

class UsersService {
  async findAll() {
    return db.user.findMany();
  }

  async create(input: Prisma.UserCreateInput) {
    return db.user.create({ data: input });
  }

  async update(id: number, input: Prisma.UserUpdateInput) {
    return db.user.update({
      where: { id },
      data: input,
    });
  }

  async findOne(id: number) {
    return db.user.findFirst({ where: { id } });
  }

  async delete(id: number) {
    return db.user.delete({ where: { id } });
  }
}

export const usersService = new UsersService();
