import supertest from "supertest";
import { app } from "../../app";

const request = supertest.agent(app);

describe("GET /api/users", () => {
  let token = "";

  beforeAll(async () => {
    const result = await request
      .post("/api/auth/login")
      .send({ email: "admin@admin.com", password: "admin-password" });

    token = result.body.token;
  });

  it("respond correctly !", async () => {
    const result = await request
      .get("/api/users/")
      .set("Authorization", `Bearer ${token}`);

    expect(result.status).toBe(200);
  });
});
