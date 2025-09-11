let plantasArray = []
let numeroId = -1
let numeroTotalPlantas = 0

let nome = document.querySelector("#nome")

async function carregarPlantas() {
    const resposta = await fetch('http://localhost:3000/buscar')
    const plantas = await resposta.json()

    plantasArray = plantas
    console.log(plantas)
    numeroTotalPlantas = plantas.length

    botaoAvancar.disabled = false
    botaoVoltar.disabled = false
}

function avancarPlanta() {
    if (numeroId < numeroTotalPlantas - 1) {
        numeroId++
        nome.textContent = plantasArray[numeroId].nome

    } else {
        console.log("Fim da lista de plantas - Avancar")
    }
}

const botaoAvancar = document.querySelector("#btnProximo")
botaoAvancar.addEventListener("click", avancarPlanta)


function VoltarPlanta(){
    if (numeroId > 0) {
        numeroId--
        nome.textContent = plantasArray[numeroId].nome
    } else {
        console.log("Fim da lista de plantas - Anterior")
    }
}
const botaoVoltar = document.querySelector("#btnVoltar")
botaoVoltar.addEventListener("click", VoltarPlanta)

botaoAvancar.disabled = true
botaoVoltar.disabled = true
carregarPlantas()
