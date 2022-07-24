//order data dari tabel krs

SELECT tbl_mahasiswa.id_mahasiswa, tbl_mahasiswa.nim, tbl_mahasiswa.nama, tbl_mahasiswa.jurusan, tbl_matakuliah.matakuliah, tbl_matakuliah.sks
FROM tbl_krs
JOIN tbl_matakuliah
JOIN tbl_mahasiswa
WHERE tbl_krs.id_matakuliah = tbl_matakuliah.id_matakuliah
AND tbl_krs.id_mahasiswa = tbl_mahasiswa.id_mahasiswa
ORDER BY tbl_mahasiswa.id_mahasiswa