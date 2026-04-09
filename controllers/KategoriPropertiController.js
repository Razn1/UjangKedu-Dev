const KategoriProperti = require('../models/kategori_properti');

exports.getAll = (req, res) => {
  KategoriProperti.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  KategoriProperti.getById(id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.create = (req, res) => {
  const data = req.body;
  KategoriProperti.create(data, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data berhasil ditambahkan', results });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  KategoriProperti.update(id, data, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data berhasil diupdate', results });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  KategoriProperti.delete(id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data berhasil dihapus', results });
  });
};