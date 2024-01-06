const expect = require("chai").expect;
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middleware/is-auth");

// it("should throw an error if Authorization header is not present", () => {
//   const req = {
//     get: function () {
//       return null;
//     },
//   };
//   expect(authMiddleware(req, {}, () => {})).to.throw("Not authenticated.");
// });

it("should throw an error if the token cannot be verified", () => {
  const req = {
    get: function (headerName) {
      if (headerName === "Authorization") {
        return "Bearer xyzsdfghjkas";
      }
    },
  };
  expect(authMiddleware(req, {}, () => {})).to.throw();
});

it("should throw an error one String present", function () {
  const req = {
    get: function (headerName) {
      return "Bearer niiahfiuaurbjahrher";
    },
  };

  jwt.verify = function () {
    return { userId: "23as" };
  };
  authMiddleware(req, {}, () => {});
  expect(req).to.have.property("userId");
});
