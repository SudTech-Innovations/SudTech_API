const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const verifyBearerToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) throw new Error("L'entête d'autorisation est manquante");

    const token = authHeader.split(" ")[1];
    if (!token) throw new Error("Le jeton n'est pas dans le bon format");

    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if (err) throw new Error("Le jeton est invalide");
      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    const errorMessage = error.message || "Erreur d'authentification";
    res.status(401).json({ error: errorMessage });
  }
};

module.exports = verifyBearerToken;
