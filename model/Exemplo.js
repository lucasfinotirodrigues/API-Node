const mongoose = require('mongoose');

const exemploSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
});

const Exemplo = mongoose.model('Exemplo', exemploSchema);

module.exports = Exemplo;
