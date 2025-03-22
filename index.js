const { add } = require("./calculator");

let input = process.argv[2] || ""; 
input = input.replace(/\\n/g, "\n"); 

try {
    console.log("Result:", add(input));
} catch (error) {
    console.error("Error:", error.message);
}
