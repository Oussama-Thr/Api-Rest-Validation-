
const axios = require("axios");

describe("API Tests", () => {

  test("GET /users", async () => {
    const response = await axios.get(`http://localhost:3000/users`);
    expect(response.status).toBe(200); // Adjust based on expected status codes
  });

  test("POST /users", async () => {
    const response = await axios.post(`http://localhost:3000/users`);
    expect(response.status).toBe(200); // Adjust based on expected status codes
  });

  test("GET /users/{id}", async () => {
    const response = await axios.get(`http://localhost:3000/users/{id}`);
    expect(response.status).toBe(200); // Adjust based on expected status codes
  });

  test("DELETE /users/{id}", async () => {
    const response = await axios.delete(`http://localhost:3000/users/{id}`);
    expect(response.status).toBe(200); // Adjust based on expected status codes
  });

});
