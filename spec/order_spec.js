import { handleInput, clearInput } from '../Order.js';

describe("Tests all stages of a takeout order", function () {

    beforeEach(function () {
        clearInput();
    });

    it("test welcome", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Dream Takeout.");
    });

    it("test ordering item", function () {
        handleInput("hello");
        const aResults = handleInput("chicken fried rice");
        expect(aResults[0]).toContain("What size");
    });

    it("test size selection", function () {
        handleInput("hello");
        handleInput("chicken fried rice");
        const aResults = handleInput("medium");
        expect(aResults[0]).toContain("extra egg");
    });

    it("test upsell drink", function () {
        handleInput("hello");
        handleInput("chicken fried rice");
        handleInput("medium");
        const aResults = handleInput("yes");
        expect(aResults[0]).toContain("added to your order");
    });

});