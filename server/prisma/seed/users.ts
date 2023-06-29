import { User } from "@prisma/client";

export const users: User[] = [
  {
    id: 1,
    name: "admin",
    email: "admin@admin.com",
    password: "admin-password",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
];
