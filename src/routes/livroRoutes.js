const express = require('express');
const {livroController} = require('../controllers/livroController');
const router = express.Router();


router.get('/livros', livroController.listarLivros);
router.post('/livros', livroController.inserirLivros);

module.exports = { livroRoutes: router };