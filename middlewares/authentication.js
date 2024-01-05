const jwt = require("jsonwebtoken");
const UserService = require("../domains/users/user.service");

const userService = new UserService();

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.json({
        statusCode: 401,
        status: "faild",
        error: "token not defined!",
      });
    }
    const token = authorization.split(" ")[1];
    console.log("token", token);
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    if (payload) {
      const username = payload.username;
      const user = await userService.getUserByUsername(username);
      req.user = user;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
