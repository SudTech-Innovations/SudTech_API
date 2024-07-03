const User = require("../model/user");
const codeHandler = require("../util/codeHandler");
const jwt = require("jsonwebtoken");

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

exports.updateUser = async (req, res) => {
  const { theme } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  const userId = decodedToken.userId;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return codeHandler.handle404User(res);
    }

    await user.update({ theme });
    codeHandler.handle200Success(res, { theme: user.theme });
  } catch (error) {
    console.error(error);
    codeHandler.handle500Error(res);
  }
};
