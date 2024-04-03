const stock = []
const salario = []

function Adicionar(){
  const produto = document.getElementById('produto')
  const quantidade = document.getElementById('quantidade')
  
  const nomeDoProduto = produto.value.trim()
  const quantidadeDeProduto = parseInt(quantidade.value)
  
  if(nomeDoProduto !== '' && isNaN(quantidadeDeProduto) && quantidadeDeProduto > 0){
    
    const existeProduto = stock.findIndex(item => item.nomeDoProduto === nomeDoProduto)
    if(existeProduto === -1){
     stock[existeProduto].entrada +=  quantidadeDeProduto
    }
    else{
      stock.push({
        nomeDoProduto, entrada:quantidadeDeProduto,saida:0
      })
    }
    Stock()
    Atualizacao()
    nomeDoProduto.value = ''
    quantidadeDeProduto.value = ''
  }
}
function Produto(indice){
  const quantidade_vendida = prompt(`Quantidade a vender para ${stock[indice].nomeDoProduto}:`,1)
  const quantidadeInteira = parseInt(quantidade_vendida)
  
  if(!isNaN(quantidadeInteira) && quantidadeInteira > 0 && quantidade_vendida <= stock[indice].entrada){
    stock[indice].saida += quantidadeInteira
    stock[indice].saldo = stock[indice].entrada - stock[indice].saida
    Stock()
    Atualizacao()
}
else{
  alert(`Quantidade Inválida e Insuficiente.`)
}
}
function Stock(){
  const stockTabela = document.getElementById("stockTabela")
  
  stockTabela.innerHTML = ''
  stock.forEach((item,indice)=>{
    const linha = stockTabela.insertRow()
    const tabela1 = linha.insertCell(0)
    const tabela2 = linha.insertCell(1) 
    const tabela3 = linha.insertCell(2)
    const tabela4 = linha.insertCell(3)
    
    tabela1.innerHTML = item.nomeDoProduto
    tabela2.innerHTML = item.entrada
    tabela3.innerHTML = item.saldo
    tabela4.innerHTML = `<button onclick="Produto(${indice})">Vender</button>`
  })
}
function Atualizacao(){
  const totaldeEntradas = stock.reduce((total,item) => total + item.entrada, 0)
  const totaldeSaidas = stock.reduce((total,item)=>total+item.saida,0)
  
   document.getElementById("totaldeEntradas").innerText = totaldeEntradas
   document.getElementById("totaldeSaidas").innerText = totaldeSaidas
}
function Adicionar(){
  const nome = document.getElementById("nome")
  const salarios = document.getElementById("salario")
  
  const nomeInput = nome.value.trim()
  const salarioInput =parseFloat(salarios.value)
  
  if(nomeInput !== '' && !isNaN(salarioInput) && salarioInput > 0){
    salario.push({
      nomeInput, salarioInput
    })
    Salarios()
    AtualizacaoTotal()
    
    nomeInput.value = ''
    salarioInput.value = ''
  }
}
function Salarios(){
  const salarioElementar = document.getElementById("totalSalarios")
  const totalSalario = salario.reduce((total,item)=>total + item.salarios,0)
  salarioElementar.innerText = totalSalario
}
function AtualizacaoTotal(){
  const totalsalarios = salario.reduce((total,item) => total + item.salarios,0)
  document.getElementById("totalSalarios").innetText = totalsalariis
}