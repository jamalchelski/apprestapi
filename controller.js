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

//menambahkan data mahsiswa
exports.tambahMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO tbl_mahasiswa (nim,nama,jurusan) VALUES(?,?,?)",
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok("Berhasil menambahkan data", res);
      }
    }
  );
};

// mengubah data berdasarkan ID
exports.ubahDataMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    "UPDATE tbl_mahasiswa SET nim=?,nama=?,jurusan=? WHERE id_mahasiswa=?",
    [nim, nama, jurusan, id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok("Berhasil Update data", res);
      }
    }
  );
};

//menghapus data berdasarkan id mahasiswa
exports.hapusDataMahasiswa = function (req, res) {
  var id = req.body.id_mahasiswa;

  connection.query(
    "DELETE FROM tbl_mahasiswa WHERE id_mahasiswa=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok("Data berhasil dihapus", res);
      }
    }
  );
};

//menampilkan matakuliah grup
exports.tampilGrupMatakuliah = function (req, res) {
  connection.query(
    "SELECT tbl_mahasiswa.id_mahasiswa, tbl_mahasiswa.nim, tbl_mahasiswa.nama, tbl_mahasiswa.jurusan, tbl_matakuliah.matakuliah, tbl_matakuliah.sks FROM tbl_krs JOIN tbl_matakuliah JOIN tbl_mahasiswa WHERE tbl_krs.id_matakuliah = tbl_matakuliah.id_matakuliah AND tbl_krs.id_mahasiswa = tbl_mahasiswa.id_mahasiswa ORDER BY tbl_mahasiswa.id_mahasiswa",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.oknested(rows, res);
      }
    }
  );
};
