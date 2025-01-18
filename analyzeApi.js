const SwaggerParser = require("swagger-parser");

async function loadAndValidateSpec(filePath) {
  try {
    const apiSpec = await SwaggerParser.validate(filePath);
    console.log("API specification is valid!");
    return apiSpec;
  } catch (error) {
    console.error("Validation Error:", error.message);
    throw error;
  }
}

// Example usage
(async () => {
  const filePath = "./api_spec.yaml"; // Replace with your file path
  const apiSpec = await loadAndValidateSpec(filePath);
  console.log(JSON.stringify(apiSpec, null, 2));
})();
