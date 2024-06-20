const User = require("../model/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    if (users.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur du serveur interne" });
  }
};
