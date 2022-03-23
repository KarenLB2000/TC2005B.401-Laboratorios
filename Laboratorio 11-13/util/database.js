// Labotorio 17. Interacción con la base de datos.
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bd_laboratorio',
    password: ''
});

module.exports = pool.promise();