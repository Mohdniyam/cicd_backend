const expect = require("chai").expect;
const User = require("../models/user");
const sinon = require("sinon");
const authcontroller = require("../controllers/auth");

describe("Login-Test Cases", () => {
  it("throw an error if access he database fails", () => {
    sinon.stub(User, "findOne");
    User.findOne.throw();

    const req = {
      body: {
        email: "test@example.",
        password: "test",
      },
    };
    authcontroller
      .login(req, {}, () => {})
      .then((result) => {
        console.log("result", result);
      });
  });

  User.findOne.restore();
});
