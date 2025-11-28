const sql = require("mssql");

const config = {   
    user: "sa",
    password: "123456789",
    server: "localhost",
    database: "BibliotecaBD",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;

    } catch (error) {
        console.error("Erro na conexão com o banco de dados:", error);
        throw error;
    }
}

(async () => {
    const pool = await getConnection();

    if (pool) {
        console.log("Conexão com o BD bem-sucedida!");
    }
})()

module.exports = { sql, getConnection };