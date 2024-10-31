// models/Etablissement.js
import db from '../config/db.js';

const Etablissement = {
  create: (nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service, callback) => {
    const sql = 'INSERT INTO Etablissement (nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM Etablissement';
    db.query(sql, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM Etablissement WHERE id = ?';
    db.query(sql, [id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results[0]);
    });
  },

  update: (id, nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service, callback) => {
    const sql = 'UPDATE Etablissement SET nomEtablissement = ?, addresse = ?, quartier = ?, tel = ?, horaires = ?, tarif = ?, ambiance = ?, service = ? WHERE id = ?';
    db.query(sql, [nomEtablissement, addresse, quartier, tel, horaires, tarif, ambiance, service, id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM Etablissement WHERE id = ?';
    db.query(sql, [id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  },
};

export default Etablissement;
