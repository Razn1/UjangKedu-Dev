const PaketIklan = require('../models/paket_iklan');

exports.getAll = (req, res) => {
  PaketIklan.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  PaketIklan.getById(id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.create = (req, res) => {
  const data = req.body;
  PaketIklan.create(data, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data berhasil ditambahkan', results });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  PaketIklan.update(id, data, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data berhasil diupdate', results });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  PaketIklan.delete(id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data berhasil dihapus', results });
  });
};