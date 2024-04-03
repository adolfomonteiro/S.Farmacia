function Cadastrar(){
    let email = String(document.getElementById("email").value)
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let password = document.getElementById("password").value
    
    let erro = document.getElementById("erro")
    let erro_nome = document.getElementById("erro_nome")
    let erro_email = document.getElementById("erro_email")
    let erro_telefone = document.getElementById("erro_telefone")
    let erro_password = document.getElementById("erro_password")

    var usuario = {
        email : email,
        nome : nome,
        telefone : telefone,
        password : password
}

localStorage.setItem("userData",JSON.stringify(usuario))
    if(email == "" && nome == "" && telefone == "" && password == ""){
       erro.innerText =  "Preencha Tudo!"
       erro_nome.innerText = ""
       erro_email.innerText = ""
       erro_password.innerText = ""
       erro_telefone.innerText = ""
    }
    else if(email == ""){
        erro_email.innerText = "Coloque o Email"
        erro.innerText =  ""
        erro_nome.innerText = ""
        erro_password.innerText = ""
        erro_telefone.innerText = ""
    }
    else if(nome == ""){
        erro_nome.innerText =  "Coloque o Nome"
        erro.innerText =  ""
        erro_email.innerText = ""
        erro_password.innerText = ""
        erro_telefone.innerText = ""
    }
    else if(telefone == ""){
        erro_telefone.innerText =  "Coloque o Contacto"
        erro.innerText =  ""
        erro_nome.innerText = ""
        erro_email.innerText = ""
        erro_password.innerText = ""
    }
    else if(password == ""){
         erro_password.innerText =  "Coloque a Senha"
         erro.innerText =  ""
         erro_nome.innerText = ""
         erro_email.innerText = ""
         erro_telefone.innerText = ""
    }
    else{
        location.href = "load.html"
    }
}