const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  items: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item"
    }
  ]
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
