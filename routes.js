"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilSemuaMahasiswa);

  app.route("/tampil/:id").get(jsonku.tampilById);

  app.route("/tambah").post(jsonku.tambahMahasiswa);
};
