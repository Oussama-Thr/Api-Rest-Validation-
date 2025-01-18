const axios = require("axios");
const fs = require("fs");
const SwaggerParser = require("swagger-parser");

async function generateTests(filePath) {
  const apiSpec = await SwaggerParser.validate(filePath);
  const baseUrl = apiSpec.servers?.[0]?.url || "http://localhost:3000";
  const paths = apiSpec.paths;

  let testFileContent = `
const axios = require("axios");

describe("API Tests", () => {
`;

  for (const [endpoint, methods] of Object.entries(paths)) {
    for (const [method, details] of Object.entries(methods)) {
      const testName = `${method.toUpperCase()} ${endpoint}`;
      testFileContent += `
  test("${testName}", async () => {
    const response = await axios.${method}(\`${baseUrl}${endpoint}\`);
    expect(response.status).toBe(200); // Adjust based on expected status codes
  });
`;
    }
  }

  testFileContent += `
});
`;

  // Save the test file
  fs.writeFileSync("./api.test.js", testFileContent, "utf8");
  console.log("Test file generated: api.test.js");
}

// Example usage
(async () => {
  const filePath = "./api_spec.yaml"; // Replace with your file path
  await generateTests(filePath);
})();
