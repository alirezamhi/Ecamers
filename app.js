const express = require("express");
const dotenv = require("dotenv").config();
const { userRouter } = require("./domains/users/user.module");
const { productRouter } = require("./domains/products/product.module");

//
const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());

// Request's
app.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/api/user", userRouter);
app.use("/api/task", productRouter);

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
