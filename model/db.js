'use strict';
require('dotenv').config();
const mysql = require('mysql2');

//app.get('/', function (req, res) {
//    res.send('<h1>Welcome to my first app :-)</h1>')
//});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  //password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

module.exports = connection.promise();

