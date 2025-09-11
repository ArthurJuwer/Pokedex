const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "herbario",
})

connection.connect((err)=>{
    try{
        console.log("Servidor Conectado")
    } catch {
        console.error(`ERRO ${err}`)
    }
    
})

module.exports = connection