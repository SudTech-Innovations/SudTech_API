const User = require("../model/user");
const codeHandler = require("../util/codeHandler");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    if (users.length === 0) {
      return codeHandler.handle404User(res);
    }
    codeHandler.handle200Success(res, users);
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
};
