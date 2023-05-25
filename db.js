const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'pruebaafex.cttdzpzdslty.us-east-2.rds.amazonaws.com', // Cambia esto si tu servidor MySQL está en una dirección diferente
  user: 'admin',
  password: 'prueba2161',
  database: 'pruebaafex', // Reemplaza esto con el nombre de tu base de datos
  charset: 'utf8mb4' 
});

module.exports = connection;