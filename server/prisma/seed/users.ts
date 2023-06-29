import { Prisma } from "@prisma/client";

export const users: Prisma.UserCreateInput[] = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: "admin-password",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
];
