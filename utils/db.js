const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/electro",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Connected to DB`);
  }
);
