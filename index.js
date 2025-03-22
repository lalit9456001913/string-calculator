const { add } = require("./calculator");

const input = process.argv[2] || ""; // Read input from CLI
try {
    console.log("Result:", add(input));
} catch (error) {
    console.error("Error:", error.message);
}
