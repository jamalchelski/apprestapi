"use strict";

exports.ok = function (values, res) {
  var data = {
    status: 200,
    value: values,
  };

  res.json(data);
  res.end();
};

//response untuk nested matakuliah
exports.oknested = function (values, res) {
  //lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    //tentukan key grup
    if (akumulasikan[item.nama]) {
      //buat variable grup nama mahasiswa
      const group = akumulasikan[item.nama];
      //cek jika isi array adalah matakuliah
      if (Array.isArray(group.matakuliah)) {
        //tambahkan valuenya ke dalam grup mata kuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});

  var data = {
    status: 200,
    value: hasil,
  };
  res.json(data);
  res.end();
};
