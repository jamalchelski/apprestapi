"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("aplikasi REST API sudah berjalan", res);
};

//menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function (req, res) {
  connection.query(
    "SELECT * FROM tbl_mahasiswa",
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
//menampilkan semua data mahasiswa berdasarkan id
exports.tampilById = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM tbl_mahasiswa WHERE id_mahasiswa=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
