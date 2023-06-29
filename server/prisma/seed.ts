import { db } from "../src/utils/db.server";
import { users } from "./seed/users";


async function seed() {
  await Promise.all(users.map((user) => db.user.create({ data: user })));
}

seed();
