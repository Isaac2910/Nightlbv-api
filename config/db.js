import mysql from 'mysql2'; 

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'MocheGang',
    password: 'root',
    database: 'night_club'
});

connect.connect((err) => {
    if (err) {
        console.error('Erreur de connexion a la base de donnees:', err);
        return;
    }
    console.log('Connexion a la base des donnees.');
});

export default connect;