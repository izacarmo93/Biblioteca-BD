const { sql, getConnection } = require("../config/db");

const livrosModel = {

    buscarTodos: async () => {
        try {
            const pool = await getConnection();
            const result = await pool.request().query("SELECT * FROM Livros");
            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar livros:", error);
            throw error;
        }
    },

    CadastrarLivro: async (livro) => {
        try {
            const { tituloLivro, anoPublicacao, qtdExemplares, nomeAutor } = livro;

            const pool = await getConnection();

            const querySQL = `
                INSERT INTO Livros (tituloLivro, anoPublicacao, qtdExemplares, nomeAutor)
                VALUES (@tituloLivro, @anoPublicacao, @qtdExemplares, @nomeAutor)
            `;

            await pool.request()
                .input("tituloLivro", sql.VarChar, tituloLivro)
                .input("anoPublicacao", sql.Int, anoPublicacao)
                .input("qtdExemplares", sql.Int, qtdExemplares)
                .input("nomeAutor", sql.VarChar, nomeAutor)
                .query(querySQL);

            return { mensagem: "Livro cadastrado com sucesso!" };

        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
            throw error;
        }
    }
};

module.exports = { livrosModel };