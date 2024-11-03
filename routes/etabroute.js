import express from 'express';
import {
  createEtablissement,
  getEtablissements,
  getEtablissementById,
  updateEtablissement,
  deleteEtablissement
} from '../controllers/etabcontroller.js';

const router = express.Router();

router.post('/', createEtablissement);
router.get('/', getEtablissements);
router.get('/:id', getEtablissementById);
router.put('/:id', updateEtablissement);
router.delete('/:id', deleteEtablissement);

export default router;
