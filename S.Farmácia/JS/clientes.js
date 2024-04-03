function Seguinte(){
  
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if(email == "" && senha ==""){
        alert("Preencha Todos os Campos vazios!")
    }
    else if(email ==""){
        alert("Coloque Email")
    }
    else if(senha == ""){
        alert("Coloque Senha")
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