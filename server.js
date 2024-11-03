import express from 'express';
import userRoute from './routes/userRoute.js';
import etabRoute from './routes/etabroute.js';

const app = express();
const port = 3007;

// Middleware pour parser les JSON
app.use(express.json());

// Routes pour les utilisateurs et les établissements
app.use('/users', userRoute);
app.use('/etablissements', etabRoute);

// Gestion des routes non trouvées
app.use((req, res, next) => {
    res.status(404).send({ message: "Route non trouvée" });
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Erreur serveur" });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

