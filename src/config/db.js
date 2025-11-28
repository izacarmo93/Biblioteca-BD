const sql = require("mssql");

const config = {
    user: "BDLivros",
    password: "123456789",
    server: "localhost",
    database: "bibliotecaBD",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('erro na conexão com o banco de dados:', error);
        throw error; // importante
    }
}

module.exports = {sql, getConnection};