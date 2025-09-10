const express = require("express")
const cors = require("cors")
const db = require("./db_settings")
const { json } = require("body-parser")

const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.get("/buscar", (req,res) => {
    db.query("SELECT foto, nome, dominio, cores FROM plantas", (err, results)=>{
        if(err){
            console.error("Ocorreu um erro: " + err)
            res.status(500, json({ erro: "Erro ao buscar" }))
        } else {
            res.json({
                foto: foto,
                nome: nome,
                dominio: dominio
            })
        }
    })
    
})


app.listen(port, ()=> {
    console.log(`Servidor funcionando na porta ${port}, ou para facilitar http://localhost:${port}`)
})

