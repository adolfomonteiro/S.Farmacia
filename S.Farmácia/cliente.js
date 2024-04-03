let email = document.getElementById("email")
let senha = document.getElementById("senha")
var check = document.getElementById("check")
check.addEventListener("change",()=>{
  if(senha.type === "password"){
    senha.type = "text"
  }
  else{
    senha.type = "password"
  }
})
next.addEventListener("click",()=>{
  if(email.value == "" && senha.value == ""){
    alert("Preencha todos os Campos!")
  }
  else if(email.value && senha.value ==""){
   alert("Precisa agora colocar a senha")
  }
  else if(senha.value && email.value ==""){
    alert("Precisa agora colocar o email")
  }
  else if(email.value && senha.value){
    var emailGuardado = email.value
    var senhaGuardada = senha.value
    
    console.log(emailGuardado)
    console.log(senhaGuardada)
    
    
    window.location.href = "splach.html"
  }
})