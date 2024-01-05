const db = require("../../db");
const bc = require("bcrypt");
const { createToken } = require("../../utils");

// exports.register = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     console.log(username , password , "wwwwwwwwwwwwwwwwwwwww");
//     const now = Date.now();
//     const salt = await bc.genSalt(10);
//     const hashedPasssword = await bc.hash(password, salt);
//     const user = await db.user.create({
//       data: { username, password: hashedPasssword },
//     });

//     return res.json({ msg: `user ${user.username} registerd` });
//   } catch (e) {
//     next(e);
//   }
// };



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
