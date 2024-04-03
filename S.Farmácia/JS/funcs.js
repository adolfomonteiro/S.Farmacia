function Seguinte(){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var senha = document.getElementById("senha").value

    if(nome == "" && email == "" && senha =="" && telefone == ""){
        alert("Preencha Todos os Campos vazios!")
    }
    else if(nome == ""){
        alert("Coloque Nome")
    }
    else if(email ==""){
        alert("Coloque Email")
    }
    else if(senha == ""){
        alert("Coloque Senha")
    }
    else if(telefone == ""){
        alert("Coloque Contacto")
    }
    else{
    var usuario = {
        email : email
    }
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""

    localStorage.setItem("userData",JSON.stringify(usuario))
    window.location.href = "load.html"
}
}
 