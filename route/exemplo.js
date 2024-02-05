const express = require('express');
const router = express.Router();
const Exemplo = require('../models/Exemplo');

router.get('/', async (req, res) => {
  try {
    const exemplos = await Exemplo.find();
    res.json(exemplos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const exemplo = new Exemplo({
    nome: req.body.nome,
    descricao: req.body.descricao,
  });

  try {
    const novoExemplo = await exemplo.save();
    res.status(201).json(novoExemplo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
