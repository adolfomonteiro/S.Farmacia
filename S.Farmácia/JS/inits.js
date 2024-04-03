function email(){
    var dados_usuario = localStorage.getItem("userData")
    if(dados_usuario){
        dados_usuario = JSON.parse(dados_usuario)

        var elemento = document.getElementById("email")
        if(dados_usuario.nome){
        elemento.textContent = `${dados_usuario.nome}`
    }
    else if(dados_usuario.email){
        elemento.textContent = `${dados_usuario.email}`
    }
    }
}
email()
function Processar(){
    const menu = document.getElementById("menu")
    let body = document.getElementsByTagName("body")[0]
    
    menu.addEventListener("change",()=>{
        const menuValue = menu.value
    
        if(menuValue === "Cliente"){
            location.href = "cliente.html?adolfo"
        }
        else if(menuValue === "Cadastrar"){
            location.href = "cadastrar.html?adolfo"
        }
        else if(menuValue === "Funcionário"){
            location.href = "func.html?adolfo"
        }
        else if(menuValue === "Gerente"){
            location.href = "gerente.html?adolfo"
        }
    })
}