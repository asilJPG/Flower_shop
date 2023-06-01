const mysql = require("mysql2");
console.log(process.env.HOST);
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

module.exports = connection;
