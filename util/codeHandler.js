// Code 5xx
exports.handle500Error = (res) => {
  res.status(500).json({ error: "Erreur interne du serveur" });
};

// Code 4xx
exports.handle401Error = (res) => {
  res.status(401).json({ error: "Jeton invalide" });
};

exports.handle404Personnalisable = (res, message) => {
  res.status(404).json({ message });
};

// Code 2xx
exports.handle200Success = (res, data) => {
  res.status(200).json(data);
};

exports.handle201Success = (res, data) => {
  res.status(201).json(data);
};
