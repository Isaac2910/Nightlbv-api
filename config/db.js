// config/database.js
import  mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'utilisateur', // Remplace par ton nom d'utilisateur MySQL
  password: '', // Remplace par ton mot de passe MySQL
  database: '', // Remplace par le nom de ta base de données
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');
});

export default db;
