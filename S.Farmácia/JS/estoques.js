function nomeProduto(){
    var dados = localStorage.getItem("myData")
    if(dados){
        dados = JSON.parse(dados)
        var elemento = document.getElementById("nomeProduto")
        elemento.textContent += `${dados.nome}`
        }
    }
  nomeProduto()