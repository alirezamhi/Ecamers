const express = require("express");
const { authentication } = require("../../middlewares/auth.module");
const { productList } = require("./product.controller");
const router = express.Router();

router.get("/taskList", authentication, productList);
// router.post("/createTask", authentication, createTask);
// router.put("/:taskId", authentication, updateTask);
// router.delete("/:taskId", authentication, deleteTask);

module.exports = router;
