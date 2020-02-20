const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cart: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Cart"
  },
  purchases: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item"
    }
  ],
  selling: [
    {
      type: mongoose.SchemaTypes.ObjectId
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
