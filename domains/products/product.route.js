const express = require("express");
const { authentication } = require("../../middlewares/auth.module");
const { productList } = require("./product.controller");
const router = express.Router();

router.get("/productList", authentication, productList);

module.exports = router;
