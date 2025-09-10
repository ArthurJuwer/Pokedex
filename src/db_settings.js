const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "herbario",
    port: 3306
})

connection.connect(mysql, (err)=>{
    try{
        console.log("Servidor Conectado")
    } catch {
        console.error(`ERRO ${err}`)
    }
    
})

module.exports = connection