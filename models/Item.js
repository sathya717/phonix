const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true
  },
  image: { type: String, required: true },
  sold: { type: Boolean, default: false },
  razorPaymentId: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
