const { expect } = require("chai");
const { add } = require("../calculator.js");

describe("String Calculator", () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).to.equal(0);
    });

    it("should return the number itself for a single number", () => {
        expect(add("1")).to.equal(1);
    });

    it("should return sum of two numbers", () => {
        expect(add("1,2")).to.equal(3);
    });

    it("should handle new lines between numbers", () => {
        expect(add("1\n2,3")).to.equal(6);
    });
    
    it("should support custom delimiters", () => {
        expect(add("//;\n1;2")).to.equal(3);
    });
    
    it("should throw an error for negative numbers", () => {
        expect(() => add("1,-2,3,-4")).to.throw("Negative numbers not allowed: -2,-4");
    });
    
});
