const { default: TestRunner } = require("jest-runner");
const addTwoNums = require('./add-two-nums');

// Write the test
test('retuns the addition of two nums', () => {
    expect(addTwoNums(2, 3)).toBe(5);
})