const db = require("../../db");
const bc = require("bcrypt");
const { createToken } = require("../../utils");

exports.userList = async (req, res) => {
  // TODO: service!
  const users = await db.user.findMany({});
  // res.send("done");
  res.json(
    users.map((user) => ({
      username: user.username,
      age: user.age,
      updatedAt: user.updatedAt,
    }))
  );
};
