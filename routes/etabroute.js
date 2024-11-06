
import express from 'express';
import {
  createEtablissement,
  getEtablissements,
  getEtablissementById,
  updateEtablissement,
  deleteEtablissement
} from '../controllers/etabcontroller.js';
import authenticateToken  from '../middleware/auth.js'

const etabRoute = express.Router();

// Route pour créer un nouvel établissement
etabRoute.post('/etablissements',authenticateToken, createEtablissement);

// Route pour obtenir tous les établissements
etabRoute.get('/etablissements', getEtablissements);

// Route pour obtenir un établissement par ID
etabRoute.get('/etablissements/:id', getEtablissementById);

// Route pour mettre à jour un établissement par ID
etabRoute.put('/etablissements/:id',authenticateToken, updateEtablissement);

// Route pour supprimer un établissement par ID
etabRoute.delete('/etablissements/:id',authenticateToken, deleteEtablissement);

export default etabRoute;
