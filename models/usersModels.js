// models/Utilisateur.js
import db from '../config/db.js';

const Utilisateur = {
  create: (name, email, prenom, age, sexe, gout_musical, boisson = 'client', callback) => {
    const sql = 'INSERT INTO users (name, prenom, email, age, sexe, gout_musical, boisson) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, prenom, email, age, sexe, gout_musical, boisson], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results[0]);
    });
  },

  update: (id, name, email, prenom, age, sexe, gout_musical, boisson, callback) => {
    const sql = 'UPDATE users SET name = ?, prenom = ?, email = ?, age = ?, sexe = ?, gout_musical = ?, boisson = ? WHERE id = ?';
    db.query(sql, [name, prenom, email, age, sexe, gout_musical, boisson, id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },
};

export default Utilisateur;
