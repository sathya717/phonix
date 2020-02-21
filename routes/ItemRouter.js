const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Item = require("../models/Item");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");

/*
    Description : Create a new Item
    Endpoint    : POST /api/item
    Access      : Private
*/
router.post(
  "/",
  [
    check("name", "Enter a name")
      .not()
      .isEmpty(),
    check("type", "Enter a type : PC / Mobile")
      .not()
      .isEmpty(),
    check("price", "Enter a price")
      .not()
      .isEmpty(),
    check("image", "Enter a image url")
      .not()
      .isEmpty(),
    authMiddleware
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, type, price, image } = req.body;
      const newItem = new Item();
      newItem.name = name;
      newItem.type = type;
      newItem.price = price;
      newItem.image = image;
      newItem.owner = req.user.id;
      await newItem.save();
      return res.json({ status: "Success", item: newItem.populate("user") });
    } catch (err) {
      return res.status(500).json({ erros: "Internal Server Error" });
    }
  }
);

/*
    Description : Get Item by id
    Endpoint    : GET /api/item/:id
    Access      : Private
*/
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id).populate("owner");
    if (!item) {
      return res.json({ errors: "Item not found " });
    }
    return res.json({ item });
  } catch (err) {
    return res.status(500).json({ errors: "Internal Server Error" });
  }
});

/*
    Description : Update Item by id
    Endpoint    : PUT /api/item/:id
    Access      : Private
*/

router.put("/:id", authMiddleware, async (req, res) => {
  const { name, price, type, image, sold, payment_id } = req.body;
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.json({ erros: "Item not found" });
    }
    console.log(item);
    if (item.owner.toString() === req.user.id.toString()) {
      if (name) item.name = name;
      if (price) item.price = price;
      if (type) item.type = type;
      if (image) item.image = image;
      if (sold) item.sold = sold;
      if (payment_id) item.razorPaymentId = payment_id;
      await item.save();
      return res.json({ status: "Success", item });
    }
    return res.json({ errors: "Unauthorized Access" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: "Internal Server Error" });
  }
});

/*
    Description : Delete Item by id
    Endpoint    : DEL /api/item/:id
    Access      : Private
*/

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.json({ erros: "Item not found" });
    }
    if (item.owner.toString() === req.user.id.toString()) {
      await item.remove();
      return res.json({ status: "Success", item });
    }
    return res.json({ errors: "Unauthorized Acesss" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: "Internal Server Error" });
  }
});

/*
    Description : Get all items
    Endpoint    : GET /api/item/
    Access      : Private
*/
router.get("/", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.find({}).populate("owner");
    if (!item) {
      return res.json({ errors: [{ msg: "Item not found " }] });
    }
    return res.json({ items: item });
  } catch (err) {
    return res.status(500).json({ errors: "Internal Server Error" });
  }
});

/*
    Description : Get all items user is selling
    Endpoint    : GET /api/item/all/user/
    Access      : Private
*/

router.get("/all/user", authMiddleware, async (req, res) => {
  console.log("hi");
  try {
    const { id } = req.user;
    const item = await Item.find({ owner: id });
    if (!item) {
      return res.json({ errors: [{ msg: "Item not found " }] });
    }
    return res.json({ items: item });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: "Intersnal Server Error" });
  }
});

module.exports = router;
