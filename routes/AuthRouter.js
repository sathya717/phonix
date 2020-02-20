const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");
/* 
    Description : Authenticate a user
    Endpoint    : POST /api/auth
    Access      : Public
*/

router.post(
  "/",
  [
    check("username", "Enter a username")
      .not()
      .isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      console.log("ho");
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Username or Password" }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Username or Password" }] });
      }
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(payload, secret, { expiresIn: 36000000 }, (err, token) => {
        if (err) {
          throw err;
        }
        res.status(200).json({ token });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errors: [{ msg: "500 Server Error" }] });
    }
  }
);

module.exports = router;
