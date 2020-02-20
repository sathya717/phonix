const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Cart = require("../models/Cart");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");

/*
    Description : Get current user
    Endpoint    : GET /api/user
    Access      : Private
*/
router.get("/", authMiddleware, async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id)
      .select(["-password"])
      .populate("cart");
    if (!user) {
      return res.json({ errors: "No User Found" });
    }
    return res.json({ user });
  } catch (err) {
    return res.status(500).json({ errors: "Internal Server Error", err });
  }
});

/* 
    Description : Create a new user
    Endpoint    : POST /api/user
    Access      : Public
*/
router.post(
  "/",
  [
    check("username", "Enter a username")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
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
      const { username, email, password } = req.body;
      const newUser = new User();
      const newCart = new Cart();
      newCart.owner = newUser._id;
      newUser.username = username;
      newUser.email = email;
      newUser.cart = newCart._id;
      const salt = await bcrypt.genSalt(8);
      const hashedPassword = await bcrypt.hash(password, salt);
      newUser.password = hashedPassword;
      await newUser.save();
      await newCart.save();
      res.status(200).json({ status: "Success", status_code: 200 });
    } catch (err) {
      return res.status(500).json({ errors: "Internal Server Error", err });
    }
  }
);

/*
    Description : Get a  user 
    Endpoint    : GET /api/user/:id
    Access      : Private
*/
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select(["-password"]);
    if (!user) {
      return res.json({ errors: "No User Found" });
    }
    return res.json({ user });
  } catch (err) {
    return res.status(500).json({ errors: "Internal Server Error", err });
  }
});

/* 
    Description : Update a  user
    Endpoint    : PUT /api/user/:id
    Access      : Private
*/

module.exports = router;
