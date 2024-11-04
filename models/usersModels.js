import db from '../config/db.js';

const Utilisateur = {
  create: async (nom, email, prenom, age, sexe, gout_musical, boisson = 'client') => {
    const sql = 'INSERT INTO users (name, prenom, email, age, sexe, gout_musical, boisson) VALUES (?, ?, ?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.query(sql, [nom, prenom, email, age, sexe, gout_musical, boisson], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  findAll: async () => {
    const sql = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      });
    });
  },

  update: async (id, nom, email, prenom, age, sexe, gout_musical, boisson) => {
    const sql = 'UPDATE users SET name = ?, prenom = ?, email = ?, age = ?, sexe = ?, gout_musical = ?, boisson = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [nom, prenom, email, age, sexe, gout_musical, boisson, id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  delete: async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
};

export default Utilisateur;
