const { expect } = require("chai");
const { add } = require("../calculator");

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
});
