import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  /* eslint no-var: off */
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient({ log: ["query", "info", "warn", "error"] });
}

/* eslint prefer-const: off */
db = global.__db;

export { db };
