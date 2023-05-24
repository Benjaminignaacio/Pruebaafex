const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto si tu servidor MySQL está en una dirección diferente
  user: 'admin',
  password: 'Afex2161.',
  database: 'pruebaafex', // Reemplaza esto con el nombre de tu base de datos
  charset: 'utf8mb4' 
});

module.exports = connection;