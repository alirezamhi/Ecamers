const express = require("express");
const { userList } = require("./users.controller");
const { register } = require("../../auth/register");
const { login } = require("../../auth/login");

const router = express.Router();

router.get("/users", userList);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
