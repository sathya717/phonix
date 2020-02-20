const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ errors: [{ msg: "No token, authorization denied" }] });
  }
  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ errors: [{ msg: "No token, authorization denied" }] });
  }
};
