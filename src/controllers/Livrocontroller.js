const { Router } = require("express");
const {livrosModel} = require("../models/livrosModel");

const livroController = {

    listarLivros: async (req, res) => {
        try {
            const livros = await livrosModel.buscarTodos();
            res.status(200).json(livros);

        } catch (error) {
            console.error("Erro ao buscar livros:", error);
            res.status(500).json({ erro: "Erro ao buscar livros" });
        }
    },

    inserirLivros: async (req, res) => {
        try {
            const { tituloLivro, anoPublicacao, qtdExemplares, nomeAutor } = req.body;

            if (!tituloLivro || !anoPublicacao || !qtdExemplares || !nomeAutor) {
                return res.status(400).json({ erro: "Campos obrigatórios faltando." });
            }

            await livrosModel.CadastrarLivro({
                tituloLivro,
                anoPublicacao,
                qtdExemplares,
                nomeAutor
            });

            res.status(201).json({ mensagem: "Livro cadastrado com sucesso!" });

        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
            res.status(500).json({ erro: "Erro ao cadastrar livro" });
        }
    }
};

module.exports = { livroController };