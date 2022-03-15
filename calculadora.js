let x = document.getElementById("x")
let y = document.getElementById("y")
let resultado = document.getElementById("resultado")

function somar() {
    let soma = parseFloat(x.value) + parseFloat(y.value)
    resultado.value = soma
}

function diminuir() {
    let diferenca = parseFloat(x.value) - parseFloat(y.value)
    resultado.value = diferenca

}

function multiplicar(){
    let produto = parseFloat(x.value) * parseFloat(y.value)
    resultado.value = produto

}

function dividir(){
    let divisao = parseFloat(x.value) / parseFloat(y.value)
    resultado.value = divisao

}

function potencia(){
    let pot = parseFloat(x.value) ** parseFloat(y.value)
    resultado.value = pot

}

function raiz(){
    let quadrada = Math.sqrt(parseFloat(x.value))
    resultado.value = quadrada

}

function resto(){
    let rest = parseFloat(x.value) % parseFloat(y.value)
    resultado.value = rest

}

function limpar(){
    x.value= ""
    y.value = ""
    resultado.value = ""
}