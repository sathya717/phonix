const express = require("express");
const cors = require("cors");
const fs = require("fs");
const UserRouter = require("./routes/UserRouter");
const AuthRouter = require("./routes/AuthRouter");
const ItemRouter = require("./routes/ItemRouter");
const CartRouter = require("./routes/CartRouter");
require("./utils/db");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    site: "phonix",
    msg: "A Electronics marketplace",
    API_VERSION: "0.0.3"
  });
});

app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/items", ItemRouter);
app.use("/api/cart", CartRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
