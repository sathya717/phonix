const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Cart = require("../models/Cart");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");

/*
    Description : Get items of  cart
    Endpoint    : POST /api/cart/:id
    Access      : Private
*/

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findById(id).populate("items");
    if (!cart) return res.json({ errors: "Cart does not exist" });
    if (req.user.id.toString() === cart.owner.toString()) {
      return res.json({ cart });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: "Server Error" });
  }
});

/*
    Description : Add a item to cart
    Endpoint    : POST /api/cart/:id/item/:iid
    Access      : Private

    TODO : 
      -- Users cant add their own items to cart
*/
router.post("/:id/item/:iid", authMiddleware, async (req, res) => {
  try {
    const { id, iid } = req.params;
    const cart = await Cart.findById(id);
    if (!cart) {
      return res.json({ errors: "Cart does not exist" });
    }
    if (req.user.id.toString() === cart.owner.toString()) {
      cart.items = [...cart.items, iid];
      await cart.save();
      return res.json({ status: "Success", cart });
    }
    return res.json({ errors: "Unauthorized Access" });
  } catch (err) {
    return res.status(500).json({ errors: "Server Error" });
  }
});

/*
    Description : Remove a item to cart
    Endpoint    : PUT /api/cart/:id/item/:iid
    Access      : Private
*/
router.put("/:id/item/:iid", authMiddleware, async (req, res) => {
  try {
    const { id, iid } = req.params;
    const cart = await Cart.findById(id);
    if (!cart) {
      return res.json({ errors: "Cart does not exist" });
    }
    if (req.user.id.toString() === cart.owner.toString()) {
      cart.items = cart.items.filter(item => item.toString() !== iid);
      await cart.save();
      return res.json({ status: "Success", cart });
    }
    return res.json({ errors: "Unauthorized Access" });
  } catch (err) {
    return res.status(500).json({ errors: "Server Error" });
  }
});

module.exports = router;
