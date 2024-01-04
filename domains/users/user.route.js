const express = require("express");
const { userList, register, login } = require("./users.controller");

const router = express.Router();

router.get("/users", userList);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
