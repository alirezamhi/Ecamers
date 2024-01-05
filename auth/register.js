const db = require("../db");
const bc = require("bcrypt");

exports.register = async (req, res, next) => {
  try {
    const now = Date.now();
    const { username, password, name } = req.body;
    const salt = await bc.genSalt(10);
    const hashedPassword = await bc.hash(password, salt);
    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword,
        name,
      },
    });

    return res.json({ msg: `user ${user.username} registered` });
  } catch (e) {
    next(e);
  }
};
