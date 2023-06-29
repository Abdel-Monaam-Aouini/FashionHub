import * as dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

try {
  app.listen(PORT, () => {
    console.log("🚀 ~ app.listen ~ PORT:", `http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("🚀 ~ server ~ error:", error.message);
}
