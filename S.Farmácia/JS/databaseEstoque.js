let contador = 0
let e = 0
let s = 0
function addDados(){
  Id()
  nomeProduto()
  preco()
  entrada()
  saida()
}
addDados()
function Id(){
    var cont = contador + 1
    var dados = localStorage.getItem("myData")
    if(dados){
        dados = JSON.parse(dados)
        var elemento = document.getElementById("id")
        elemento.textContent += `${cont}`
    }
}

function nomeProduto(){
var dados = localStorage.getItem("myData")
if(dados){
    dados = JSON.parse(dados)
    var elemento = document.getElementById("nomeProduto")
    elemento.textContent += `${dados.nome}`
    }
}

function preco(){
var  dados = localStorage.getItem("myData")
if(dados){
    dados = JSON.parse(dados)

    var elemento = document.getElementById("preco")
    elemento.textContent += `${dados.preco}`
}
}

function entrada(){
let res =  e
    var elemento = document.getElementById("entrada")
   
    if(e == 0){
      elemento.textContent = `${e+1}`
    }
    else{
      alert("Produto Já Adicionado")
      elemento.textContent = `${e+1}`
    }
}
function saida(){

    var elemento = document.getElementById("saida")
    if(s == 0){
      elemento.textContent = `${s}`
    }
    else{
      //Funcao que Elimina Dados da Tabela
    elemento.textContent = `${s-1}`
  }
}