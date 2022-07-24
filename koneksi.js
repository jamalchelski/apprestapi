var mysql = require("mysql");

// buat koneksi
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ista25",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("data base terkoneksi");
});

module.exports = conn;
