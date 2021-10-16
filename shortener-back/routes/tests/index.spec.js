const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);

const rightUrl = "https://www.xataka.com";
const wrongUrl = "xataka.com";

describe("GET /test", () => {
  it("Gets the test endpoint", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Testing");
  });
});
describe("POST /shorter", () => {
  it("Should responds OK with a right request", async () => {
    const response = await request.post("/shorter").send({ url: rightUrl });
    expect(response.status).toBe(200);
  });
  it("Should responds KO with a wrong request", async () => {
    const response = await request.post("/shorter").send({ url: wrongUrl });
    expect(response.status).toBe(400);
  });
});
