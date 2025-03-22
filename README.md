# String Calculator

A simple Node.js application that implements a string-based calculator, supporting custom delimiters and handling newline-separated numbers.

## ⚙️ Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 14 or higher) installed.  
  Check your Node.js version:
  ```sh
  node -v

If not installed, download it from: Node.js Official Site

npm (Node Package Manager) is included with Node.js.
Check npm version: npm -v

## 🚀 Features

- Accepts a comma `,` or newline `\n` as default delimiters.
- Supports custom delimiters using `//[delimiter]\n[numbers]` syntax.
- Throws an exception for negative numbers, listing all negative numbers found.
- Allows any number of inputs.

---

## 📦 Installation

To set up the project on your local machine:

1. **Clone the repository**  
   ```sh
   git clone https://github.com/lalit9456001913/string-calculator.git
   cd string-calculator
2. **Install Dependecies**  
   npm install

## 🛠 Usage

Run the calculator from the command line:


Handling Commas Delimiters
    node index.js "1,2,3"
    ✅ Expected Output: Result: 6

Handling New Lines
    node index.js "1\n2,3"
    ✅ Expected Output: Result: 6
    
Using Custom Delimiters
    node index.js "//;\n1;2;3"
    ✅ Expected Output: Result: 6

Handling Negative Numbers
    node index.js "-1,2,-3"
    ❌ Expected Output: Error: Negative numbers not allowed: -1, -3



✅ Running Tests
This project uses Mocha and Chai for unit testing.

Run All Tests
  npm test

Example Output

  String Calculator
    ✓ should return 0 for an empty string
    ✓ should return the sum for numbers separated by commas
    ✓ should return the sum for numbers separated by new lines
    ✓ should support custom delimiters
    ✓ should throw an error for negative numbers
