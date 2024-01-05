const db = require("../db");
const bc = require("bcrypt");
const { createToken } = require("../utils");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.user.findFirstOrThrow({ where: { username } });

    console.log("USER: ", user);

    if (!user) {
      throw new Error("username or password is incorrect");
    }

    console.log("Stored Password: ", user.password);
    console.log("Entered Password: ", password);

    const verified = await bc.compare(password, user.password);
    console.log("Password Comparison Result: ", verified);

    if (!verified) {
      throw new Error("username or password is incorrect");
    }

    const token = await createToken(
      { username },
      process.env.SECRET_KEY,
      process.env.REFRESH_TOKEN_TIME,
      process.env.ACCESS_TOKEN_TIME,
      username
    );
  
    return res.json({
      user,
      token,
    });
  } catch (e) {
    next(e);
  }
};
