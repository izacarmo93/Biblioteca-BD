const LivroModel = {

    buscarTodos: async () => {
        try {

            const pool = await getConnection();

            const querySQL = 'SELECT * FROM Livros';

            const result = await pool.request()
                .query(querySQL);

            return result.recordset;

        } catch (error) {

            console.error("Erro ao buscar Livros:", error);
            throw error; // Reverberar o erro para a função que o chama.


        }
    },

    buscarUm: async (idLivros) => {
        try {
            const pool = await getConnection();

            const querySQL = `
            SELECT * FROM livros
            WHERE idLivros = @idLivros
            `;

            const result = await pool.request()
                .input('idLivros', sql.UniqueIdentifier, idLivros)
                .query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            throw error; // Reverberar o erro para a função que o chama.

        }
    },

}