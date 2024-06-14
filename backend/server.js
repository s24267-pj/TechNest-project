const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

let cartItems = [];

app.use(cors());
app.use(bodyParser.json());

app.get("/cart", (req, res) => {
  res.json(cartItems);
});

app.post("/cart", (req, res) => {
  const product = req.body;
  cartItems.push(product);
  res.status(201).json(cartItems);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
