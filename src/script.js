document.addEventListener("DOMContentLoaded", () => {
let plantasArray = []
let numeroId = 0
let numeroTotalPlantas = 0

let listaInformacoes = document.querySelector("#informacoes-recuperadas")
let fotoPK = document.querySelector("#fotoPK")

async function carregarPlantas() {
    const resposta = await fetch('http://localhost:3000/buscar')
    const plantas = await resposta.json()
    console.log(plantas)

    plantasArray = plantas
    
    numeroTotalPlantas = plantas.length

    botaoAvancar.disabled = false
    botaoVoltar.disabled = false

    mostrarPlanta()
}

function mostrarPlanta() {
    if (numeroId >= 0 && numeroId < numeroTotalPlantas) {
        const planta = plantasArray[numeroId]

        fotoPK.src = `${planta.imagem}`

        listaInformacoes.innerHTML = `
            <h4>${planta.nome_popular} (${planta.nome_cientifico})</h4>
            <p><strong>Família:</strong> ${planta.familia_botanica}</p>
            <p><strong>Origem:</strong> ${planta.origem_distribuicao}</p>
            <p><strong>Usos medicinais:</strong> ${planta.usos_medicinais}</p>
            <p><strong>Princípios ativos:</strong> ${planta.principios_ativos}</p>
            <p><strong>Parte utilizada:</strong> ${planta.parte_utilizada}</p>
            <p><strong>Modo de preparo:</strong> ${planta.modo_preparo}</p>
            <p><strong>Contraindicações:</strong> ${planta.contraindicacoes}</p>
        `
    }
}


function avancarPlanta() {
    if (numeroId < numeroTotalPlantas - 1) {
        numeroId++
        mostrarPlanta()
    } else {
        console.log("Fim da lista de plantas - Avancar")
    }
}

const botaoAvancar = document.querySelector("#btnProximo")
botaoAvancar.addEventListener("click", avancarPlanta)


function VoltarPlanta(){
    if (numeroId > 0) {
        numeroId--
        mostrarPlanta()
    } else {
        console.log("Fim da lista de plantas - Anterior")
    }
}
const botaoVoltar = document.querySelector("#btnVoltar")
botaoVoltar.addEventListener("click", VoltarPlanta)

botaoAvancar.disabled = true
botaoVoltar.disabled = true
carregarPlantas()


});