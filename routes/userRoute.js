
import express from 'express';
import {
  userLogin,
  userRegister,
  userComments,
  userNote
} from '../controllers/usercontroller.js';


const userRoute = express.Router();

// Route pour l'inscription d'un utilisateur
userRoute.post('/register', userRegister);

// Route pour la connexion d'un utilisateur
userRoute.post('/login', userLogin);

// Route pour ajouter un commentaire par un utilisateur
userRoute.post('/comments', userComments);

// Route pour ajouter une note par un utilisateur
userRoute.post('/note', userNote);

export default userRoute;
