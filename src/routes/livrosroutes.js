const express = require('express');
const LivroController = require('../controllers/LivroController');
const router = express.Router();

router.get('/livros', LivroController.listarLivros);
router.post('/livros', LivroController.inserirLivros);

module.exports = {livrosRoutes:router};