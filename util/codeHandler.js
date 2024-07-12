// Code 5xx
exports.handle500Error = (res) => {
  res.status(500).json({ error: "Erreur interne du serveur" });
};

// Code 4xx
exports.handle401Error = (res) => {
  res.status(401).json({ error: "Jeton invalide" });
};

exports.handle403Error = (res) => {
  res.status(403).json({ error: "Accès interdit" });
};

exports.handle404User = (res) => {
  res.status(404).json({ error: "Utilisateur non trouvé" });
};

exports.handle404Gen = (res, req) => {
  res.status(404).json({ error: req + " non trouvé" });
};

// Code 2xx
exports.handle200Success = (res, req) => {
  res.status(200).json(req);
};

exports.handle201Success = (res, req) => {
  res.status(201).json(req);
};

exports.handle204Success = (res) => {
  res.status(204).json({ error: "Pas de contenu" });
};
