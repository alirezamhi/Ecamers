const db = require("../db");
const bc = require("bcrypt");

exports.register = async (req, res, next) => {
  try {
    const now = Date.now();
    const { username, password, name } = req.body;
    if (!username) {
      return res.json({
        statusCode: 404,
        status: "faild",
        message: "username is requerid !",
      });
    }

    if (!password) {
      return res.json({
        statusCode: 404,
        status: "faild",
        message: "password is requerid !",
      });
    }

    const salt = await bc.genSalt(10);
    const hashedPassword = await bc.hash(password, salt);
    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword,
        name,
      },
    });

    return res.json({
      statusCode: 402,
      status: "succuss",
      message: "user created !",
      data: [user],
    });
  } catch (e) {
    next(e);
  }
};
