import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET; 

// Middleware d'authentification
export const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: "Accès refusé : Aucun token fourni" });
    }

    const token = authHeader.split(' ')[1]; // Récupère le token après "Bearer"
    if (!token) {
      return res.status(401).json({ message: "Accès refusé : Format de token invalide" });
    }

    // Vérification du token
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token invalide ou expiré" });
      }

      req.user = user; // Stocke les informations de l'utilisateur dans req.user
      next(); // Passe au middleware ou à la route suivante
    });
  } catch (error) {
    console.error("Erreur lors de l'authentification :", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

