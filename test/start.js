const expect = require("chai").expect;

it("add 1 plus 3 equals 5", () => {
  const num = 1;
  const num2 = 3;
  expect(num + num2).to.equal(4);
});

it("add 1 plus 3 not equal to 5", () => {
  const num = 1;
  const num2 = 3;
  expect(num + num2).not.to.equal(5);
});
