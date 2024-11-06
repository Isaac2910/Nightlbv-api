import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoute from './routes/userRoute.js';
import etabRoute from './routes/etabroute.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 3007;


// Middleware pour parser les JSON
app.use(express.json());
app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

  next();

});


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

// Configuration de la base de données
const prisma = new PrismaClient();

async function connect() {
  try {
    await prisma.$connect();
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }
}

connect();

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

