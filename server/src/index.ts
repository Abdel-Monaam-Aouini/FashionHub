import { app } from "./app";

const PORT = 3000;

try {
  app.listen(3000, () => {
    console.log("🚀 ~ app.listen ~ PORT:", `http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("🚀 ~ server ~ error:", error.message);
}
