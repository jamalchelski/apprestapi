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
