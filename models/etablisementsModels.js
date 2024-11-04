import db from '../config/db.js';

const Etablissement = {
  create: async (nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service) => {
    const sql = 'INSERT INTO Etablissement (nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.query(sql, [nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  findAll: async () => {
    const sql = 'SELECT * FROM Etablissement';
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
    const sql = 'SELECT * FROM Etablissement WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      });
    });
  },

  update: async (id, nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service) => {
    const sql = 'UPDATE Etablissement SET nomEtablissement = ?, addresse = ?, quartier = ?, tel = ?, horaires = ?, tarif = ?, ambiance = ?, service = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service, id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  delete: async (id) => {
    const sql = 'DELETE FROM Etablissement WHERE id = ?';
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

export default Etablissement;
