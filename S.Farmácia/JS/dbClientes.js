let tabela = document.getElementById("tabela")
function Adicionar(){
    var dados_usuario = localStorage.getItem("userData")

    if(dados_usuario){
        dados_usuario = JSON.parse(dados_usuario)
        tabela.innerHTML +=`
        <td>
            `+dados_usuario.email+`
        </td>
        <td>
            `+dados_usuario.nome+`
        </td>
        <td>
            `+dados_usuario.telefone+`
        </td>
        <td>
            `+dados_usuario.passwor+`
        </td>`
    }
}
Adicionar()
function Email(){
    var dados_usuario = localStorage.getItem("userData")

    if(dados_usuario){
        dados_usuario = JSON.parse(dados_usuario)

        var elemento = document.getElementById("Email")
        elemento.innerHTML += `${dados_usuario.email}`
    }
}
Email()
function Nome(){
var dados = localStorage.getItem("userData")

if(dados){

    dados = JSON.parse(dados)

    var e = document.getElementById("Nome")
    e.textContent += `${dados.nome}`
}
}
Nome()
function Telefone(){
var dados = localStorage.getItem("userData")

if(dados){

    dados = JSON.parse(dados)

    var e = document.getElementById("Telefone")
    e.textContent += `${dados.telefone}`
}
}
Telefone()
function Senha(){
    var dados_usuario = localStorage.getItem("userData")
    if(dados_usuario){
        dados_usuario = JSON.parse(dados_usuario)

        var elemento = document.getElementById("Senha")
        elemento.textContent += `${dados_usuario.password}`
    }
}
Senha()