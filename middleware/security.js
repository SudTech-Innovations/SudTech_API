const dotenv = require("dotenv");
dotenv.config();

const getValidationSecret = () => {
  return process.env.SECRET_TOKEN;
};

const verifyBearerToken = async (req, res, next) => {
  try {
    const secret = getValidationSecret();
    const authHeader = req.headers["authorization"];
    if (!authHeader) throw new Error("L'entête d'autorisation est manquante");
    const token = authHeader.split(" ")[1];
    if (!token) throw new Error("Le jeton n'est pas dans le bon format");
    if (token === secret) next();
    else throw new Error("Le jeton est invalide");
  } catch (error) {
    const errorMessage = error.message || "Erreur d'authentification";
    res.status(401).json({ error: errorMessage });
  }
};

module.exports = verifyBearerToken;
