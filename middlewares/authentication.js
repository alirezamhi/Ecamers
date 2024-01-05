const jwt = require("jsonwebtoken");
const UserService = require("../domains/users/user.service");

const userService = new UserService();

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      console.log("+++++++++++++", authorization);
      console.log("token niaze");
      //   throw new MyError("token dar header lazeme", 401);
    }
    const token = authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    if (payload) {
      const username = payload.username;
      const user = await userService.getUserByUsername(username);
      req.user = user;
      next();
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
